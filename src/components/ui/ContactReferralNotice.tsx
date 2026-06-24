import { contact } from "@/content/contact";

type ContactReferralNoticeProps = {
  className?: string;
  compact?: boolean;
};

export function ContactReferralNotice({
  className = "",
  compact = false,
}: ContactReferralNoticeProps) {
  return (
    <p
      className={`rounded-soft border border-brand-green/25 bg-brand-green-soft/55 text-muted-foreground ${
        compact
          ? "px-3 py-2 text-xs leading-5"
          : "px-4 py-3 text-sm leading-6"
      } ${className}`}
    >
      {contact.referralNotice}
    </p>
  );
}
