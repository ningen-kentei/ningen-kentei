import { TekishokuChoice, TekishokuScores, TekishokuResultType } from "./types";

export const tekishokuRadarLabels: Record<keyof TekishokuScores, string> = {
  sozoryoku: "創造力",
  kyocho: "協調力",
  bunseki: "分析力",
  kodo: "行動力",
  kansei: "感性",
};

const axisKeys: (keyof TekishokuScores)[] = [
  "sozoryoku",
  "kyocho",
  "bunseki",
  "kodo",
  "kansei",
];

const resultTypes: TekishokuResultType[] = [
  {
    id: 1,
    emoji: "🚀",
    title: "スタートアップ型",
    subtitle: "ゼロイチを生み出す推進力",
    description:
      "アイデアを思いついたら即行動。考えるより先に手が動くタイプ。完璧を待たずに走り出せるのは、実はかなり希少な才能。周りが「まだ早い」と言ってる間に、もう次のステージにいる人。",
    positive:
      "あなたの行動力と発想力は、世の中を動かす原動力そのもの。",
    jobs: ["起業家", "プロデューサー", "ディレクター", "新規事業担当", "フリーランス"],
    traits: [
      "思いついたら即行動する",
      "失敗を恐れるより挑戦を選ぶ",
      "既存のルールに縛られない",
    ],
    topAxes: ["創造力", "行動力"],
  },
  {
    id: 2,
    emoji: "🎨",
    title: "アーティスト型",
    subtitle: "世界を彩る表現者",
    description:
      "美しいものに心が動く。「なんかいい感じ」を言語化できなくても、直感でわかる。論理より感覚、効率より美しさを選びがちだけど、その審美眼はAIにも真似できない人間の強み。",
    positive:
      "あなたの感性は、誰かの心を動かす力を持っている。",
    jobs: ["デザイナー", "クリエイター", "映像制作", "イラストレーター", "空間デザイナー"],
    traits: [
      "ビジュアルや雰囲気に敏感",
      "自分の世界観を大切にする",
      "「好き」のこだわりが強い",
    ],
    topAxes: ["創造力", "感性"],
  },
  {
    id: 3,
    emoji: "💡",
    title: "企画屋型",
    subtitle: "アイデアを形にする仕掛け人",
    description:
      "発想力がありつつ、周りを巻き込んで形にするのが得意。一人で完結するより、人と組んで大きなことをやりたいタイプ。飲み会の企画でも仕事のプロジェクトでも、「言い出しっぺ」になりがち。",
    positive:
      "アイデアと人をつなぐ力は、あなただけの最強スキル。",
    jobs: ["企画職", "マーケター", "広告プランナー", "PR", "商品開発"],
    traits: [
      "人を巻き込むのが上手い",
      "「これ面白くない？」が口癖",
      "チームで何かを作るのが好き",
    ],
    topAxes: ["創造力", "協調力"],
  },
  {
    id: 4,
    emoji: "🔬",
    title: "研究者型",
    subtitle: "真理を追い求める探究者",
    description:
      "気になったことはとことん調べる。知的好奇心と分析力の掛け算で、誰も思いつかない角度から答えを見つける。効率よりも「なぜ？」が大事。興味のあることには時間を忘れて没頭する。",
    positive:
      "深く考え抜けるあなたは、まだ誰も見つけていない答えに一番近い。",
    jobs: ["研究開発", "エンジニア", "データサイエンティスト", "アナリスト", "学者"],
    traits: [
      "「なぜ？」を突き詰めるのが好き",
      "興味のある分野にはとことん没頭",
      "独自の視点で物事を分析する",
    ],
    topAxes: ["創造力", "分析力"],
  },
  {
    id: 5,
    emoji: "🤝",
    title: "カウンセラー型",
    subtitle: "人の心に寄り添う支援者",
    description:
      "相手の気持ちを敏感にキャッチできる共感力の持ち主。「何を言うか」より「どう寄り添うか」が大事だと知っている。人の話を聞くのが苦にならないどころか、むしろエネルギーをもらえるタイプ。",
    positive:
      "あなたのそばにいると安心する──そう思っている人が、きっといる。",
    jobs: ["人事", "カウンセラー", "教師", "福祉職", "医療従事者"],
    traits: [
      "相手の感情を自然に察知できる",
      "聞き役になることが多い",
      "「ありがとう」と言われると嬉しい",
    ],
    topAxes: ["協調力", "感性"],
  },
  {
    id: 6,
    emoji: "👔",
    title: "リーダー型",
    subtitle: "チームを率いる司令塔",
    description:
      "人をまとめて前に進める力がある。空気を読みつつも、決めるときはスパッと決断できる。リーダーというより「みんなが動きやすい空気を作る人」。頼られると燃えるタイプ。",
    positive:
      "あなたがいるからチームは前に進める。その存在感は替えがきかない。",
    jobs: ["マネージャー", "営業マネージャー", "チームリーダー", "店長", "プロジェクトリーダー"],
    traits: [
      "決断力がある",
      "人を動かすのが得意",
      "責任感が強い",
    ],
    topAxes: ["協調力", "行動力"],
  },
  {
    id: 7,
    emoji: "📊",
    title: "コンサルタント型",
    subtitle: "課題を解き明かす参謀",
    description:
      "相手の話を聞いて課題を整理し、最適解を導き出すのが得意。感覚ではなくデータと論理で語れるのに、人当たりもいい。チームの中では「困ったらこの人に聞け」ポジションになりがち。",
    positive:
      "あなたの分析力と対話力の組み合わせは、どんな業界でも通用する。",
    jobs: ["コンサルタント", "経営企画", "アナリスト", "戦略プランナー", "アドバイザー"],
    traits: [
      "課題を構造化するのが上手い",
      "相手の話を整理して返せる",
      "データと人の両方を大事にする",
    ],
    topAxes: ["協調力", "分析力"],
  },
  {
    id: 8,
    emoji: "⚙️",
    title: "実務家型",
    subtitle: "仕組みを回すプロフェッショナル",
    description:
      "計画を立てて着実に実行する堅実派。「やるべきことをやる」が自然にできる人。派手さはないけど、この人がいないとプロジェクトは回らない。裏方で輝く縁の下の力持ち。",
    positive:
      "あなたの確実な実行力こそが、チームの成果を支えている。",
    jobs: ["経理", "法務", "プロジェクトマネージャー", "品質管理", "バックオフィス全般"],
    traits: [
      "計画通りに進めるのが得意",
      "細部まで見逃さない",
      "安定感と信頼性が武器",
    ],
    topAxes: ["分析力", "行動力"],
  },
  {
    id: 9,
    emoji: "✏️",
    title: "編集者型",
    subtitle: "情報を紡ぐキュレーター",
    description:
      "情報を集めて、わかりやすく・美しく整理する才能がある。データの正確さと見せ方の美しさ、両方にこだわれるのは意外とレア。「いい感じにまとめて」と言われたら本領発揮するタイプ。",
    positive:
      "伝え方を知っているあなたは、どんな情報にも価値を生み出せる。",
    jobs: ["編集者", "ライター", "UXデザイナー", "Webディレクター", "コンテンツマーケター"],
    traits: [
      "情報をわかりやすく整理できる",
      "正確さと美しさの両方にこだわる",
      "「伝わる」ことを大事にする",
    ],
    topAxes: ["分析力", "感性"],
  },
  {
    id: 10,
    emoji: "🎤",
    title: "パフォーマー型",
    subtitle: "人を動かすエンターテイナー",
    description:
      "行動力と感性を兼ね備えた、人前に立つのが似合うタイプ。場の空気を読んで、最適なリアクションができる。プレゼンや営業で光るのはもちろん、SNSでも自然と注目を集める存在。",
    positive:
      "あなたの発信力は、多くの人の心を動かす可能性を持っている。",
    jobs: ["営業", "インフルエンサー", "イベント企画", "MC・司会", "広報"],
    traits: [
      "人前に立つのが苦ではない",
      "場の空気を盛り上げられる",
      "直感とノリで動ける",
    ],
    topAxes: ["行動力", "感性"],
  },
];

