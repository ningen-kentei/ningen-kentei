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
  title: "ニンゲン力検定 | AI時代の人間力・社会不適合度診断",
  description:
    "20問であなたの「人間力」と「社会不適合度（社不度）」を無料診断。10タイプの称号付き結果をSNSでシェアしよう。約3分で完了。",
  verification: {
    google: "6CPyQVGQpCB6k1cwadM-u7pwG7OrhTPYbnI9pwVqTYA",
  },
  openGraph: {
    title: "ニンゲン力検定 | AI時代の人間力・社会不適合度診断",
    description:
      "20問であなたの「人間力」と「社会不適合度（社不度）」を無料診断。10タイプの称号付き結果をSNSでシェアしよう。",
    siteName: "ニンゲン力検定",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ニンゲン力検定 | AI時代の人間力・社会不適合度診断",
    description:
      "20問であなたの「人間力」と「社会不適合度（社不度）」を無料診断。10タイプの称号付き結果をSNSでシェアしよう。",
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
