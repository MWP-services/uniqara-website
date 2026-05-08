import { redirect } from "next/navigation";
import { routes } from "@/content/routes";

export default function HulpvragenPage() {
  redirect(routes.hulpaanbod.href);
}
