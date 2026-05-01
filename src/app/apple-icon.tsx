import { ImageResponse } from "next/og";
import { seo } from "@/content/seo";

export const alt = seo.assets.appIconPlaceholder;

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#ffffff",
          border: "12px solid #eaf3eb",
          borderRadius: "34px",
          color: "#2f7652",
          display: "flex",
          fontSize: 72,
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
