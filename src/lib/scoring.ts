import { Choice } from "./questions";

export type RadarScores = {
  kuukiYomi: number;
  keizoku: number;
  seikatsu: number;
  shakaiTekiou: number;
  jisou: number;
};

export type ResultType = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  positive: string;
  emoji: string;
};

const resultTypes: ResultType[] = [
  {
    id: 1,
    title: "量産型ニンゲン",
    subtitle: "",
    description: "能力は控えめだけど、社会には何とか溶け込んでいる。目立たないが害もない、まさに量産型。AIに仕事を奪われる最有力候補かもしれないが、少なくとも職場の飲み会には呼ばれるタイプ。",
    positive: "協調性は立派な才能です。あなたがいるからチームが回っている。",
    emoji: "🧑",
  },
  {
    id: 2,
    title: "そこそこの一般人",
    subtitle: "",
    description: "バランスよく人間をやれている、THE普通の人。特筆すべき点がないのが最大の特徴。でも考えてみてほしい、「普通」でいられることがどれだけ難しい時代か。",
    positive: "普通であることは最強の生存戦略。あなたはしっかり人間をやれている。",
    emoji: "😊",
  },
  {
    id: 3,
    title: "圧倒的人間",
    subtitle: "AIが嫉妬するレベル",
    description: "人間力MAX、社会適合度も高い、完璧超人。もはや人間のお手本。AIがどれだけ進化しても、あなたの代わりにはなれない。むしろAIの方が「こういう人間になりたかった」と思ってるかも。",
    positive: "文句なしのトップスコア。人間やめないでください、世界が困ります。",
    emoji: "👑",
  },
  {
    id: 4,
    title: "ゆるふわ社不予備軍",
    subtitle: "",
    description: "能力は低めで社会からもじわじわ離脱中。まだ完全な社不ではないが、このままいくと危ない。とりあえず朝起きることから始めよう。",
    positive: "自分のペースを大事にできる人は、実はレアな才能の持ち主。",
    emoji: "😴",
  },
  {
    id: 5,
    title: "器用な変人",
    subtitle: "",
    description: "そこそこの能力があるのに、なぜか社会からちょっとズレている。器用なのに不器用、矛盾の塊。飲み会では面白い人枠に入るが、二次会には誘われないタイプ。",
    positive: "ズレているからこそ見える景色がある。その個性は武器になる。",
    emoji: "🤪",
  },
  {
    id: 6,
    title: "ハイスペ変人",
    subtitle: "",
    description: "能力はめちゃくちゃ高いのに、どこか社会と噛み合わない。高性能なのにOSが独自規格、みたいな人。仕事はできるけど上司に嫌われるタイプ。",
    positive: "あなたが合わないのは社会の方。その実力があれば道は自分で作れる。",
    emoji: "🧠",
  },
  {
    id: 7,
    title: "完全社不",
    subtitle: "社会のバグ",
    description: "人間力低め、社不度MAX。社会というゲームのルールブックを読まずにプレイしている状態。でも大丈夫、インターネットがある時代に生まれてよかったね。",
    positive: "社会不適合は、社会の側が狭いだけかもしれない。自分の世界を大切に。",
    emoji: "👾",
  },
  {
    id: 8,
    title: "社不界のエリート",
    subtitle: "",
    description: "それなりに能力はあるのに、社会に全然適合できていない。やればできる子なのに、やらない。社不としてはプロフェッショナルレベル。リモートワークの発明に最も感謝している人種。",
    positive: "あなたに合った環境が必ずある。今の時代、適合しなくても生きていける。",
    emoji: "🎭",
  },
  {
    id: 9,
    title: "異端の天才",
    subtitle: "社会に収まりきらない逸材",
    description: "圧倒的な人間力を持ちながら、社会のルールに収まらない。歴史上の偉人にこのタイプが多い（と自分に言い聞かせよう）。天才と変人は紙一重、あなたは両方。",
    positive: "枠にはまらない人間こそが世界を変える。あなたはその可能性を持っている。",
    emoji: "⚡",
  },
  {
    id: 10,
    title: "完全なる凡人",
    subtitle: "パラメータ均等の奇跡",
    description: "全パラメータが驚くほど均等。尖りがなさすぎて逆に尖っている。RPGなら「勇者」の初期ステータス。何にでもなれるが、何者にもなれていない。ある意味で最もレアなタイプ。",
    positive: "バランス型は最も伸びしろがある。どの方向にも進化できるのは最大の強み。",
    emoji: "⚖️",
  },
];

export function calculateScores(answers: Choice[]): {
  radarScores: RadarScores;
  ningenScore: number;
  shafuScore: number;
} {
  const radarScores: RadarScores = {
    kuukiYomi: 0,
    keizoku: 0,
    seikatsu: 0,
    shakaiTekiou: 0,
    jisou: 0,
  };
  let shafuScore = 0;

  for (const answer of answers) {
    radarScores.kuukiYomi += answer.scores.kuukiYomi;
    radarScores.keizoku += answer.scores.keizoku;
    radarScores.seikatsu += answer.scores.seikatsu;
    radarScores.shakaiTekiou += answer.scores.shakaiTekiou;
    radarScores.jisou += answer.scores.jisou;
    shafuScore += answer.shafu;
  }

  const ningenScore =
    radarScores.kuukiYomi +
    radarScores.keizoku +
    radarScores.seikatsu +
    radarScores.shakaiTekiou +
    radarScores.jisou;

  // 社不ポイントを0〜100%にスケーリング（最大82ポイント→100%）
  const shafuPercent = Math.round((shafuScore / 82) * 100);

  return { radarScores, ningenScore, shafuScore: shafuPercent };
}

