"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { tekishokuQuestions } from "@/lib/tekishoku/questions";
import {
  calculateTekishokuScores,
  determineTekishokuType,
  tekishokuRadarLabels,
} from "@/lib/tekishoku/scoring";
import type { TekishokuScores } from "@/lib/tekishoku/types";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";

function TekishokuResultInner() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const aParam = searchParams.get("a");
  const qParam = searchParams.get("q");
  const isSharedView = searchParams.get("shared") === "1";

  if (!aParam || !qParam) {
    router.replace("/tekishoku");
    return null;
  }

  const indices = aParam.split(",").map(Number);
  const qIds = qParam.split(",").map(Number);
  if (
    indices.length !== tekishokuQuestions.length ||
    qIds.length !== tekishokuQuestions.length ||
    indices.some(isNaN) ||
    qIds.some(isNaN)
  ) {
    router.replace("/tekishoku");
    return null;
  }

  const questionsById = new Map(tekishokuQuestions.map((q) => [q.id, q]));
  const answers = indices.map(
    (choiceIdx, i) => questionsById.get(qIds[i])!.choices[choiceIdx]
  );
  const scores = calculateTekishokuScores(answers);
  const resultType = determineTekishokuType(scores);

  const radarData = (
    Object.keys(tekishokuRadarLabels) as (keyof TekishokuScores)[]
  ).map((key) => ({
    label: tekishokuRadarLabels[key],
    value: scores[key],
    fullMark: 25,
  }));

  const siteUrl = "https://ningen-kentei.com";
  const resultUrl = `${siteUrl}/tekishoku/result?q=${qParam}&a=${aParam}&shared=1`;

  const shareText = [
    `【適職タイプ診断】`,
    ``,
    `${resultType.emoji} 結果：${resultType.title}`,
    ``,
    `上位の力：${resultType.topAxes[0]} × ${resultType.topAxes[1]}`,
    `向いてる仕事：${resultType.jobs.slice(0, 3).join("、")}`,
    ``,
    `#適職タイプ診断 #ニンゲン力検定`,
  ].join("\n");

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${shareText}\n${resultUrl}`)}`;
  const lineUrl = `https://line.me/R/share?text=${encodeURIComponent(`${shareText}\n${resultUrl}`)}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${resultUrl}`);
      alert("コピーしました！");
    } catch {
      alert("コピーに失敗しました");
    }
  };

  return (
    <div className="min-h-screen bg-dotgrid text-white flex flex-col items-center px-4 py-8">
      {/* Result stamp */}
      <div className="relative mb-6">
        <div className="stamp-animate inline-block border-4 border-emerald-400 px-6 py-2 rounded-sm">
          <span className="text-emerald-400 text-sm font-black tracking-[0.3em]">
            診断結果
          </span>
        </div>
      </div>

      {/* Type section */}
      <section className="text-center mb-10">
        <div className="text-7xl mb-4">{resultType.emoji}</div>
        <h1 className="text-3xl sm:text-4xl font-black mb-2 text-white neon-glow-emerald">
          {resultType.title}
        </h1>
        {resultType.subtitle && (
          <p className="text-emerald-400/80 text-lg mb-3 font-bold">
            ── {resultType.subtitle}
          </p>
        )}
        <p className="text-gray-400 max-w-md leading-relaxed text-sm sm:text-base">
          {resultType.description}
        </p>
      </section>

      {/* Top axes */}
      <section className="flex gap-6 sm:gap-10 mb-10">
        <div className="text-center border border-white/10 bg-white/[0.02] px-6 py-4">
          <p className="text-gray-500 text-xs font-bold tracking-wider mb-2">
            上位の力 ①
          </p>
          <p className="text-2xl sm:text-3xl font-black text-emerald-400">
            {resultType.topAxes[0]}
          </p>
        </div>
        <div className="text-center border border-white/10 bg-white/[0.02] px-6 py-4">
          <p className="text-gray-500 text-xs font-bold tracking-wider mb-2">
            上位の力 ②
          </p>
          <p className="text-2xl sm:text-3xl font-black text-violet-400">
            {resultType.topAxes[1]}
          </p>
        </div>
      </section>

      {/* Radar chart */}
      <section className="w-full max-w-md mb-10">
        <ResponsiveContainer width="100%" height={300}>
          <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="70%">
            <PolarGrid stroke="rgba(52, 211, 153, 0.15)" />
            <PolarAngleAxis
              dataKey="label"
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Radar
              name="スコア"
              dataKey="value"
              stroke="#34d399"
              fill="url(#tekishokuRadarGradient)"
              fillOpacity={0.3}
              strokeWidth={2}
            />
            <defs>
              <linearGradient
                id="tekishokuRadarGradient"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
          </RadarChart>
        </ResponsiveContainer>
      </section>

      {/* Jobs section */}
      <section className="w-full max-w-md mb-10">
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-emerald-400 text-black text-xs font-black tracking-wider">
            あなたに向いている仕事
          </span>
        </div>
        <div className="border border-white/10 bg-white/[0.02] p-5">
          <div className="flex flex-wrap gap-2 mb-4">
            {resultType.jobs.map((job) => (
              <span
                key={job}
                className="px-3 py-1.5 text-sm font-bold text-emerald-400 border border-emerald-400/30 bg-emerald-400/5"
              >
                {job}
              </span>
            ))}
          </div>
          <div className="space-y-2">
            {resultType.traits.map((trait, i) => (
              <div
                key={i}
                className="text-sm text-gray-400 flex items-start gap-2"
              >
                <span className="text-emerald-400/60 mt-0.5">▸</span>
                {trait}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Positive message */}
      <section className="max-w-md w-full mb-10 px-4">
        <div className="border-l-4 border-emerald-400 pl-4 py-3 bg-emerald-400/5">
          <p className="text-gray-300 text-sm leading-relaxed italic">
            {resultType.positive}
          </p>
        </div>
      </section>

      {/* Affiliate section */}
      <section className="w-full max-w-md mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block px-3 py-1 bg-emerald-400 text-black text-xs font-black tracking-wider">
            この先のキャリアを考えてみる
          </span>
          <span className="text-[10px] text-gray-600 border border-gray-700 px-1.5 py-0.5">
            PR
          </span>
        </div>
        <p className="text-xs text-gray-500 mb-4">
          自分のタイプがわかったら、次は具体的に動いてみよう。
        </p>
        <div className="flex justify-center">
          <a
            href="https://px.a8.net/svt/ejp?a8mat=4AZMKL+9H5F6I+2JK4+4GTTN5"
            rel="nofollow"
            target="_blank"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www26.a8.net/svt/bgt?aid=260323077573&wid=002&eno=01&mid=s00000011866027013000&mc=1" width={300} height={250} alt="" />
          </a>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://www16.a8.net/0.gif?a8mat=4AZMKL+9H5F6I+2JK4+4GTTN5" width={1} height={1} alt="" />
        </div>
      </section>

      {isSharedView ? (
        <section className="text-center mb-8">
          <p className="text-gray-400 text-sm mb-6">
            これは誰かの診断結果です。あなたはどんなタイプ？
          </p>
          <a
            href="/tekishoku/quiz"
            className="group relative inline-block px-12 py-4 font-black text-lg text-black bg-emerald-400 hover:bg-emerald-300 transition-all"
          >
            <span className="relative z-10">自分も診断してみる</span>
            <div className="absolute inset-0 border-2 border-emerald-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
          </a>
        </section>
      ) : (
        <>
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
              href="/tekishoku/quiz"
              className="group relative inline-block px-10 py-3 font-black text-sm text-black bg-emerald-400 hover:bg-emerald-300 transition-all"
            >
              <span className="relative z-10">もう一度診断する</span>
              <div className="absolute inset-0 border-2 border-emerald-400 translate-x-1 translate-y-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="/tekishoku"
              className="text-gray-500 hover:text-gray-300 text-xs tracking-wider transition-colors"
            >
              トップに戻る
            </a>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="w-full py-8 mt-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3 flex-wrap">
          <a
            href="/"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            ニンゲン力検定
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="/privacy"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            プライバシーポリシー
          </a>
          <span className="text-gray-700">|</span>
          <a
            href="/contact"
            className="text-gray-600 hover:text-emerald-400 transition-colors"
          >
            お問い合わせ
          </a>
        </div>
      </footer>
    </div>
  );
}

export default function TekishokuResultContent() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0e0e1a] flex items-center justify-center">
          <div className="text-emerald-400 text-sm font-bold tracking-wider animate-pulse">
            分析中...
          </div>
        </div>
      }
    >
      <TekishokuResultInner />
    </Suspense>
  );
}
