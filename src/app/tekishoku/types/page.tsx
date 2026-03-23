import Link from "next/link";
import type { Metadata } from "next";
import { tekishokuResultTypes } from "@/lib/tekishoku/scoring";

export const metadata: Metadata = {
  title: "診断タイプ一覧 | 適職タイプ診断",
  description:
    "適職タイプ診断の全10タイプを解説。スタートアップ型、アーティスト型、リーダー型など、5つの力の組み合わせで決まるあなたの適職タイプを確認しよう。",
};

export default function TekishokuTypesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dotgrid">
      <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">
        <Link
          href="/tekishoku"
          className="inline-block mb-8 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
        >
          ← 適職タイプ診断トップに戻る
        </Link>

        <h1 className="text-3xl font-black text-white mb-4 border-b border-white/10 pb-4">
          診断タイプ一覧
        </h1>

        <p className="text-sm text-gray-300 mb-10 leading-relaxed">
          適職タイプ診断では、5つの力（創造力・協調力・分析力・行動力・感性）のうち、
          上位2つの組み合わせによって全10タイプに分類されます。
        </p>

        {/* 5軸の説明 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-white mb-4">5つの評価軸</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { name: "創造力", desc: "アイデアを生み出す力、発想力" },
              { name: "協調力", desc: "チームワーク、対人関係の構築力" },
              { name: "分析力", desc: "論理的思考、データを整理する力" },
              { name: "行動力", desc: "素早く動く力、決断力" },
              { name: "感性", desc: "美意識、共感力、表現力" },
            ].map((axis) => (
              <div
                key={axis.name}
                className="border border-white/10 p-3 flex items-center gap-3"
              >
                <span className="text-emerald-400 font-black text-sm shrink-0">
                  {axis.name}
                </span>
                <span className="text-xs text-gray-500">{axis.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 各タイプ詳細 */}
        <div className="space-y-8">
          {tekishokuResultTypes.map((type) => (
            <section key={type.id} className="border border-white/10 p-6">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{type.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5">
                      TYPE {type.id}
                    </span>
                    <span className="text-xs text-gray-500">
                      {type.topAxes[0]} × {type.topAxes[1]}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mt-1">
                    {type.title}
                  </h3>
                  {type.subtitle && (
                    <p className="text-sm text-emerald-400 mt-0.5">
                      ── {type.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {type.description}
              </p>

              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 mb-2">
                  向いてる仕事
                </p>
                <div className="flex flex-wrap gap-2">
                  {type.jobs.map((job) => (
                    <span
                      key={job}
                      className="px-2 py-1 text-xs font-bold text-emerald-400 border border-emerald-400/30 bg-emerald-400/5"
                    >
                      {job}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <p className="text-xs font-bold text-gray-500 mb-2">
                  このタイプの特徴
                </p>
                <ul className="space-y-1">
                  {type.traits.map((trait, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-emerald-400/60 mt-0.5">▸</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-white/5 pt-3">
                <p className="text-sm text-emerald-400/80 italic">
                  {type.positive}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400 mb-6">
            あなたはどのタイプ？ 20問・約3分で診断できます。
          </p>
          <Link
            href="/tekishoku/quiz"
            className="group relative inline-block px-10 py-3.5 text-base font-black text-black bg-emerald-400 hover:bg-emerald-300 transition-all duration-200"
          >
            <span className="relative z-10">診断を受けてみる</span>
            <div className="absolute inset-0 border-2 border-emerald-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
          </Link>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3 flex-wrap">
          <Link
            href="/"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            ニンゲン力検定
          </Link>
          <span className="text-gray-700">|</span>
          <Link
            href="/privacy"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            プライバシーポリシー
          </Link>
          <span className="text-gray-700">|</span>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </footer>
    </div>
  );
}