export function determineType(
  radarScores: RadarScores,
  ningenScore: number,
  shafuScore: number
): ResultType {
  // TYPE-10: 全項目8〜12点
  const scores = Object.values(radarScores);
  const allBalanced = scores.every((s) => s >= 8 && s <= 12);
  if (allBalanced) {
    return resultTypes[9]; // TYPE-10
  }

  // 人間力3段階
  let ningenLevel: number;
  if (ningenScore >= 80) ningenLevel = 2;      // 高
  else if (ningenScore >= 40) ningenLevel = 1;  // 中
  else ningenLevel = 0;                          // 低

  // 社不度3段階
  let shafuLevel: number;
  if (shafuScore >= 70) shafuLevel = 2;      // 高
  else if (shafuScore >= 40) shafuLevel = 1;  // 中
  else shafuLevel = 0;                          // 低

  // マトリクス: [ningenLevel][shafuLevel]
  const typeMatrix: number[][] = [
    [1, 4, 7], // 人間力低: 社不低→TYPE1, 社不中→TYPE4, 社不高→TYPE7
    [2, 5, 8], // 人間力中
    [3, 6, 9], // 人間力高
  ];

  const typeId = typeMatrix[ningenLevel][shafuLevel];
  return resultTypes[typeId - 1];
}

export const radarLabels: Record<keyof RadarScores, string> = {
  kuukiYomi: "空気読み力",
  keizoku: "継続力",
  seikatsu: "生活力",
  shakaiTekiou: "社会適応力",
  jisou: "主体性",
};

// === 傾向分析 ===

export type Tendency = {
  label: string;
  value: number; // 0〜100
  comment: string;
};

function clamp(v: number): number {
  return Math.max(0, Math.min(100, Math.round(v)));
}

function pickComment(value: number, low: string, mid: string, high: string): string {
  if (value >= 70) return high;
  if (value >= 40) return mid;
  return low;
}

export function calculateTendencies(r: RadarScores, shafuScore: number): Tendency[] {
  // 各スコアを0〜100に正規化（元は0〜20）
  const k = r.kuukiYomi * 5;
  const ke = r.keizoku * 5;
  const s = r.seikatsu * 5;
  const sh = r.shakaiTekiou * 5;
  const j = r.jisou * 5;

  const yonaoshi = clamp(k * 0.4 + sh * 0.4 + ke * 0.2);
  const enjou = clamp((100 - k) * 0.5 + (100 - sh) * 0.3 + j * 0.2);
  const ryuunen = clamp((100 - ke) * 0.4 + (100 - j) * 0.3 + (100 - s) * 0.3);
  const hitorigurashi = clamp(s * 0.5 + j * 0.3 + ke * 0.2);
  const shigoto = clamp(ke * 0.4 + sh * 0.3 + j * 0.2 + k * 0.1);

  return [
    {
      label: "世渡り力",
      value: yonaoshi,
      comment: pickComment(yonaoshi,
        "世の中の荒波に飲まれがち。でもマイペースは才能。",
        "それなりに渡れてる。要所で空気を読めるタイプ。",
        "処世術の達人。上司にも後輩にも好かれる天性のスキル。"
      ),
    },
    {
      label: "SNS炎上リスク",
      value: enjou,
      comment: pickComment(enjou,
        "炎上とは無縁。発言が穏やかすぎてバズりもしない。",
        "たまに危ない発言をしかけるが、ギリギリ踏みとどまれる。",
        "いつ燃えてもおかしくない。投稿ボタンの前に深呼吸を。"
      ),
    },
    {
      label: "留年しやすさ",
      value: ryuunen,
      comment: pickComment(ryuunen,
        "単位は安泰。計画的に生きてる証拠。",
        "ギリギリ進級できるタイプ。出席日数はいつもカツカツ。",
        "留年フラグ点灯中。まず明日の1限に出よう。"
      ),
    },
    {
      label: "一人暮らし耐性",
      value: hitorigurashi,
      comment: pickComment(hitorigurashi,
        "実家から出たら3日で詰む。まず洗濯機の使い方から。",
        "なんとかやれるけど、月末は毎回カップ麺。",
        "完全自立型。むしろ実家より一人の方が快適。"
      ),
    },
    {
      label: "職場サバイバル力",
      value: shigoto,
      comment: pickComment(shigoto,
        "戦場についていけず撤退しがち。まずは味方を見つけよう。",
        "なんとか生き延びてる。月曜の朝が最大の敵。",
        "どんな職場でもしぶとく生き残れる。サバイバルの達人。"
      ),
    },
  ];
}
