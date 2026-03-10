import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title = searchParams.get('title') || 'ニンゲン力検定';
  const emoji = searchParams.get('emoji') || '🧑';
  const ningen = searchParams.get('ningen') || '50';
  const shafu = searchParams.get('shafu') || '50';

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#0e0e1a',
          padding: '40px',
        }}
      >
        {/* Top label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #fbbf24',
            paddingLeft: '20px',
            paddingRight: '20px',
            paddingTop: '8px',
            paddingBottom: '8px',
            marginBottom: '30px',
          }}
        >
          <span
            style={{
              display: 'flex',
              color: '#fbbf24',
              fontSize: '20px',
              fontWeight: 900,
              letterSpacing: '0.2em',
            }}
          >
            診断結果
          </span>
        </div>

        {/* Emoji */}
        <div
          style={{
            display: 'flex',
            fontSize: '100px',
            marginBottom: '16px',
          }}
        >
          {emoji}
        </div>

        {/* Result type title */}
        <div
          style={{
            display: 'flex',
            color: '#ffffff',
            fontSize: '56px',
            fontWeight: 900,
            marginBottom: '40px',
            textShadow: '0 0 30px rgba(251, 191, 36, 0.3)',
          }}
        >
          {title}
        </div>

        {/* Score boxes */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '40px',
          }}
        >
          {/* Ningen score */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid rgba(251, 191, 36, 0.3)',
              backgroundColor: 'rgba(251, 191, 36, 0.05)',
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          >
            <span
              style={{
                display: 'flex',
                color: '#6b7280',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}
            >
              人間力スコア
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span
                style={{
                  display: 'flex',
                  color: '#fbbf24',
                  fontSize: '52px',
                  fontWeight: 900,
                }}
              >
                {ningen}
              </span>
              <span
                style={{
                  display: 'flex',
                  color: '#6b7280',
                  fontSize: '20px',
                  marginLeft: '4px',
                }}
              >
                /100
              </span>
            </div>
          </div>

          {/* Shafu score */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              border: '2px solid rgba(34, 211, 238, 0.3)',
              backgroundColor: 'rgba(34, 211, 238, 0.05)',
              paddingLeft: '40px',
              paddingRight: '40px',
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          >
            <span
              style={{
                display: 'flex',
                color: '#6b7280',
                fontSize: '16px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                marginBottom: '8px',
              }}
            >
              社不度
            </span>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span
                style={{
                  display: 'flex',
                  color: '#22d3ee',
                  fontSize: '52px',
                  fontWeight: 900,
                }}
              >
                {shafu}
              </span>
              <span
                style={{
                  display: 'flex',
                  color: '#6b7280',
                  fontSize: '20px',
                  marginLeft: '4px',
                }}
              >
                %
              </span>
            </div>
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
