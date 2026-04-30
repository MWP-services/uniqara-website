"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import type { ContactContent } from "@/content/contact";

type ContactFormPlaceholderProps = {
  form: ContactContent["form"];
};

const inputClasses =
  "mt-2 min-h-12 w-full rounded-soft border border-border-soft bg-white px-4 py-3 text-base text-foreground shadow-none transition placeholder:text-muted focus:border-brand-green focus:outline-none focus:ring-4 focus:ring-focus-ring/25";

export function ContactFormPlaceholder({ form }: ContactFormPlaceholderProps) {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(form.successMessage);
  }

  return (
    <form
      aria-describedby="contact-form-note"
      className="space-y-5"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-foreground">
          {form.fields.name}
          <input
            autoComplete="name"
            className={inputClasses}
            name="name"
            placeholder="Voor- en achternaam"
            required
            type="text"
          />
        </label>
        <label className="block text-sm font-semibold text-foreground">
          {form.fields.email}
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            placeholder="naam@example.nl"
            required
            type="email"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-foreground">
          {form.fields.phone}
          <input
            autoComplete="tel"
            className={inputClasses}
            name="phone"
            placeholder="Telefoonnummer volgt"
            type="tel"
          />
        </label>
        <label className="block text-sm font-semibold text-foreground">
          {form.fields.subject}
          <input
            className={inputClasses}
            name="subject"
            placeholder="Bijvoorbeeld: kennismaking"
            type="text"
          />
        </label>
      </div>

      <label className="block text-sm font-semibold text-foreground">
        {form.fields.message}
        <textarea
          className={`${inputClasses} min-h-36 resize-y`}
          name="message"
          placeholder="Schrijf kort waarover je contact zoekt."
          required
        />
      </label>

      <p id="contact-form-note" className="text-support">
        {form.handlerPlaceholder}
      </p>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit">{form.submitLabel}</Button>
        {status ? (
          <p className="text-support rounded-soft border border-border-soft bg-accent-yellow-soft px-4 py-3">
            {status}
          </p>
        ) : null}
      </div>
    </form>
  );
}
