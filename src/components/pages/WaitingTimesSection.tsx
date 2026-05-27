import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { getWaitingTimes } from "@/lib/waitingTimes";

export async function WaitingTimesSection() {
  const waitingTimes = await getWaitingTimes();
  const hasLiveData = waitingTimes.source === "sheet";

  return (
    <Section id="wachttijden" variant="white">
      <Container>
        <div className="surface-panel overflow-hidden">
          <div className="border-b border-border-soft px-4 py-5 sm:px-6">
            <p className="eyebrow">Wachttijden</p>
            <h2 className="mt-4 text-2xl sm:text-3xl">Actuele wachttijden</h2>
            <p className="mt-3 max-w-3xl text-body">
              Hieronder staat per onderdeel de actuele wachttijd of
              aanmeldstatus. De informatie kan wijzigen wanneer de ruimte in de
              agenda verandert.
            </p>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {waitingTimes.rows.map((row) => (
              <article
                key={`${row.item}-${row.waitingTime}-${row.status}`}
                className="rounded-soft border border-border-soft bg-card p-4"
              >
                <h3 className="text-base font-semibold text-foreground">
                  {row.item || "Algemeen"}
                </h3>
                <dl className="mt-3 grid gap-3 text-sm">
                  <div>
                    <dt className="font-semibold text-foreground">
                      Wachttijd
                    </dt>
                    <dd className="mt-1 text-muted">
                      {row.waitingTime || "Nog niet bekend"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Status</dt>
                    <dd className="mt-1 text-muted">
                      {row.status || "Nog niet bekend"}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      Toelichting
                    </dt>
                    <dd className="mt-1 text-muted">{row.note || "-"}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">
                      Bijgewerkt
                    </dt>
                    <dd className="mt-1 text-muted">{row.updatedAt || "-"}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="hidden overflow-x-auto md:block">
            <table className="w-full min-w-full border-collapse text-left">
              <caption className="sr-only">
                Overzicht van actuele wachttijden bij Uniqara
              </caption>
              <thead className="bg-brand-green-soft">
                <tr className="text-sm font-semibold text-foreground">
                  <th className="px-4 py-3 sm:px-6" scope="col">
                    Onderdeel
                  </th>
                  <th className="px-4 py-3 sm:px-6" scope="col">
                    Wachttijd
                  </th>
                  <th className="px-4 py-3 sm:px-6" scope="col">
                    Status
                  </th>
                  <th className="px-4 py-3 sm:px-6" scope="col">
                    Toelichting
                  </th>
                  <th className="px-4 py-3 sm:px-6" scope="col">
                    Bijgewerkt
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-soft bg-card">
                {waitingTimes.rows.map((row) => (
                  <tr key={`${row.item}-${row.waitingTime}-${row.status}`}>
                    <th
                      className="px-4 py-4 align-top text-sm font-semibold text-foreground sm:px-6"
                      scope="row"
                    >
                      {row.item || "Algemeen"}
                    </th>
                    <td className="px-4 py-4 align-top text-sm text-muted sm:px-6">
                      {row.waitingTime || "Nog niet bekend"}
                    </td>
                    <td className="px-4 py-4 align-top text-sm text-muted sm:px-6">
                      {row.status || "Nog niet bekend"}
                    </td>
                    <td className="px-4 py-4 align-top text-sm text-muted sm:px-6">
                      {row.note || "-"}
                    </td>
                    <td className="px-4 py-4 align-top text-sm text-muted sm:px-6">
                      {row.updatedAt || "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {!hasLiveData ? (
            <p className="border-t border-border-soft bg-accent-yellow-soft px-4 py-4 text-sm text-muted-foreground sm:px-6">
              De actuele wachttijden worden binnenkort aangevuld.
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
