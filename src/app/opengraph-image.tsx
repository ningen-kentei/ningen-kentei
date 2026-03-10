import { ImageResponse } from 'next/og';

export const alt = 'ニンゲン力検定 - AI時代の人間力診断';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Dot grid pattern overlay */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              'radial-gradient(circle, rgba(251, 191, 36, 0.08) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
          }}
        />

        {/* Bottom accent line */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, transparent, #fbbf24, transparent)',
          }}
        />

        {/* Left vertical accent */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '40px',
            left: '40px',
            bottom: '40px',
            width: '2px',
            backgroundColor: 'rgba(251, 191, 36, 0.3)',
          }}
        />

        {/* Right vertical accent */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '40px',
            right: '40px',
            bottom: '40px',
            width: '2px',
            backgroundColor: 'rgba(251, 191, 36, 0.3)',
          }}
        />

        {/* Corner decorations */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '36px',
            left: '36px',
            width: '12px',
            height: '12px',
            borderTop: '2px solid #fbbf24',
            borderLeft: '2px solid #fbbf24',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '36px',
            right: '36px',
            width: '12px',
            height: '12px',
            borderTop: '2px solid #fbbf24',
            borderRight: '2px solid #fbbf24',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '36px',
            left: '36px',
            width: '12px',
            height: '12px',
            borderBottom: '2px solid #fbbf24',
            borderLeft: '2px solid #fbbf24',
          }}
        />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            bottom: '36px',
            right: '36px',
            width: '12px',
            height: '12px',
            borderBottom: '2px solid #fbbf24',
            borderRight: '2px solid #fbbf24',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            zIndex: 1,
          }}
        >
          {/* Label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div
              style={{
                display: 'flex',
                width: '40px',
                height: '1px',
                backgroundColor: '#fbbf24',
              }}
            />
            <span
              style={{
                display: 'flex',
                color: 'rgba(251, 191, 36, 0.7)',
                fontSize: '18px',
                letterSpacing: '8px',
                textTransform: 'uppercase',
              }}
            >
              AI時代の人間力測定
            </span>
            <div
              style={{
                display: 'flex',
                width: '40px',
                height: '1px',
                backgroundColor: '#fbbf24',
              }}
            />
          </div>

          {/* Title */}
          <span
            style={{
              display: 'flex',
              fontSize: '80px',
              fontWeight: 900,
              color: '#fbbf24',
              letterSpacing: '12px',
              lineHeight: 1.2,
            }}
          >
            ニンゲン力検定
          </span>

          {/* Subtitle */}
          <span
            style={{
              display: 'flex',
              fontSize: '28px',
              fontWeight: 500,
              color: 'rgba(255, 255, 255, 0.85)',
              marginTop: '8px',
              letterSpacing: '2px',
            }}
          >
            あなたはまだ&quot;人間&quot;として生き残れるか。
          </span>

          {/* Divider */}
          <div
            style={{
              display: 'flex',
              width: '80px',
              height: '2px',
              backgroundColor: '#fbbf24',
              marginTop: '12px',
              marginBottom: '4px',
            }}
          />

          {/* Tagline */}
          <span
            style={{
              display: 'flex',
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 0.5)',
              letterSpacing: '4px',
            }}
          >
            人間力と社会不適合度を測定
          </span>
        </div>

        {/* Ambient glow */}
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            background:
              'radial-gradient(ellipse, rgba(251, 191, 36, 0.06) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    { ...size }
  );
}
