import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-dotgrid px-6 text-center">
      <div className="text-8xl font-black text-amber-400 mb-4 glitch-text">
        404
      </div>
      <p className="text-xl font-bold text-white mb-2">
        ページが見つかりません
      </p>
      <p className="text-sm text-gray-500 mb-8">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link
        href="/"
        className="group relative inline-block px-10 py-3 font-black text-sm text-black bg-amber-400 hover:bg-amber-300 transition-all"
      >
        <span className="relative z-10">トップに戻る</span>
        <div className="absolute inset-0 border-2 border-amber-400 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
      </Link>
    </div>
  );
}
