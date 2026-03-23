import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get("title") || "適職タイプ診断";
  const emoji = searchParams.get("emoji") || "🔍";
  const top1 = searchParams.get("top1") || "創造力";
  const top2 = searchParams.get("top2") || "行動力";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0e0e1a",
          padding: "40px",
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #34d399",
            paddingLeft: "20px",
            paddingRight: "20px",
            paddingTop: "8px",
            paddingBottom: "8px",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              display: "flex",
              color: "#34d399",
              fontSize: "20px",
              fontWeight: 900,
              letterSpacing: "0.2em",
            }}
          >
            診断結果
          </span>
        </div>

        {/* Emoji */}
        <div
          style={{
            display: "flex",
            fontSize: "100px",
            marginBottom: "16px",
          }}
        >
          {emoji}
        </div>

        {/* Result type title */}
        <div
          style={{
            display: "flex",
            color: "#ffffff",
            fontSize: "56px",
            fontWeight: 900,
            marginBottom: "40px",
            textShadow: "0 0 30px rgba(52, 211, 153, 0.3)",
          }}
        >
          {title}
        </div>

        {/* Top axes boxes */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "40px",
          }}
        >
          {/* Top axis 1 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid rgba(52, 211, 153, 0.3)",
              backgroundColor: "rgba(52, 211, 153, 0.05)",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#6b7280",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              上位の力 ①
            </span>
            <span
              style={{
                display: "flex",
                color: "#34d399",
                fontSize: "36px",
                fontWeight: 900,
              }}
            >
              {top1}
            </span>
          </div>

          {/* Top axis 2 */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "2px solid rgba(167, 139, 250, 0.3)",
              backgroundColor: "rgba(167, 139, 250, 0.05)",
              paddingLeft: "40px",
              paddingRight: "40px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <span
              style={{
                display: "flex",
                color: "#6b7280",
                fontSize: "16px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginBottom: "8px",
              }}
            >
              上位の力 ②
            </span>
            <span
              style={{
                display: "flex",
                color: "#a78bfa",
                fontSize: "36px",
                fontWeight: 900,
              }}
            >
              {top2}
            </span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
