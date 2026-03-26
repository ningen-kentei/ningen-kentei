import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/tekishoku" },
  title: "適職タイプ診断 | ニンゲン力検定",
  description:
    "20問の質問から5つの力（創造力・協調力・分析力・行動力・感性）を測定し、あなたに合った仕事タイプを診断。全10タイプ、約3分で完了。無料。",
  openGraph: {
    title: "適職タイプ診断 | ニンゲン力検定",
    description:
      "20問であなたの適職タイプを無料診断。10タイプの中からあなたに合った仕事が見つかる。",
    siteName: "ニンゲン力検定",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "適職タイプ診断 | ニンゲン力検定",
    description:
      "20問であなたの適職タイプを無料診断。10タイプの中からあなたに合った仕事が見つかる。",
  },
};

export default function TekishokuHome() {
  return (
    <div className="min-h-screen flex flex-col bg-dotgrid">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20rem] font-black text-white whitespace-nowrap">
            適職
          </span>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Top label */}
          <div className="inline-block mb-6 px-4 py-1.5 border border-emerald-400/60 text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
            あなたの強みから適職を発見
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-2 text-white neon-glow-emerald">
            適職タイプ
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-emerald-400/60" />
            <span className="text-2xl sm:text-3xl font-black text-emerald-400 tracking-[0.2em]">
              診 断
            </span>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-emerald-400/60" />
          </div>

          <p className="text-base sm:text-xl text-gray-300 mb-2 font-medium whitespace-nowrap">
            好きなことを仕事に──なんて、言うのは簡単だ。
          </p>
          <p className="text-base sm:text-xl text-gray-300 mb-10 font-medium whitespace-nowrap">
            ── まずは、自分の&quot;強み&quot;を知ることから。
          </p>
          <p className="text-xs text-gray-500 mb-12 leading-relaxed max-w-md mx-auto">
            20問の質問から5つの力を測定し、あなたに合った仕事タイプを診断。
            <br />
            就活前の自己分析にも、キャリアの方向転換にも。
          </p>

          <Link
            href="/tekishoku/quiz"
            className="group relative inline-block px-12 py-4 text-lg font-black text-black bg-emerald-400 hover:bg-emerald-300 transition-all duration-200"
          >
            <span className="relative z-10">診断スタート</span>
            <div className="absolute inset-0 border-2 border-emerald-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="relative pl-6 border-l-2 border-emerald-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-emerald-400 text-black text-xs font-black flex items-center justify-center">
              01
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              全20問・約3分
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              日常のシチュエーションに答えるだけ。通勤中やスキマ時間にサクッと。
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-emerald-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-emerald-400 text-black text-xs font-black flex items-center justify-center">
              02
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              5軸で分析
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              創造力・協調力・分析力・行動力・感性の5つの力をレーダーチャートで可視化。
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-emerald-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-emerald-400 text-black text-xs font-black flex items-center justify-center">
              03
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              10タイプの適職
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              あなたの強みに合った仕事タイプと、向いてる職種がわかる。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3 flex-wrap">
          <Link href="/" className="text-gray-600 hover:text-emerald-400 transition-colors">
            ニンゲン力検定
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/tekishoku/types" className="text-gray-600 hover:text-emerald-400 transition-colors">
            診断タイプ一覧
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/privacy" className="text-gray-600 hover:text-emerald-400 transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/contact" className="text-gray-600 hover:text-emerald-400 transition-colors">
            お問い合わせ
          </Link>
        </div>
      </footer>
    </div>
  );
}