// 上位2軸の組み合わせ → タイプIDのマッピング
// キーは「小さい方のindex_大きい方のindex」
const axisComboToTypeId: Record<string, number> = {
  "0_3": 1,  // 創造力 + 行動力 → スタートアップ型
  "0_4": 2,  // 創造力 + 感性 → アーティスト型
  "0_1": 3,  // 創造力 + 協調力 → 企画屋型
  "0_2": 4,  // 創造力 + 分析力 → 研究者型
  "1_4": 5,  // 協調力 + 感性 → カウンセラー型
  "1_3": 6,  // 協調力 + 行動力 → リーダー型
  "1_2": 7,  // 協調力 + 分析力 → コンサルタント型
  "2_3": 8,  // 分析力 + 行動力 → 実務家型
  "2_4": 9,  // 分析力 + 感性 → 編集者型
  "3_4": 10, // 行動力 + 感性 → パフォーマー型
};

export function calculateTekishokuScores(
  answers: TekishokuChoice[]
): TekishokuScores {
  const scores: TekishokuScores = {
    sozoryoku: 0,
    kyocho: 0,
    bunseki: 0,
    kodo: 0,
    kansei: 0,
  };

  for (const answer of answers) {
    scores.sozoryoku += answer.scores.sozoryoku;
    scores.kyocho += answer.scores.kyocho;
    scores.bunseki += answer.scores.bunseki;
    scores.kodo += answer.scores.kodo;
    scores.kansei += answer.scores.kansei;
  }

  return scores;
}

export function determineTekishokuType(
  scores: TekishokuScores
): TekishokuResultType {
  // 各軸のスコアをインデックス付きで配列にする
  const indexed = axisKeys.map((key, i) => ({
    index: i,
    score: scores[key],
  }));

  // スコア降順でソート（同点の場合はindex昇順 = sozoryoku > kyocho > bunseki > kodo > kansei）
  indexed.sort((a, b) => b.score - a.score || a.index - b.index);

  // 上位2軸のインデックスを取得
  const top1 = indexed[0].index;
  const top2 = indexed[1].index;

  // キーを生成（小さい方を先にする）
  const comboKey = `${Math.min(top1, top2)}_${Math.max(top1, top2)}`;

  const typeId = axisComboToTypeId[comboKey];
  return resultTypes[typeId - 1];
}

// タイプ一覧ページ用にexport
export { resultTypes as tekishokuResultTypes };
