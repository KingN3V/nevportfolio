import { ImageResponse } from "next/og";

export const alt = "Neville Ken | Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background: "#f4eee6",
        color: "#2b2118",
      }}
    >
      <div
        style={{
          fontSize: 28,
          letterSpacing: 6,
          color: "#9a5b3a",
          textTransform: "uppercase",
        }}
      >
        Backend systems and APIs
      </div>
      <div style={{ fontSize: 96, fontWeight: 700, marginTop: 20 }}>
        Neville Ken
      </div>
      <div style={{ fontSize: 44, marginTop: 10, color: "#6b5d50" }}>
        Software Engineer
      </div>
    </div>,
    size,
  );
}
