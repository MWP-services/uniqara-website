import { Resend } from "resend";
import { contact } from "@/content/contact";
import { site } from "@/content/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  city?: unknown;
  careType?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  careType: string;
  subject: string;
  message: string;
};

const fieldLimits = {
  name: 120,
  email: 254,
  phone: 40,
  city: 120,
  careType: 80,
  subject: 160,
  message: 2000,
} satisfies Record<keyof ContactFormData, number>;

const successMessage =
  "Bedankt, je bericht is verzonden. We nemen zo snel mogelijk contact met je op.";
const fallbackErrorMessage =
  "Het bericht kon niet worden verzonden. Probeer het later opnieuw of mail direct naar contact@uniqara.nl.";
const developmentMissingConfigMessage =
  "Ontwikkelmodus: het formulier werkt, maar er is nog geen e-mail verzonden omdat de Resend-configuratie ontbreekt.";

function asTrimmedString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePayload(payload: ContactPayload) {
  const formData: ContactFormData = {
    name: asTrimmedString(payload.name),
    email: asTrimmedString(payload.email),
    phone: asTrimmedString(payload.phone),
    city: asTrimmedString(payload.city),
    careType: asTrimmedString(payload.careType),
    subject: asTrimmedString(payload.subject),
    message: asTrimmedString(payload.message),
  };

  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!formData.name) {
    errors.name = "Vul je naam in.";
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Vul een geldig e-mailadres in.";
  }

  if (!formData.city) {
    errors.city = "Vul je woonplaats in.";
  }

  if (!contact.form.careTypeOptions.includes(formData.careType)) {
    errors.careType = "Kies waarvoor je hulp zoekt.";
  }

  if (!formData.message) {
    errors.message = "Vul je hulpvraag of bericht in.";
  }

  for (const [field, limit] of Object.entries(fieldLimits) as [
    keyof ContactFormData,
    number,
  ][]) {
    if (formData[field].length > limit) {
      errors[field] = `Gebruik maximaal ${limit} tekens.`;
    }
  }

  return {
    data: formData,
    errors,
    isValid: Object.keys(errors).length === 0,
  };
}

function buildEmailText(data: ContactFormData) {
  return [
    `Nieuw bericht via het contactformulier van ${site.name}.`,
    "",
    `Naam: ${data.name}`,
    `E-mailadres: ${data.email}`,
    `Telefoonnummer: ${data.phone || "-"}`,
    `Woonplaats: ${data.city}`,
    `Waarvoor zoek je hulp: ${data.careType}`,
    `Onderwerp: ${data.subject || "-"}`,
    "",
    "Bericht:",
    data.message,
  ].join("\n");
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      {
        ok: false,
        message: "Het formulier kon niet worden gelezen. Probeer het opnieuw.",
      },
      { status: 400 },
    );
  }

  if (asTrimmedString(payload.website)) {
    return Response.json({ ok: true, message: successMessage });
  }

  const validation = validatePayload(payload);

  if (!validation.isValid) {
    return Response.json(
      {
        ok: false,
        errors: validation.errors,
        message: "Controleer de ingevulde gegevens.",
      },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_FORM_TO ?? contact.email;
  const from = process.env.CONTACT_FORM_FROM;

  if (!apiKey || !from) {
    console.error("Contact form email configuration is incomplete.");

    if (process.env.NODE_ENV !== "production") {
      return Response.json({
        ok: true,
        message: developmentMissingConfigMessage,
      });
    }

    return Response.json(
      { ok: false, message: fallbackErrorMessage },
      { status: 503 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const subjectSuffix =
      validation.data.subject || validation.data.careType || "nieuw bericht";

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: validation.data.email,
      subject: `Contactformulier ${site.name}: ${subjectSuffix}`,
      text: buildEmailText(validation.data),
    });

    if (!error) {
      return Response.json({ ok: true, message: successMessage });
    }

    console.error("Contact form email failed:", error);
  } catch (error) {
    console.error("Contact form email request failed:", error);
  }

  return Response.json(
    { ok: false, message: fallbackErrorMessage },
    { status: 502 },
  );
}
