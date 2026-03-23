import { Metadata } from "next";
import { tekishokuQuestions } from "@/lib/tekishoku/questions";
import {
  calculateTekishokuScores,
  determineTekishokuType,
} from "@/lib/tekishoku/scoring";
import TekishokuResultContent from "./ResultContent";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const params = await searchParams;
  const aParam = typeof params.a === "string" ? params.a : "";
  const qParam = typeof params.q === "string" ? params.q : "";

  const defaultMeta: Metadata = {
    title: "適職タイプ診断 - 診断結果",
    description: "あなたの適職タイプ診断の結果です。",
  };

  if (!aParam || !qParam) return defaultMeta;

  try {
    const indices = aParam.split(",").map(Number);
    const qIds = qParam.split(",").map(Number);
    if (
      indices.length !== tekishokuQuestions.length ||
      qIds.length !== tekishokuQuestions.length
    )
      return defaultMeta;

    const questionsById = new Map(tekishokuQuestions.map((q) => [q.id, q]));
    const answers = indices.map(
      (choiceIdx, i) => questionsById.get(qIds[i])!.choices[choiceIdx]
    );
    const scores = calculateTekishokuScores(answers);
    const resultType = determineTekishokuType(scores);

    const ogImageUrl = `/api/tekishoku-og?title=${encodeURIComponent(resultType.title)}&emoji=${encodeURIComponent(resultType.emoji)}&top1=${encodeURIComponent(resultType.topAxes[0])}&top2=${encodeURIComponent(resultType.topAxes[1])}`;

    return {
      title: `${resultType.title} | 適職タイプ診断`,
      description: resultType.description,
      openGraph: {
        title: `${resultType.title} | 適職タイプ診断`,
        description: resultType.description,
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: "summary_large_image",
        title: `${resultType.title} | 適職タイプ診断`,
        description: resultType.description,
        images: [ogImageUrl],
      },
    };
  } catch {
    return defaultMeta;
  }
}

export default function TekishokuResultPage() {
  return <TekishokuResultContent />;
}
