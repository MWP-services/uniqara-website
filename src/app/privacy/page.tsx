import { redirect } from "next/navigation";
import { routes } from "@/content/routes";

export default function PrivacyPage() {
  redirect(routes.praktischePrivacy.href);
}
