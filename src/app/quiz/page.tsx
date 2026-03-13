"use client";

import { useState, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions, type Choice } from "@/lib/questions";

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type ShuffledChoice = Choice & { originalIndex: number };

const labels = ["A", "B", "C", "D", "E"];

export default function QuizPage() {
  const router = useRouter();
  const [shuffledQuestions] = useState(() =>
    shuffleArray(questions).map((q) => {
      const mainChoices = q.choices.slice(0, -1).map((c, i) => ({ ...c, originalIndex: i }));
      const noneChoice = { ...q.choices[q.choices.length - 1], originalIndex: q.choices.length - 1 };
      return {
        ...q,
        shuffledChoices: [
          ...shuffleArray(mainChoices),
          noneChoice,
        ] as ShuffledChoice[],
      };
    })
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [fade, setFade] = useState<"in" | "out">("in");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const question = shuffledQuestions[currentIndex];
  const total = questions.length;

  useEffect(() => {
    router.prefetch("/result");
  }, [router]);

  const handleSelect = useCallback(
    (shuffledIdx: number) => {
      if (selectedIndex !== null) return;

      setSelectedIndex(shuffledIdx);
      setFade("out");

      const originalIndex = question.shuffledChoices[shuffledIdx].originalIndex;
      const isLast = currentIndex + 1 >= total;

      setTimeout(() => {
        const newAnswers = [...answers, originalIndex];

        if (isLast) {
          setIsLoading(true);
          const qIds = shuffledQuestions.map((q) => q.id).join(",");
          const encoded = newAnswers.join(",");
          setTimeout(() => {
            router.push(`/result?q=${qIds}&a=${encoded}`);
          }, 1500);
          return;
        }

        setAnswers(newAnswers);
        setCurrentIndex((prev) => prev + 1);
        setSelectedIndex(null);
        setFade("in");
      }, isLast ? 300 : 500);
    },
    [answers, currentIndex, total, router, selectedIndex, shuffledQuestions, question]
  );

  const progress = ((currentIndex + 1) / total) * 100;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dotgrid text-white flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-block border-4 border-amber-400 px-6 py-2 mb-6">
            <span className="text-amber-400 text-sm font-black tracking-[0.3em]">
              ANALYZING
            </span>
          </div>
          <p className="text-2xl font-black mb-4 animate-pulse">診断中...</p>
          <p className="text-sm text-gray-500">あなたのニンゲン力を解析しています</p>
          <div className="mt-8 w-48 h-1 bg-gray-800 mx-auto overflow-hidden">
            <div className="h-full bg-amber-400 animate-[loading_1.5s_ease-in-out_infinite]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dotgrid text-white flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 z-10 bg-[#0e0e1a]/95 backdrop-blur-sm px-4 py-3 border-b border-white/5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-gray-500 hover:text-gray-300 text-xs transition-colors"
              title="トップに戻る"
            >
              ✕
            </a>
            <span className="text-xs font-bold text-amber-400 tracking-wider">
              Q{currentIndex + 1}
              <span className="text-gray-600 ml-1">/ {total}</span>
            </span>
          </div>
          <span className="text-xs font-bold text-gray-500">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-1 bg-gray-800/80 overflow-hidden">
          <div
            className="h-full transition-all duration-500 ease-out bg-amber-400"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question area */}
      <div
        className={`flex-1 flex flex-col items-center px-4 pt-12 pb-8 max-w-2xl mx-auto w-full transition-opacity duration-300 ${
          fade === "out" ? "opacity-0" : "opacity-100"
        }`}
      >
        {/* Question number */}
        <div className="mb-6 slide-in">
          <span className="inline-block px-3 py-1 bg-amber-400 text-black text-xs font-black tracking-wider">
            QUESTION {currentIndex + 1}
          </span>
        </div>

        {/* Question text */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-10 leading-relaxed min-h-[4em] flex items-center">
          <span>{question.text}</span>
        </h2>

        {/* Choices */}
        <div className="w-full space-y-3">
          {question.shuffledChoices.map((choice, i) => {
            const isSelected = selectedIndex === i;
            const isNone = choice.text === "どれにも当てはまらない";
            return (
              <div key={i}>
                {isNone && (
                  <div className="border-t border-gray-700/50 my-2" />
                )}
                <button
                  onClick={() => handleSelect(i)}
                  disabled={selectedIndex !== null}
                  className={`group w-full text-left px-5 py-4 transition-all duration-200 border-l-4 flex items-center gap-3 ${
                    isSelected
                      ? "border-l-amber-400 bg-amber-400/10"
                      : isNone
                        ? "border-l-gray-700 bg-white/[0.04] hover:bg-white/[0.08] hover:border-l-gray-400"
                        : "border-l-gray-700 bg-white/[0.05] hover:bg-white/[0.09] hover:border-l-amber-400/60"
                  }`}
                >
                  <span
                    className={`shrink-0 w-7 h-7 text-center leading-7 text-xs font-black transition-colors ${
                      isSelected
                        ? "bg-amber-400 text-black"
                        : isNone
                          ? "bg-gray-700 text-gray-400 group-hover:text-gray-200"
                          : "bg-gray-700 text-gray-300 group-hover:text-amber-400"
                    }`}
                  >
                    {isNone ? "-" : labels[i]}
                  </span>
                  <span className={`text-sm sm:text-base ${isNone ? "text-gray-400" : ""}`}>{choice.text}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
