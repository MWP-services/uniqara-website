import {
  serializeJsonLd,
  structuredData,
} from "@/content/structuredData";

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(structuredData) }}
    />
  );
}
