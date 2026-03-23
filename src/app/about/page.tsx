import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ニンゲン力検定とは | ニンゲン力検定",
  description:
    "ニンゲン力検定の診断の仕組み・5つの評価軸・開発の背景を解説。20問の質問から「人間力」と「社会不適合度」を2軸で測定し、10タイプの称号で結果を表示します。",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dotgrid">
      <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">
        <Link
          href="/"
          className="inline-block mb-8 text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← トップに戻る
        </Link>

        <h1 className="text-3xl font-black text-white mb-8 border-b border-white/10 pb-4">
          ニンゲン力検定とは
        </h1>

        <div className="space-y-10 text-sm text-gray-300 leading-relaxed">
          {/* コンセプト */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">コンセプト</h2>
            <p>
              ニンゲン力検定は、「AI時代における人間らしさ」をテーマにした無料のWeb診断サービスです。
            </p>
            <p className="mt-2">
              AIが急速に進化する現代、私たちは「人間にしかできないこと」について改めて考える機会が増えています。
              空気を読む力、日常生活を回す力、社会に適応する力──こうした「なんとなくできている（つもりの）こと」を、
              20問のクイズ形式で可視化するのがニンゲン力検定です。
            </p>
            <p className="mt-2">
              真剣に受けても、ネタとして楽しんでも構いません。
              自分のスコアを見て笑うもよし、友達の結果と比較するもよし。
              大事なのは「自分ってこういう人間なんだな」と気づくきっかけになること。
              それがこの検定の目的です。
            </p>
          </section>

          {/* 診断の仕組み */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              診断の仕組み
            </h2>
            <p>
              全20問の質問に答えると、2つの主要スコアと5つの評価軸で結果が算出されます。
              所要時間は約3分です。
            </p>

            <h3 className="text-base font-bold text-amber-400 mt-6 mb-2">
              2つの主要スコア
            </h3>
            <div className="space-y-3">
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">人間力スコア（0〜100%）</p>
                <p className="mt-1">
                  5つの評価軸の合計値から算出。数値が高いほど「人間として高性能」であることを示します。
                  ただし高ければ偉いというわけではなく、あくまで「社会が求める人間像にどれだけ近いか」の指標です。
                </p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">
                  社会不適合度・社不度（0〜100%）
                </p>
                <p className="mt-1">
                  各質問の回答に含まれる「社会不適合ポイント」の累積値から算出。
                  社会のルールや常識からどれだけ外れているかを示します。
                  高いからといって悪いわけではありません。枠にはまらないことは、時に才能でもあります。
                </p>
              </div>
            </div>

            <h3 className="text-base font-bold text-amber-400 mt-6 mb-2">
              5つの評価軸（レーダーチャート）
            </h3>
            <div className="space-y-3">
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">空気読み力</p>
                <p className="mt-1">
                  場の雰囲気を察知し、適切な振る舞いができるか。コミュニケーションにおける感度の高さを測定します。
                </p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">継続力</p>
                <p className="mt-1">
                  ひとつのことをコツコツ続けられるか。習慣化や目標達成に向けた粘り強さを測定します。
                </p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">生活力</p>
                <p className="mt-1">
                  日常生活を自分で回せるか。家事、健康管理、金銭感覚など、生きる上での基礎力を測定します。
                </p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">社会適応力</p>
                <p className="mt-1">
                  社会のルールや集団の中にうまく溶け込めるか。対人関係や組織内での立ち回りを測定します。
                </p>
              </div>
              <div className="border border-white/10 p-4">
                <p className="font-bold text-white">主体性</p>
                <p className="mt-1">
                  自分の意志で動けるか。指示待ちではなく、自ら考えて行動する力を測定します。
                </p>
              </div>
            </div>
          </section>

          {/* 傾向分析 */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">傾向分析</h2>
            <p>
              レーダーチャートに加え、5つの評価軸と社不度を組み合わせた独自の傾向分析も表示されます。
            </p>
            <ul className="mt-3 space-y-2 list-disc list-inside">
              <li>
                <span className="text-white font-bold">世渡り力</span>
                ──社会をうまく渡っていける度合い
              </li>
              <li>
                <span className="text-white font-bold">SNS炎上リスク</span>
                ──空気を読まない発言で燃える危険度
              </li>
              <li>
                <span className="text-white font-bold">留年しやすさ</span>
                ──継続力・主体性・生活力の低さから算出
              </li>
              <li>
                <span className="text-white font-bold">一人暮らし耐性</span>
                ──自立して生活できる力
              </li>
              <li>
                <span className="text-white font-bold">職場サバイバル力</span>
                ──どんな環境でも生き残れるタフさ
              </li>
            </ul>
          </section>

          {/* 10タイプの称号 */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              10タイプの称号
            </h2>
            <p>
              人間力スコアと社不度の組み合わせによって、あなたは10タイプのいずれかに分類されます。
              各タイプの詳細は
              <Link
                href="/types"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                診断タイプ一覧
              </Link>
              をご覧ください。
            </p>
          </section>

          {/* 注意事項 */}
          <section>
            <h2 className="text-lg font-bold text-white mb-3">注意事項</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>
                本診断はエンターテインメント目的です。医学的・心理学的な根拠に基づくものではありません。
              </li>
              <li>
                診断結果はブラウザ上で処理され、サーバーに保存されることはありません。
              </li>
              <li>何度でも無料で受けられます。</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="pt-6 border-t border-white/10 text-center">
            <Link
              href="/quiz"
              className="group relative inline-block px-10 py-3.5 text-base font-black text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200"
            >
              <span className="relative z-10">検定を受けてみる</span>
              <div className="absolute inset-0 border-2 border-amber-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
            </Link>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <Link href="/privacy" className="text-gray-600 hover:text-amber-400 transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/contact" className="text-gray-600 hover:text-amber-400 transition-colors">
            お問い合わせ
          </Link>
        </div>
      </footer>
    </div>
  );
}
