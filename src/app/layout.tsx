import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ningen-kentei.com"),
  title: "ニンゲン力検定",
  description:
    "AI時代、あなたはまだ\"人間\"ですか？人間力と社会不適合度を診断します。",
  openGraph: {
    title: "ニンゲン力検定",
    description:
      "AI時代、あなたはまだ\"人間\"ですか？人間力と社会不適合度を診断します。",
    siteName: "ニンゲン力検定",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ニンゲン力検定",
    description:
      "AI時代、あなたはまだ\"人間\"ですか？人間力と社会不適合度を診断します。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8657885193376377"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H0VPX7BZC3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted',
            });
            gtag('config', 'G-H0VPX7BZC3');
          `}
        </Script>
      </head>
      <body className={`${notoSansJP.variable} antialiased`}>{children}</body>
    </html>
  );
}
