import { contact } from "@/content/contact";

type ErisietsmisgegaanButtonProps = {
  variant: "contact" | "footer";
};

export function ErisietsmisgegaanButton({
  variant,
}: ErisietsmisgegaanButtonProps) {
  const className =
    variant === "contact"
      ? "erisietsmisgegaanButton"
      : "erisietsmisgegaanFooterButton";
  const src =
    variant === "contact"
      ? contact.complaint.contactImageSrc
      : contact.complaint.footerImageSrc;

  return (
    <a
      className={className}
      style={{ textDecoration: "none" }}
      href={contact.complaint.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={contact.complaint.buttonAriaLabel}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={contact.complaint.buttonAlt} />
    </a>
  );
}
