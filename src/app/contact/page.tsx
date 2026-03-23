import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | ニンゲン力検定",
  description:
    "ニンゲン力検定へのお問い合わせ・よくある質問。不具合報告、ご意見・ご要望はこちらから。",
};

const faqs = [
  {
    q: "診断結果は保存されますか？",
    a: "いいえ。診断結果はすべてブラウザ上で処理されており、サーバーには一切保存されません。ページを閉じると結果は消えますので、スクリーンショットやシェア機能で保存してください。",
  },
  {
    q: "何度でも受けられますか？",
    a: "はい。無料で何度でも受けられます。回答を変えると結果も変わりますので、いろいろなパターンで試してみてください。",
  },
  {
    q: "診断結果は信頼できますか？",
    a: "本診断はエンターテインメント目的で作られています。医学的・心理学的な根拠に基づくものではありませんので、結果は楽しむためのものとしてお受け取りください。",
  },
  {
    q: "スマートフォンでも使えますか？",
    a: "はい。スマートフォン、タブレット、PCなど、すべてのデバイスに対応しています。",
  },
  {
    q: "結果をSNSでシェアしたい",
    a: "結果画面にTwitter（X）、LINE、リンクコピーのシェアボタンがあります。OGP画像付きで共有されるので、フォロワーにも結果が見やすく表示されます。",
  },
];

export default function ContactPage() {
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
          お問い合わせ
        </h1>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-white mb-6">
            よくある質問
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 p-4">
                <p className="text-sm font-bold text-white mb-2">
                  Q. {faq.q}
                </p>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section>
          <h2 className="text-lg font-bold text-white mb-3">
            お問い合わせフォーム
          </h2>
          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            上記で解決しない場合は、下記のフォームよりお問い合わせください。
            ご意見・ご要望・不具合のご報告など、何でもお気軽にどうぞ。
          </p>

          <a
            href="https://forms.gle/fEQa2E4cd3kH1QUb8"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block px-10 py-3.5 text-base font-black text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200"
          >
            <span className="relative z-10">お問い合わせフォームを開く</span>
            <div className="absolute inset-0 border-2 border-amber-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
          </a>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <Link href="/privacy" className="text-gray-600 hover:text-amber-400 transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/about" className="text-gray-600 hover:text-amber-400 transition-colors">
            検定について
          </Link>
        </div>
      </footer>
    </div>
  );
}
