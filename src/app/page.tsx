import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-dotgrid">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Decorative background text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[20rem] font-black text-white whitespace-nowrap">
            人間
          </span>
        </div>

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Top label */}
          <div className="inline-block mb-6 px-4 py-1.5 border border-amber-400/60 text-amber-400 text-xs font-bold tracking-[0.3em] uppercase">
            AI時代の人間力測定
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-2 text-white glitch-text">
            ニンゲン力
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-16 bg-gradient-to-r from-transparent to-amber-400/60" />
            <span className="text-2xl sm:text-3xl font-black text-amber-400 tracking-[0.2em]">
              検 定
            </span>
            <div className="h-px flex-1 max-w-16 bg-gradient-to-l from-transparent to-amber-400/60" />
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mb-2 font-medium">
            あなたはまだ&quot;人間&quot;として生き残れるか。
          </p>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 font-medium">
            ── あるいは、すでに社会から脱落しているか。
          </p>
          <p className="text-sm text-gray-500 mb-12 leading-relaxed max-w-md mx-auto">
            20問の質問であなたの「人間力」と「社会不適合度」を測定。
            <br />
            社不の自覚がある方も、ない方も。結局みんな、どこかズレてる。
          </p>

          <Link
            href="/quiz"
            className="group relative inline-block px-12 py-4 text-lg font-black text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200"
          >
            <span className="relative z-10">検定スタート</span>
            <div className="absolute inset-0 border-2 border-amber-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="relative pl-6 border-l-2 border-amber-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 text-black text-xs font-black flex items-center justify-center">
              01
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              全20問・約3分
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              サクッと答えられる質問ばかり。通勤中や休憩時間にどうぞ。
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-amber-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 text-black text-xs font-black flex items-center justify-center">
              02
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              2軸で診断
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              「人間力スコア」と「社会不適合度」の2つの軸で立体的に分析。
            </p>
          </div>

          <div className="relative pl-6 border-l-2 border-amber-400/40">
            <span className="absolute -left-3 top-0 w-6 h-6 bg-amber-400 text-black text-xs font-black flex items-center justify-center">
              03
            </span>
            <h3 className="text-base font-bold mb-2 text-white mt-1">
              10タイプの称号
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              診断結果はユニークな称号付き。友達とシェアして盛り上がろう。
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <Link href="/privacy" className="mt-2 inline-block text-gray-600 hover:text-amber-400 transition-colors">
          プライバシーポリシー
        </Link>
      </footer>
    </div>
  );
}
