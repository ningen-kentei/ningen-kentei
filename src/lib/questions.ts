export type Choice = {
  label: string;
  text: string;
  scores: {
    kuukiYomi: number;   // 空気読み力
    keizoku: number;     // 継続力
    seikatsu: number;    // 生活力
    shakaiTekiou: number; // 社会適応力
    jisou: number;       // 自走力
  };
  shafu: number;         // 社不ポイント
};

export type Question = {
  id: number;
  text: string;
  category: string;
  choices: Choice[];
};

export const questions: Question[] = [
  // === 生活習慣系（Q1〜Q4）===
  {
    id: 1,
    text: "朝、目覚ましが鳴りました。あなたの行動は？",
    category: "生活習慣系",
    choices: [
      { label: "A", text: "1回で起きて朝のルーティンをこなす", scores: { kuukiYomi: 0, keizoku: 3, seikatsu: 4, shakaiTekiou: 0, jisou: 0 }, shafu: 0 },
      { label: "B", text: "3回スヌーズしてギリギリ起きる", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 2, shakaiTekiou: 0, jisou: 0 }, shafu: 2 },
      { label: "C", text: "スヌーズ無限ループで午前が消える", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 1, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "そもそも寝てないから起きる必要がない", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 2,
    text: "今日の夜ごはん、どうしますか？",
    category: "生活習慣系",
    choices: [
      { label: "A", text: "栄養バランスを考えて自炊 or 献立を決めている", scores: { kuukiYomi: 0, keizoku: 3, seikatsu: 4, shakaiTekiou: 0, jisou: 0 }, shafu: 0 },
      { label: "B", text: "コンビニかUber Eatsでとりあえず済ませる", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 3, shakaiTekiou: 0, jisou: 0 }, shafu: 1 },
      { label: "C", text: "気づいたら日付が変わっていて食べてない", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 1, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "食べるより寝ていたい、が本音", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
    ],
  },
  {
    id: 3,
    text: "洗濯物はどうしていますか？",
    category: "生活習慣系",
    choices: [
      { label: "A", text: "曜日を決めて定期的に回している", scores: { kuukiYomi: 0, keizoku: 3, seikatsu: 3, shakaiTekiou: 0, jisou: 0 }, shafu: 0 },
      { label: "B", text: "溜まってきたら気が向いた時に回す", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 2, shakaiTekiou: 0, jisou: 0 }, shafu: 2 },
      { label: "C", text: "着る服がなくなったら仕方なく回す", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 1, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "ファブリーズが洗濯だと思っている", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 4,
    text: "お風呂は毎日入っていますか？",
    category: "生活習慣系",
    choices: [
      { label: "A", text: "毎日決まった時間に入る。湯船も欠かさない", scores: { kuukiYomi: 0, keizoku: 3, seikatsu: 3, shakaiTekiou: 0, jisou: 0 }, shafu: 0 },
      { label: "B", text: "シャワーだけだけど毎日浴びてる", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 2, shakaiTekiou: 0, jisou: 0 }, shafu: 1 },
      { label: "C", text: "「明日でいいか」が3日続くことがある", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "外に出ない日は入る理由がないと思っている", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  // === 空気読み系（Q5〜Q8）===
  {
    id: 5,
    text: "グループLINEで誰かが微妙なボケをかましました。",
    category: "空気読み系",
    choices: [
      { label: "A", text: "適度にスタンプで拾ってあげる", scores: { kuukiYomi: 3, keizoku: 0, seikatsu: 0, shakaiTekiou: 3, jisou: 0 }, shafu: 0 },
      { label: "B", text: "既読スルーして別の話題を振る", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 2, jisou: 0 }, shafu: 1 },
      { label: "C", text: "「何が面白いの？」とマジレスする", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 4 },
      { label: "D", text: "3日後に突然そのボケに反応する", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
    ],
  },
  {
    id: 6,
    text: "飲み会で知らない人の隣になりました。",
    category: "空気読み系",
    choices: [
      { label: "A", text: "自然に自己紹介して会話を始める", scores: { kuukiYomi: 3, keizoku: 0, seikatsu: 0, shakaiTekiou: 3, jisou: 0 }, shafu: 0 },
      { label: "B", text: "相手が話しかけてきたら応じる", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 2, jisou: 0 }, shafu: 1 },
      { label: "C", text: "ひたすらスマホを見て壁を作る", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
      { label: "D", text: "そもそも飲み会の誘いを「未読のまま」にしていた", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 7,
    text: "友達が明らかに似合わない服を着てきて「どう？」と聞いてきました。",
    category: "空気読み系",
    choices: [
      { label: "A", text: "「いいじゃん！」と褒めつつ他の服も提案する", scores: { kuukiYomi: 3, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 0 },
      { label: "B", text: "「個性的だね」と当たり障りなく返す", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 2, jisou: 0 }, shafu: 1 },
      { label: "C", text: "「正直、前の方が良かったかも」と率直に言う", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 2 },
      { label: "D", text: "興味なさすぎて「へー」とだけ返してスマホに戻る", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
    ],
  },
  {
    id: 8,
    text: "エレベーターで気まずい沈黙が流れています。",
    category: "空気読み系",
    choices: [
      { label: "A", text: "天気の話題でサラッと場を和ませる", scores: { kuukiYomi: 3, keizoku: 0, seikatsu: 0, shakaiTekiou: 2, jisou: 0 }, shafu: 0 },
      { label: "B", text: "会釈だけして静かに過ごす", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 3, jisou: 0 }, shafu: 0 },
      { label: "C", text: "イヤホンをして完全に自分の世界に入る", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 2 },
      { label: "D", text: "一点を見つめて時間が過ぎるのを待つ", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
    ],
  },
  // === 社会適合系（Q9〜Q12）===
  {
    id: 9,
    text: "バイト先や学校/職場で自分のミスが発覚しました。",
    category: "社会適合系",
    choices: [
      { label: "A", text: "すぐに報告して、自分から改善策を提案する", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 2, shakaiTekiou: 1, jisou: 2 }, shafu: 0 },
      { label: "B", text: "聞かれたら正直に答えるが、自分からは言い出せない", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 2, jisou: 1 }, shafu: 1 },
      { label: "C", text: "バレないように静かに修正して何事もなかったことにする", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
      { label: "D", text: "「これ、自分のせいじゃなくない？」と原因を他に探し始める", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 3 },
    ],
  },
  {
    id: 10,
    text: "会社/学校に遅刻しそうな朝。",
    category: "社会適合系",
    choices: [
      { label: "A", text: "謝罪の連絡を入れながら走り出す", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 3, jisou: 2 }, shafu: 0 },
      { label: "B", text: "連絡だけ入れて、普通の速度で歩いて向かう", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 2, jisou: 1 }, shafu: 1 },
      { label: "C", text: "「電車遅延です」と嘘の連絡をする", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 1, jisou: 1 }, shafu: 3 },
      { label: "D", text: "「体調不良です」と連絡して休みに切り替える", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 2, shakaiTekiou: 2, jisou: 0 }, shafu: 2 },
    ],
  },
  {
    id: 11,
    text: "グループで何かを企画することになりました。あなたの立ち位置は？",
    category: "社会適合系",
    choices: [
      { label: "A", text: "率先してリーダーシップを取り、段取りを組む", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 2, shakaiTekiou: 3, jisou: 2 }, shafu: 0 },
      { label: "B", text: "言われたことはちゃんとやる、頼れるメンバー", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 2, jisou: 1 }, shafu: 2 },
      { label: "C", text: "グループLINEを既読スルーしてフェードアウト", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
      { label: "D", text: "参加はするけどAIに自分の分の作業をやらせる", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 1, jisou: 1 }, shafu: 3 },
    ],
  },
  {
    id: 12,
    text: "近所の人とすれ違いました。",
    category: "社会適合系",
    choices: [
      { label: "A", text: "笑顔で挨拶する", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 3, jisou: 1 }, shafu: 0 },
      { label: "B", text: "軽く会釈だけする", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 1, shakaiTekiou: 2, jisou: 1 }, shafu: 1 },
      { label: "C", text: "目を逸らして気づかないフリをする", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 1, jisou: 0 }, shafu: 3 },
      { label: "D", text: "近所の人の顔を一人も知らない", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
    ],
  },
  // === AI時代系（Q13〜Q16）===
  {
    id: 13,
    text: "ChatGPTに相談した結果、的外れな回答が返ってきました。",
    category: "AI時代系",
    choices: [
      { label: "A", text: "プロンプトを工夫して再度質問する", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "B", text: "AIの回答を参考にしつつ自分でも調べる", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "C", text: "「AIも大したことないな」と使うのをやめる", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
      { label: "D", text: "的外れな回答をそのまま信じてしまう", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 14,
    text: "「その仕事、AIに置き換えられるよ」と言われました。",
    category: "AI時代系",
    choices: [
      { label: "A", text: "AIにできない付加価値を考えて動き出す", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "B", text: "「じゃあAIを使いこなす側になる」と宣言する", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 1 },
      { label: "C", text: "不安になってTwitterで「AI 仕事 なくなる」で検索する", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "「むしろ自分がAIに置き換わりたい」と返す", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 4 },
    ],
  },
  {
    id: 15,
    text: "知らないことを聞かれました。あなたの対応は？",
    category: "AI時代系",
    choices: [
      { label: "A", text: "「わからないけど調べてみるね」とその場で動く", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "B", text: "素直に「わからない」と言って相手に任せる", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 1 },
      { label: "C", text: "知ったかぶりしてそれっぽく答える", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
      { label: "D", text: "「それChatGPTに聞いた方が早くない？」と返す", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 16,
    text: "スマホの通知、どのくらい溜まっていますか？",
    category: "AI時代系",
    choices: [
      { label: "A", text: "こまめに確認して未読ゼロを保っている", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "B", text: "大事なものだけ見て、あとは適当に流す", scores: { kuukiYomi: 1, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
      { label: "C", text: "未読100件超えが常態。もはや通知の意味がない", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
      { label: "D", text: "通知を全部OFFにしてるので溜まりようがない", scores: { kuukiYomi: 2, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 3 },
    ],
  },
  // === メンタル系（Q17〜Q20）===
  {
    id: 17,
    text: "新しい趣味を始めました。1ヶ月後の状態は？",
    category: "メンタル系",
    choices: [
      { label: "A", text: "毎日コツコツ続けて上達を実感している", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 0 },
      { label: "B", text: "週1くらいでゆるく続いている", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 1 },
      { label: "C", text: "道具だけ買って満足して放置", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "もう次の趣味に移行している", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
    ],
  },
  {
    id: 18,
    text: "締め切りが3日後のタスクがあります。",
    category: "メンタル系",
    choices: [
      { label: "A", text: "計画を立てて今日から少しずつ進める", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 0, shakaiTekiou: 0, jisou: 2 }, shafu: 0 },
      { label: "B", text: "前日の夜に一気にやる（いつものこと）", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
      { label: "C", text: "締め切り当日に「すみません、あと1日...」と連絡する", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 4 },
      { label: "D", text: "締め切りの存在を記憶から消去する", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 5 },
    ],
  },
  {
    id: 19,
    text: "落ち込んだ時、あなたの回復方法は？",
    category: "メンタル系",
    choices: [
      { label: "A", text: "運動や趣味でリフレッシュする", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 0 },
      { label: "B", text: "友達に話を聞いてもらう", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 1 },
      { label: "C", text: "布団から出ずにSNSの炎上を見て「自分はマシだ」と思う", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 4 },
      { label: "D", text: "落ち込みをそのままツイートして反応を待つ", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 3 },
    ],
  },
  {
    id: 20,
    text: "将来の目標について聞かれました。",
    category: "メンタル系",
    choices: [
      { label: "A", text: "具体的な目標があり、そのために行動している", scores: { kuukiYomi: 0, keizoku: 2, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 0 },
      { label: "B", text: "ぼんやりとはあるけど、まだ動けていない", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 2 },
      { label: "C", text: "「とりあえず生きていければいい」と答える", scores: { kuukiYomi: 0, keizoku: 1, seikatsu: 0, shakaiTekiou: 0, jisou: 0 }, shafu: 3 },
      { label: "D", text: "「AIが全部やってくれる未来に賭けている」と答える", scores: { kuukiYomi: 0, keizoku: 0, seikatsu: 0, shakaiTekiou: 0, jisou: 1 }, shafu: 4 },
    ],
  },
];
