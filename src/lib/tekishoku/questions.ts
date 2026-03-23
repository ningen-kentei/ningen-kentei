import { TekishokuChoice, TekishokuQuestion } from "./types";

const none: TekishokuChoice = {
  label: "E",
  text: "どれにも当てはまらない",
  scores: { sozoryoku: 0, kyocho: 0, bunseki: 0, kodo: 0, kansei: 0 },
};

export const tekishokuQuestions: TekishokuQuestion[] = [
  // === 創造力系（Q1〜Q4）===
  {
    id: 1,
    text: "何か新しいアプリのアイデアを思いついた。まず何をする？",
    category: "創造力",
    choices: [
      {
        label: "A",
        text: "とにかく手を動かして試作してみる",
        scores: { sozoryoku: 3, kyocho: 0, bunseki: 0, kodo: 4, kansei: 0 },
      },
      {
        label: "B",
        text: "似たアプリがないか調べてから考える",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 4, kodo: 1, kansei: 0 },
      },
      {
        label: "C",
        text: "友達に話して反応を見る",
        scores: { sozoryoku: 2, kyocho: 4, bunseki: 0, kodo: 1, kansei: 0 },
      },
      {
        label: "D",
        text: "頭の中でもう少し妄想を膨らませる",
        scores: { sozoryoku: 5, kyocho: 0, bunseki: 0, kodo: 0, kansei: 2 },
      },
      none,
    ],
  },
  {
    id: 2,
    text: "プレゼンのテーマが完全に自由。どうする？",
    category: "創造力",
    choices: [
      {
        label: "A",
        text: "誰もやらなそうなテーマを攻める",
        scores: { sozoryoku: 5, kyocho: 0, bunseki: 0, kodo: 2, kansei: 0 },
      },
      {
        label: "B",
        text: "ウケそうなテーマをリサーチしてから決める",
        scores: { sozoryoku: 1, kyocho: 2, bunseki: 3, kodo: 0, kansei: 1 },
      },
      {
        label: "C",
        text: "ビジュアルや演出にこだわれるテーマを選ぶ",
        scores: { sozoryoku: 3, kyocho: 0, bunseki: 0, kodo: 0, kansei: 4 },
      },
      {
        label: "D",
        text: "無難だけど確実に評価されるテーマにする",
        scores: { sozoryoku: 0, kyocho: 1, bunseki: 2, kodo: 0, kansei: 0 },
      },
      none,
    ],
  },
  {
    id: 3,
    text: "友達の誕生日プレゼント、どう選ぶ？",
    category: "創造力",
    choices: [
      {
        label: "A",
        text: "手作りや特注など、世界にひとつだけのものを贈る",
        scores: { sozoryoku: 5, kyocho: 1, bunseki: 0, kodo: 0, kansei: 3 },
      },
      {
        label: "B",
        text: "相手の最近の会話を思い出して、欲しそうなものを推理する",
        scores: { sozoryoku: 1, kyocho: 3, bunseki: 3, kodo: 0, kansei: 1 },
      },
      {
        label: "C",
        text: "口コミや人気ランキングから間違いないものを選ぶ",
        scores: { sozoryoku: 0, kyocho: 1, bunseki: 4, kodo: 0, kansei: 0 },
      },
      {
        label: "D",
        text: "「何がほしい？」と直接聞いて買う",
        scores: { sozoryoku: 0, kyocho: 2, bunseki: 0, kodo: 4, kansei: 0 },
      },
      none,
    ],
  },
  {
    id: 4,
    text: "旅行先で予定が全部潰れた。どうする？",
    category: "創造力",
    choices: [
      {
        label: "A",
        text: "むしろラッキー。ノープランで街を探検する",
        scores: { sozoryoku: 4, kyocho: 0, bunseki: 0, kodo: 3, kansei: 1 },
      },
      {
        label: "B",
        text: "地元の人に「おすすめある？」と聞いてみる",
        scores: { sozoryoku: 1, kyocho: 4, bunseki: 0, kodo: 2, kansei: 0 },
      },
      {
        label: "C",
        text: "スマホで代替プランを検索して再計画する",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "D",
        text: "カフェに入って、のんびり雰囲気を楽しむ",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      none,
    ],
  },

  // === 協調力系（Q5〜Q8）===
  {
    id: 5,
    text: "グループワークで意見が割れた。あなたの動きは？",
    category: "協調力",
    choices: [
      {
        label: "A",
        text: "それぞれの意見のいいとこ取りで折衷案を出す",
        scores: { sozoryoku: 2, kyocho: 5, bunseki: 1, kodo: 0, kansei: 0 },
      },
      {
        label: "B",
        text: "データや根拠を出して、どちらが正しいか示す",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "C",
        text: "「とりあえずやってみよう」と多数決で決める",
        scores: { sozoryoku: 0, kyocho: 2, bunseki: 0, kodo: 4, kansei: 0 },
      },
      {
        label: "D",
        text: "空気が悪くならないよう、まず相手の話をじっくり聞く",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 0, kodo: 0, kansei: 4 },
      },
      none,
    ],
  },
  {
    id: 6,
    text: "初対面の人が多い場に来た。どうする？",
    category: "協調力",
    choices: [
      {
        label: "A",
        text: "自分から話しかけて場を盛り上げる",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 0, kodo: 4, kansei: 0 },
      },
      {
        label: "B",
        text: "話しやすそうな人を見つけて、まず一人と仲良くなる",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 1, kansei: 2 },
      },
      {
        label: "C",
        text: "周りの様子を観察してからタイミングを計る",
        scores: { sozoryoku: 0, kyocho: 1, bunseki: 3, kodo: 0, kansei: 3 },
      },
      {
        label: "D",
        text: "聞き役に徹して、相手に気持ちよく話してもらう",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 0, kodo: 0, kansei: 3 },
      },
      none,
    ],
  },
  {
    id: 7,
    text: "後輩や年下がミスをした。どう声をかける？",
    category: "協調力",
    choices: [
      {
        label: "A",
        text: "「大丈夫、次うまくいくよ」とまず励ます",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 0, kansei: 3 },
      },
      {
        label: "B",
        text: "何が原因だったか一緒に振り返る",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 4, kodo: 0, kansei: 0 },
      },
      {
        label: "C",
        text: "「こうすれば次は防げるよ」と具体的な改善策を伝える",
        scores: { sozoryoku: 1, kyocho: 2, bunseki: 2, kodo: 3, kansei: 0 },
      },
      {
        label: "D",
        text: "自分の失敗談を話して、気持ちを楽にさせる",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 0, kodo: 0, kansei: 4 },
      },
      none,
    ],
  },
  {
    id: 8,
    text: "友達が落ち込んでいる。あなたの対応は？",
    category: "協調力",
    choices: [
      {
        label: "A",
        text: "ただ隣にいて、話したくなるまで待つ",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 0, kodo: 0, kansei: 5 },
      },
      {
        label: "B",
        text: "気分転換に遊びに連れ出す",
        scores: { sozoryoku: 1, kyocho: 3, bunseki: 0, kodo: 4, kansei: 0 },
      },
      {
        label: "C",
        text: "原因を聞いて、解決策を一緒に考える",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 4, kodo: 1, kansei: 0 },
      },
      {
        label: "D",
        text: "「わかるよ」と共感しながらひたすら話を聞く",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 0, kansei: 3 },
      },
      none,
    ],
  },

  // === 分析力系（Q9〜Q12）===
  {
    id: 9,
    text: "大事な選択で2つの候補に迷っている。どう決める？",
    category: "分析力",
    choices: [
      {
        label: "A",
        text: "メリット・デメリットを書き出して比較する",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "B",
        text: "信頼できる人に相談してみる",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 1, kodo: 0, kansei: 1 },
      },
      {
        label: "C",
        text: "直感で「こっちだ」と思った方を選ぶ",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 3, kansei: 3 },
      },
      {
        label: "D",
        text: "実際に両方を少し試してから決める",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 3, kodo: 3, kansei: 0 },
      },
      none,
    ],
  },
  {
    id: 10,
    text: "SNSで話題のニュースを見た。あなたの反応は？",
    category: "分析力",
    choices: [
      {
        label: "A",
        text: "ソースを確認して、事実かどうか調べる",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "B",
        text: "リプ欄を見て、いろんな人の意見を読む",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 2, kodo: 0, kansei: 2 },
      },
      {
        label: "C",
        text: "面白ければシェア。気になったら自分の意見も投稿する",
        scores: { sozoryoku: 1, kyocho: 1, bunseki: 0, kodo: 4, kansei: 0 },
      },
      {
        label: "D",
        text: "ニュースよりも、それに対する人々の反応の方が気になる",
        scores: { sozoryoku: 1, kyocho: 1, bunseki: 0, kodo: 0, kansei: 5 },
      },
      none,
    ],
  },
  {
    id: 11,
    text: "新しいサービスや商品を選ぶとき、どう調べる？",
    category: "分析力",
    choices: [
      {
        label: "A",
        text: "スペックや機能を比較表にして検討する",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 0, kansei: 0 },
      },
      {
        label: "B",
        text: "口コミやレビューを読み込む",
        scores: { sozoryoku: 0, kyocho: 2, bunseki: 3, kodo: 0, kansei: 1 },
      },
      {
        label: "C",
        text: "デザインや見た目の第一印象で決める",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 1, kansei: 5 },
      },
      {
        label: "D",
        text: "あまり調べない。良さそうならすぐポチる",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 0, kodo: 5, kansei: 1 },
      },
      none,
    ],
  },
  {
    id: 12,
    text: "予定やスケジュール、どう管理してる？",
    category: "分析力",
    choices: [
      {
        label: "A",
        text: "カレンダーやアプリでしっかり管理する",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 2, kansei: 0 },
      },
      {
        label: "B",
        text: "周りの人と共有して調整する",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 1, kodo: 0, kansei: 0 },
      },
      {
        label: "C",
        text: "ざっくり頭の中に入れておく。細かくは決めない",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 0, kodo: 2, kansei: 2 },
      },
      {
        label: "D",
        text: "手帳やノートに書くのが好き。書くこと自体が楽しい",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 2, kodo: 0, kansei: 4 },
      },
      none,
    ],
  },

  // === 行動力系（Q13〜Q16）===
  {
    id: 13,
    text: "面白そうなイベントやセミナーを見つけた。どうする？",
    category: "行動力",
    choices: [
      {
        label: "A",
        text: "即申し込む。迷ったら行く派",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 5, kansei: 0 },
      },
      {
        label: "B",
        text: "友達を誘って一緒に行く",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 0, kodo: 3, kansei: 0 },
      },
      {
        label: "C",
        text: "過去の参加者の感想を調べてから決める",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 4, kodo: 1, kansei: 0 },
      },
      {
        label: "D",
        text: "面白そうだなと思いつつ、結局申し込まないことが多い",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 0, kansei: 3 },
      },
      none,
    ],
  },
  {
    id: 14,
    text: "やりたいことがある。でも失敗が怖い。どうする？",
    category: "行動力",
    choices: [
      {
        label: "A",
        text: "「失敗しても経験になる」と思って飛び込む",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 5, kansei: 1 },
      },
      {
        label: "B",
        text: "リスクを最小限にできる方法を考えてからやる",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 2, kansei: 0 },
      },
      {
        label: "C",
        text: "経験者に話を聞いてアドバイスをもらう",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 2, kodo: 1, kansei: 0 },
      },
      {
        label: "D",
        text: "自分の気持ちと向き合って、本当にやりたいか考える",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      none,
    ],
  },
  {
    id: 15,
    text: "急に1週間の休みができた。何をする？",
    category: "行動力",
    choices: [
      {
        label: "A",
        text: "思い立って旅行。行き先は当日に決める",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 0, kodo: 5, kansei: 1 },
      },
      {
        label: "B",
        text: "前からやりたかった勉強やスキルアップに充てる",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 3, kodo: 3, kansei: 0 },
      },
      {
        label: "C",
        text: "友達と予定を合わせて遊びに行く",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 2, kansei: 0 },
      },
      {
        label: "D",
        text: "好きな映画や本、音楽にどっぷり浸かる",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      none,
    ],
  },
  {
    id: 16,
    text: "友達に「一緒にビジネスやらない？」と誘われた。",
    category: "行動力",
    choices: [
      {
        label: "A",
        text: "面白そうなら即OK。やりながら考える",
        scores: { sozoryoku: 2, kyocho: 1, bunseki: 0, kodo: 5, kansei: 0 },
      },
      {
        label: "B",
        text: "ビジネスモデルや収益性を一緒に検討する",
        scores: { sozoryoku: 0, kyocho: 2, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "C",
        text: "自分がどんな役割で貢献できるか考えてから返事する",
        scores: { sozoryoku: 1, kyocho: 3, bunseki: 2, kodo: 0, kansei: 1 },
      },
      {
        label: "D",
        text: "その友達との相性や信頼関係を重視して判断する",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 0, kodo: 0, kansei: 4 },
      },
      none,
    ],
  },

  // === 感性系（Q17〜Q20）===
  {
    id: 17,
    text: "映画を観た後、一番気になるのは？",
    category: "感性",
    choices: [
      {
        label: "A",
        text: "映像や音楽の美しさ、演出の巧みさ",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      {
        label: "B",
        text: "ストーリーの整合性や伏線の回収",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 0, kansei: 1 },
      },
      {
        label: "C",
        text: "登場人物の感情や人間関係",
        scores: { sozoryoku: 0, kyocho: 3, bunseki: 0, kodo: 0, kansei: 4 },
      },
      {
        label: "D",
        text: "「自分だったらどうするか」を考える",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 1, kodo: 3, kansei: 1 },
      },
      none,
    ],
  },
  {
    id: 18,
    text: "カフェやレストランを選ぶとき、何を一番重視する？",
    category: "感性",
    choices: [
      {
        label: "A",
        text: "雰囲気や内装のおしゃれさ",
        scores: { sozoryoku: 1, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      {
        label: "B",
        text: "コスパや評価の高さ",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "C",
        text: "一緒に行く人が楽しめるかどうか",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 0, kansei: 2 },
      },
      {
        label: "D",
        text: "近くて入りやすければOK。サクッと決める",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 0, kodo: 5, kansei: 0 },
      },
      none,
    ],
  },
  {
    id: 19,
    text: "友達の相談を聞いた後、どう感じることが多い？",
    category: "感性",
    choices: [
      {
        label: "A",
        text: "相手の気持ちが伝染して、自分もしんどくなる",
        scores: { sozoryoku: 0, kyocho: 2, bunseki: 0, kodo: 0, kansei: 5 },
      },
      {
        label: "B",
        text: "解決策を考えたくなる。頭がフル回転する",
        scores: { sozoryoku: 1, kyocho: 1, bunseki: 4, kodo: 2, kansei: 0 },
      },
      {
        label: "C",
        text: "力になれたことで、自分も少し元気になる",
        scores: { sozoryoku: 0, kyocho: 5, bunseki: 0, kodo: 1, kansei: 2 },
      },
      {
        label: "D",
        text: "相手の状況を客観的に見て、本質は何かを考える",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 5, kodo: 0, kansei: 0 },
      },
      none,
    ],
  },
  {
    id: 20,
    text: "資料やスライドを作るとき、何を一番気にする？",
    category: "感性",
    choices: [
      {
        label: "A",
        text: "見た目のデザインやレイアウトの美しさ",
        scores: { sozoryoku: 2, kyocho: 0, bunseki: 0, kodo: 0, kansei: 5 },
      },
      {
        label: "B",
        text: "データや根拠がしっかりしているか",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 5, kodo: 1, kansei: 0 },
      },
      {
        label: "C",
        text: "相手に伝わるか、わかりやすいか",
        scores: { sozoryoku: 0, kyocho: 4, bunseki: 1, kodo: 0, kansei: 2 },
      },
      {
        label: "D",
        text: "早く終わらせること。完璧より完了を優先する",
        scores: { sozoryoku: 0, kyocho: 0, bunseki: 0, kodo: 5, kansei: 0 },
      },
      none,
    ],
  },
];
