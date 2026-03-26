import { Metadata } from 'next';
import { questions } from '@/lib/questions';
import { calculateScores, determineType } from '@/lib/scoring';
import ResultContent from './ResultContent';

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const params = await searchParams;
  const aParam = typeof params.a === 'string' ? params.a : '';
  const qParam = typeof params.q === 'string' ? params.q : '';

  const defaultMeta: Metadata = {
    alternates: { canonical: '/result' },
    title: 'ニンゲン力検定 - 診断結果',
    description: 'あなたの人間力と社不度の診断結果です。',
  };

  if (!aParam || !qParam) return defaultMeta;

  try {
    const indices = aParam.split(',').map(Number);
    const qIds = qParam.split(',').map(Number);
    if (indices.length !== questions.length || qIds.length !== questions.length) return defaultMeta;

    const questionsById = new Map(questions.map(q => [q.id, q]));
    const answers = indices.map((choiceIdx, i) => questionsById.get(qIds[i])!.choices[choiceIdx]);
    const { radarScores, ningenScore, shafuScore } = calculateScores(answers);
    const resultType = determineType(radarScores, ningenScore, shafuScore);

    const ogImageUrl = `/api/og?title=${encodeURIComponent(resultType.title)}&emoji=${encodeURIComponent(resultType.emoji)}&ningen=${ningenScore}&shafu=${shafuScore}`;

    return {
      title: `${resultType.title} | ニンゲン力検定`,
      description: resultType.description,
      openGraph: {
        title: `${resultType.title} | ニンゲン力検定`,
        description: resultType.description,
        images: [{ url: ogImageUrl, width: 1200, height: 630 }],
      },
      twitter: {
        card: 'summary_large_image',
        title: `${resultType.title} | ニンゲン力検定`,
        description: resultType.description,
        images: [ogImageUrl],
      },
    };
  } catch {
    return defaultMeta;
  }
}

export default function ResultPage() {
  return <ResultContent />;
}
