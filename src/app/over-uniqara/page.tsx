import { redirect } from "next/navigation";
import { routes } from "@/content/routes";

export default function OverUniqaraPage() {
  redirect(routes.wieZijnWij.href);
}
