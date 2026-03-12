import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ | ニンゲン力検定",
  description: "ニンゲン力検定へのお問い合わせはこちらから。",
};

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

        <h1 className="text-3xl font-black text-white mb-4 border-b border-white/10 pb-4">
          お問い合わせ
        </h1>

        <p className="text-sm text-gray-300 mb-8 leading-relaxed">
          ニンゲン力検定に関するご意見・ご要望・不具合のご報告などは、下記のフォームよりお送りください。
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
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <Link href="/privacy" className="mt-2 inline-block text-gray-600 hover:text-amber-400 transition-colors">
          プライバシーポリシー
        </Link>
      </footer>
    </div>
  );
}
