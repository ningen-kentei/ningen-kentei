"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { questions } from "@/lib/questions";
import {
  calculateScores,
  calculateTendencies,
  determineType,
  radarLabels,
  RadarScores,
} from "@/lib/scoring";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const aParam = searchParams.get("a");
  const qParam = searchParams.get("q");
  if (!aParam || !qParam) {
    router.replace("/");
    return null;
  }

  const indices = aParam.split(",").map(Number);
  const qIds = qParam.split(",").map(Number);
  if (indices.length !== questions.length || qIds.length !== questions.length || indices.some(isNaN) || qIds.some(isNaN)) {
    router.replace("/");
    return null;
  }

  const questionsById = new Map(questions.map((q) => [q.id, q]));
  const answers = indices.map((choiceIdx, i) => questionsById.get(qIds[i])!.choices[choiceIdx]);
  const { radarScores, ningenScore, shafuScore } = calculateScores(answers);
  const resultType = determineType(radarScores, ningenScore, shafuScore);
  const tendencies = calculateTendencies(radarScores, shafuScore);

  const radarData = (Object.keys(radarLabels) as (keyof RadarScores)[]).map(
    (key) => ({
      label: radarLabels[key],
      value: radarScores[key],
      fullMark: 20,
    })
  );

  const shareText = `ニンゲン力検定の結果: ${resultType.title} 人間力${ningenScore}点 / 社不度${shafuScore}% #ニンゲン力検定`;
  const siteUrl = "https://ningen-kentei.vercel.app";
  const resultUrl = `${siteUrl}/result?q=${qParam}&a=${aParam}`;
  const fullShareText = `${shareText}\n${resultUrl}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fullShareText)}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(resultUrl)}&text=${encodeURIComponent(shareText)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${resultUrl}`);
      alert("コピーしました！");
    } catch {
      alert("コピーに失敗しました");
    }
  };

  return (
    <div className="min-h-screen bg-dotgrid text-white flex flex-col items-center px-4 py-8">
      {/* Result stamp */}
      <div className="relative mb-6">
        <div className="stamp-animate inline-block border-4 border-amber-400 px-6 py-2 rounded-sm">
          <span className="text-amber-400 text-sm font-black tracking-[0.3em]">
            診断結果
          </span>
        </div>
      </div>

      {/* Type section */}
      <section className="text-center mb-10">
        <div className="text-7xl mb-4">{resultType.emoji}</div>
        <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white neon-glow">
          {resultType.title}
        </h1>
        {resultType.subtitle && (
          <p className="text-amber-400/80 text-lg mb-3 font-bold">
            {resultType.subtitle}
          </p>
        )}
        <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
          {resultType.description}
        </p>
      </section>

      {/* Score section */}
      <section className="flex gap-6 sm:gap-10 mb-10">
        <div className="text-center border border-white/10 bg-white/[0.02] px-6 py-4">
          <p className="text-gray-500 text-xs font-bold tracking-wider mb-2">
            人間力スコア
          </p>
          <p className="text-4xl sm:text-5xl font-black text-amber-400">
            {ningenScore}
            <span className="text-base text-gray-600 ml-1">/100</span>
          </p>
        </div>
        <div className="text-center border border-white/10 bg-white/[0.02] px-6 py-4">
          <p className="text-gray-500 text-xs font-bold tracking-wider mb-2">
            社不度
          </p>
          <p className="text-4xl sm:text-5xl font-black text-cyan-400">
            {shafuScore}
            <span className="text-base text-gray-600 ml-1">%</span>
          </p>
        </div>
      </section>

      {/* Radar chart */}
      <section className="w-full max-w-md mb-10">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="rgba(251, 191, 36, 0.15)" />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Radar
              name="スコア"
              dataKey="value"
              stroke="#fbbf24"
              fill="url(#radarGradient)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="radarGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </section>

      {/* Tendency analysis */}
      <section className="w-full max-w-md mb-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-amber-400 text-black text-xs font-black tracking-wider">
            傾向分析
          </span>
        </div>
        <div className="space-y-4">
          {tendencies.map((t) => (
            <div key={t.label} className="border border-white/10 bg-white/[0.02] px-4 py-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-white">{t.label}</span>
                <span className="text-lg font-black text-amber-400">
                  {t.value}
                  <span className="text-xs text-gray-500 ml-0.5">%</span>
                </span>
              </div>
              <div className="w-full h-1.5 bg-gray-800 mb-2">
                <div
                  className="h-full bg-gradient-to-r from-amber-400 to-cyan-400 transition-all duration-700"
                  style={{ width: `${t.value}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                {t.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Positive message */}
      <section className="max-w-md w-full mb-10 px-4">
        <div className="border-l-4 border-amber-400 pl-4 py-3 bg-amber-400/5">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            {resultType.positive}
          </p>
        </div>
      </section>

      {/* SNS share buttons */}
      <section className="flex flex-wrap justify-center gap-3 mb-8">
        <a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          シェア
        </a>
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 font-bold text-sm text-white transition-colors"
          style={{ backgroundColor: "#06C755" }}
        >
          LINE
        </a>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-5 py-2.5 font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          リンクコピー
        </button>
      </section>

      {/* Navigation */}
      <section className="flex flex-col items-center gap-4">
        <a
          href="/quiz"
          className="group relative inline-block px-10 py-3 font-black text-sm text-black bg-amber-400 hover:bg-amber-300 transition-all"
        >
          <span className="relative z-10">もう一度診断する</span>
          <div className="absolute inset-0 border-2 border-amber-400 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
        <a
          href="/"
          className="text-gray-500 hover:text-gray-300 text-xs tracking-wider transition-colors"
        >
          トップに戻る
        </a>
      </section>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0e0e1a] flex items-center justify-center">
          <div className="text-amber-400 text-sm font-bold tracking-wider animate-pulse">
            診断中...
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
