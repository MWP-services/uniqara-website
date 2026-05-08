import { ImageResponse } from "next/og";
import { seo } from "@/content/seo";

export const alt = seo.assets.socialPreviewAlt;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#FDF6EC",
          color: "#3F4A4A",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            border: "2px solid #63CFC6",
            borderRadius: "18px",
            color: "#3F4A4A",
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            height: 86,
            justifyContent: "center",
            padding: "0 30px",
            width: 500,
          }}
        >
          LOGO PLACEHOLDER - UNIQARA
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              color: "#3F4A4A",
              fontSize: 30,
              fontWeight: 700,
              margin: 0,
              marginBottom: 24,
            }}
          >
            {seo.assets.socialPreviewPlaceholder}
          </p>
          <h1
            style={{
              color: "#3F4A4A",
              fontSize: 72,
              lineHeight: 1.05,
              margin: 0,
              maxWidth: 940,
            }}
          >
            {seo.siteName}
          </h1>
          <p
            style={{
              color: "#536060",
              fontSize: 32,
              lineHeight: 1.35,
              margin: 0,
              marginTop: 24,
              maxWidth: 860,
            }}
          >
            Rustige psychologiepraktijk in een groene omgeving.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 18,
          }}
        >
          <div
            style={{
              background: "#63CFC6",
              borderRadius: 16,
              height: 74,
              width: 220,
            }}
          />
          <div
            style={{
              background: "#F8E98E",
              borderRadius: 16,
              height: 74,
              width: 220,
            }}
          />
          <div
            style={{
              background: "#F6A38C",
              borderRadius: 16,
              height: 74,
              width: 220,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
