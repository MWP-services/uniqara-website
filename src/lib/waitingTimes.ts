export type WaitingTimeRow = {
  item: string;
  waitingTime: string;
  status: string;
  note: string;
  updatedAt: string;
};

export type WaitingTimesResult = {
  rows: WaitingTimeRow[];
  source: "sheet" | "not-configured" | "error";
};

const WAITING_TIMES_CSV_URL = process.env.WAITING_TIMES_CSV_URL;

const fallbackRows: WaitingTimeRow[] = [
  {
    item: "Algemeen",
    waitingTime: "Wordt binnenkort aangevuld",
    status: "Nog niet gepubliceerd",
    note: "De actuele wachttijden worden hier getoond zodra de Google Sheet is gekoppeld.",
    updatedAt: "",
  },
];

function normalizeHeader(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

function parseBoolean(value: string) {
  const normalized = value.trim().toLowerCase();

  if (!normalized) {
    return true;
  }

  return !["nee", "no", "false", "0", "n", "onwaar"].includes(normalized);
}

function detectDelimiter(headerLine: string) {
  const candidates = [",", ";", "\t"];

  return candidates.reduce((best, candidate) => {
    const candidateCount = headerLine.split(candidate).length;
    const bestCount = headerLine.split(best).length;

    return candidateCount > bestCount ? candidate : best;
  }, ",");
}

function parseCsv(csv: string) {
  const delimiter = detectDelimiter(csv.split(/\r?\n/, 1)[0] ?? "");
  const rows: string[][] = [];
  let currentRow: string[] = [];
  let currentValue = "";
  let inQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const character = csv[index];
    const nextCharacter = csv[index + 1];

    if (character === '"') {
      if (inQuotes && nextCharacter === '"') {
        currentValue += '"';
        index += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (character === delimiter && !inQuotes) {
      currentRow.push(currentValue.trim());
      currentValue = "";
      continue;
    }

    if ((character === "\n" || character === "\r") && !inQuotes) {
      if (character === "\r" && nextCharacter === "\n") {
        index += 1;
      }

      currentRow.push(currentValue.trim());
      rows.push(currentRow);
      currentRow = [];
      currentValue = "";
      continue;
    }

    currentValue += character;
  }

  currentRow.push(currentValue.trim());
  rows.push(currentRow);

  return rows.filter((row) => row.some((value) => value.length > 0));
}

function valueFor(
  row: string[],
  headers: Map<string, number>,
  aliases: string[],
) {
  for (const alias of aliases) {
    const index = headers.get(alias);

    if (index !== undefined) {
      return row[index]?.trim() ?? "";
    }
  }

  return "";
}

function hasHeader(headers: Map<string, number>, aliases: string[]) {
  return aliases.some((alias) => headers.has(alias));
}

function rowsFromVerticalCsv(rows: string[][]): WaitingTimeRow[] {
  const maxColumns = rows.reduce((max, row) => Math.max(max, row.length), 0);
  const waitingRows: WaitingTimeRow[] = [];

  for (let columnIndex = 1; columnIndex < maxColumns; columnIndex += 1) {
    const values = new Map<string, string>();

    for (const row of rows) {
      const label = normalizeHeader(row[0] ?? "");
      const value = row[columnIndex]?.trim() ?? "";

      if (label && value) {
        values.set(label, value);
      }
    }

    if (!parseBoolean(values.get("zichtbaar") ?? "")) {
      continue;
    }

    const row = {
      item:
        values.get("onderdeel") ??
        values.get("doelgroep") ??
        values.get("categorie") ??
        values.get("type") ??
        "",
      waitingTime:
        values.get("wachttijd") ??
        values.get("wachttijden") ??
        values.get("tijd") ??
        "",
      status: values.get("status") ?? values.get("aanmeldstatus") ?? "",
      note:
        values.get("toelichting") ??
        values.get("opmerking") ??
        values.get("notitie") ??
        "",
      updatedAt:
        values.get("laatstbijgewerkt") ??
        values.get("bijgewerkt") ??
        values.get("updated") ??
        values.get("updatedat") ??
        "",
    };

    if (row.item || row.waitingTime || row.status || row.note) {
      waitingRows.push(row);
    }
  }

  return waitingRows;
}

function rowsFromCsv(csv: string): WaitingTimeRow[] {
  const parsedRows = parseCsv(csv);
  const [headerRow, ...dataRows] = parsedRows;

  if (!headerRow) {
    return [];
  }

  const headers = new Map(
    headerRow.map((header, index) => [normalizeHeader(header), index]),
  );

  if (!hasHeader(headers, ["wachttijd", "wachttijden", "tijd"])) {
    return rowsFromVerticalCsv(parsedRows);
  }

  return dataRows
    .filter((row) =>
      parseBoolean(valueFor(row, headers, ["zichtbaar", "visible", "tonen"])),
    )
    .map((row) => ({
      item: valueFor(row, headers, ["onderdeel", "doelgroep", "categorie", "type"]),
      waitingTime: valueFor(row, headers, ["wachttijd", "wachttijden", "tijd"]),
      status: valueFor(row, headers, ["status", "aanmeldstatus"]),
      note: valueFor(row, headers, ["toelichting", "opmerking", "notitie"]),
      updatedAt: valueFor(row, headers, [
        "laatstbijgewerkt",
        "bijgewerkt",
        "updated",
        "updatedat",
      ]),
    }))
    .filter((row) => row.item || row.waitingTime || row.status || row.note);
}

function toCsvUrl(sourceUrl: string) {
  const url = new URL(sourceUrl);

  if (url.hostname !== "docs.google.com") {
    return url.toString();
  }

  const sheetId = url.pathname.match(/\/spreadsheets\/d\/([^/]+)/)?.[1];
  const gid = url.searchParams.get("gid") ?? "0";

  if (!sheetId || url.pathname.includes("/pub")) {
    return url.toString();
  }

  return `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${gid}`;
}

export async function getWaitingTimes(): Promise<WaitingTimesResult> {
  if (!WAITING_TIMES_CSV_URL) {
    return {
      rows: fallbackRows,
      source: "not-configured",
    };
  }

  try {
    const response = await fetch(toCsvUrl(WAITING_TIMES_CSV_URL), {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google Sheet returned ${response.status}`);
    }

    const rows = rowsFromCsv(await response.text());

    return {
      rows: rows.length > 0 ? rows : fallbackRows,
      source: "sheet",
    };
  } catch {
    return {
      rows: fallbackRows,
      source: "error",
    };
  }
}
