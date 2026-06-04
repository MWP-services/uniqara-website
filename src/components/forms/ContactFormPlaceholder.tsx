"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { ContactContent } from "@/content/contact";

type ContactFormPlaceholderProps = {
  form: ContactContent["form"];
  supportEmail: string;
};

const inputClasses =
  "mt-2 min-h-12 w-full min-w-0 rounded-soft border border-border-soft bg-card px-4 py-3 text-base text-foreground shadow-none transition placeholder:text-muted focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-focus-ring/25";

const labelClasses = "block min-w-0 text-sm font-semibold text-foreground";

type FormStatus = {
  message: string;
  type: "error" | "success";
};

export function ContactFormPlaceholder({
  form,
  supportEmail,
}: ContactFormPlaceholderProps) {
  const [status, setStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    setIsSubmitting(true);

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = (await response.json()) as {
        message?: string;
        ok?: boolean;
      };

      if (!response.ok || !result.ok) {
        setStatus({
          message:
            result.message ??
            "Het bericht kon niet worden verzonden. Probeer het later opnieuw.",
          type: "error",
        });
        return;
      }

      formElement.reset();
      setStatus({
        message: result.message ?? form.successMessage,
        type: "success",
      });
    } catch {
      setStatus({
        message:
          `Het bericht kon niet worden verzonden. Controleer je verbinding of mail direct naar ${supportEmail}.`,
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      aria-describedby="contact-form-note"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          {form.fields.name}
          <input
            autoComplete="name"
            className={inputClasses}
            name="name"
            placeholder={form.fieldPlaceholders.name}
            required
            type="text"
          />
        </label>
        <label className={labelClasses}>
          {form.fields.email}
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            placeholder={form.fieldPlaceholders.email}
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          {form.fields.phone}
          <input
            autoComplete="tel"
            className={inputClasses}
            name="phone"
            placeholder={form.fieldPlaceholders.phone}
            type="tel"
          />
        </label>
        <label className={labelClasses}>
          {form.fields.city}
          <input
            autoComplete="address-level2"
            className={inputClasses}
            name="city"
            placeholder={form.fieldPlaceholders.city}
            required
            type="text"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={labelClasses}>
          {form.fields.careType}
          <select
            className={inputClasses}
            defaultValue=""
            name="careType"
            required
          >
            <option disabled value="">
              Kies een optie
            </option>
            {form.careTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className={labelClasses}>
          {form.fields.subject}
          <input
            className={inputClasses}
            name="subject"
            placeholder={form.fieldPlaceholders.subject}
            type="text"
          />
        </label>
      </div>

      <label className={labelClasses}>
        {form.fields.message}
        <textarea
          className={`${inputClasses} min-h-36 resize-y`}
          name="message"
          placeholder={form.fieldPlaceholders.message}
          required
        />
      </label>

      <label className="sr-only" aria-hidden="true">
        Website
        <input
          autoComplete="off"
          className="hidden"
          name="website"
          tabIndex={-1}
          type="text"
        />
      </label>

      <p id="contact-form-note" className="text-support">
        {form.handlerPlaceholder}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button className="w-full sm:w-auto" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Bezig met versturen..." : form.submitLabel}
        </Button>
        {status ? (
          <p
            aria-live="polite"
            className={`text-support rounded-soft border px-4 py-3 ${
              status.type === "success"
                ? "border-border-soft bg-accent-yellow-soft"
                : "border-red-200 bg-red-50 text-red-900"
            }`}
            role={status.type === "error" ? "alert" : "status"}
          >
            {status.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
