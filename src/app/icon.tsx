import { ImageResponse } from "next/og";
import { seo } from "@/content/seo";

export const alt = seo.assets.faviconPlaceholder;

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          border: "28px solid #eaf3eb",
          color: "#2f7652",
          display: "flex",
          fontSize: 196,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        U
      </div>
    ),
    size,
  );
}
