import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy" },
  title: "プライバシーポリシー | ニンゲン力検定",
  description: "ニンゲン力検定のプライバシーポリシーです。",
};

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>

        <div className="space-y-8 text-sm text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              1. 個人情報の取得について
            </h2>
            <p>
              当サイト「ニンゲン力検定」（以下、当サイト）では、ユーザーの個人情報（氏名、メールアドレス等）を取得することはありません。診断結果はブラウザ上で処理され、サーバーに保存されることはありません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              2. アクセス解析ツールについて
            </h2>
            <p>
              当サイトでは、Googleによるアクセス解析ツール「Google
              Analytics」を利用しています。Google
              Analyticsはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
            </p>
            <p className="mt-2">
              この機能はCookieを無効にすることで収集を拒否することができますので、お使いのブラウザの設定をご確認ください。Google
              Analyticsの利用規約については、
              <a
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                こちら
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              3. 広告について
            </h2>
            <p>
              当サイトでは、第三者配信の広告サービス「Google
              AdSense」を利用する予定です。広告配信事業者は、ユーザーの興味に応じた広告を表示するためにCookieを使用することがあります。
            </p>
            <p className="mt-2">
              Cookieを無効にする設定やGoogleアドセンスに関する詳細は、
              <a
                href="https://policies.google.com/technologies/ads?hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                広告 – ポリシーと規約 – Google
              </a>
              をご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              4. 免責事項
            </h2>
            <p>
              当サイトの診断結果はエンターテインメントを目的としたものであり、医学的・心理学的な根拠に基づくものではありません。診断結果によって生じたいかなる損害についても、当サイトは一切の責任を負いません。
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-3">
              5. プライバシーポリシーの変更
            </h2>
            <p>
              当サイトは、必要に応じて本プライバシーポリシーの内容を変更することがあります。変更後のプライバシーポリシーは、当ページに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section className="pt-4 border-t border-white/10 text-gray-500">
            <p>制定日: 2026年3月12日</p>
          </section>
        </div>
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        &copy; 2026 ニンゲン力検定
      </footer>
    </div>
  );
}
