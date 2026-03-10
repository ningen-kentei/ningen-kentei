import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-mesh">
      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center relative overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl" />

        <div className="max-w-2xl mx-auto relative z-10">
          {/* Top label */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300 text-xs font-bold tracking-[0.2em]">
            AI時代の人間力測定
          </div>

          <h1 className="text-6xl sm:text-8xl font-black tracking-tight mb-2 shimmer-text">
            ニンゲン力
          </h1>
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-px flex-1 max-w-20 bg-gradient-to-r from-transparent to-purple-400/40" />
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent tracking-[0.2em]">
              検 定
            </span>
            <div className="h-px flex-1 max-w-20 bg-gradient-to-l from-transparent to-pink-400/40" />
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
            className="inline-block px-12 py-4 text-lg font-black text-white rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-500 hover:via-pink-500 hover:to-cyan-500 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
          >
            検定スタート
          </Link>
        </div>
      </main>

      {/* Features Section */}
      <section className="px-6 py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 text-center hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300">
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-sm font-black">
              01
            </div>
            <h3 className="text-base font-bold mb-2 text-white">
              全20問・約3分
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              サクッと答えられる質問ばかり。通勤中や休憩時間にどうぞ。
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 text-center hover:border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/5 transition-all duration-300">
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-500 to-cyan-500 flex items-center justify-center text-white text-sm font-black">
              02
            </div>
            <h3 className="text-base font-bold mb-2 text-white">
              2軸で診断
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              「人間力スコア」と「社会不適合度」の2つの軸で立体的に分析。
            </p>
          </div>

          <div className="rounded-2xl bg-white/[0.03] backdrop-blur-sm border border-white/10 p-6 text-center hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/5 transition-all duration-300">
            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-black">
              03
            </div>
            <h3 className="text-base font-bold mb-2 text-white">
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
        &copy; 2026 ニンゲン力検定
      </footer>
    </div>
  );
}
