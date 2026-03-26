import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/types" },
  title: "診断タイプ一覧 | ニンゲン力検定",
  description:
    "ニンゲン力検定の全10タイプを解説。量産型ニンゲン、圧倒的人間、完全社不、異端の天才など、人間力と社不度の組み合わせで決まるあなたのタイプを確認しよう。",
};

const types = [
  {
    id: 1,
    emoji: "🧑",
    title: "量産型ニンゲン",
    ningenLevel: "低め",
    shafuLevel: "低め",
    description:
      "能力は控えめだけど、社会には何とか溶け込んでいる。目立たないが害もない、まさに量産型。AIに仕事を奪われる最有力候補かもしれないが、少なくとも職場の飲み会には呼ばれるタイプ。",
    positive:
      "協調性は立派な才能です。あなたがいるからチームが回っている。",
    traits: [
      "波風を立てない平和主義者",
      "言われたことはちゃんとやる",
      "存在感は薄いけど信頼される",
    ],
  },
  {
    id: 2,
    emoji: "😊",
    title: "そこそこの一般人",
    ningenLevel: "中くらい",
    shafuLevel: "低め",
    description:
      "バランスよく人間をやれている、THE普通の人。特筆すべき点がないのが最大の特徴。でも考えてみてほしい、「普通」でいられることがどれだけ難しい時代か。",
    positive:
      "普通であることは最強の生存戦略。あなたはしっかり人間をやれている。",
    traits: [
      "なんだかんだで安定している",
      "大きな失敗もしないが大冒険もしない",
      "友達の数はちょうどいい",
    ],
  },
  {
    id: 3,
    emoji: "👑",
    title: "圧倒的人間",
    ningenLevel: "高い",
    shafuLevel: "低め",
    subtitle: "AIが嫉妬するレベル",
    description:
      "人間力MAX、社会適合度も高い、完璧超人。もはや人間のお手本。AIがどれだけ進化しても、あなたの代わりにはなれない。むしろAIの方が「こういう人間になりたかった」と思ってるかも。",
    positive:
      "文句なしのトップスコア。人間やめないでください、世界が困ります。",
    traits: [
      "何でもそつなくこなす万能型",
      "周囲からの信頼が厚い",
      "リーダーに推されがち",
    ],
  },
  {
    id: 4,
    emoji: "😴",
    title: "ゆるふわ社不予備軍",
    ningenLevel: "低め",
    shafuLevel: "中くらい",
    description:
      "能力は低めで社会からもじわじわ離脱中。まだ完全な社不ではないが、このままいくと危ない。とりあえず朝起きることから始めよう。",
    positive:
      "自分のペースを大事にできる人は、実はレアな才能の持ち主。",
    traits: [
      "朝が苦手（というか昼も苦手）",
      "締め切りは毎回ギリギリ",
      "やる気のスイッチが行方不明",
    ],
  },
  {
    id: 5,
    emoji: "🤪",
    title: "器用な変人",
    ningenLevel: "中くらい",
    shafuLevel: "中くらい",
    description:
      "そこそこの能力があるのに、なぜか社会からちょっとズレている。器用なのに不器用、矛盾の塊。飲み会では面白い人枠に入るが、二次会には誘われないタイプ。",
    positive:
      "ズレているからこそ見える景色がある。その個性は武器になる。",
    traits: [
      "やればできるのにやらない（やれない）",
      "独自の哲学を持っている",
      "意外と多趣味",
    ],
  },
  {
    id: 6,
    emoji: "🧠",
    title: "ハイスペ変人",
    ningenLevel: "高い",
    shafuLevel: "中くらい",
    description:
      "能力はめちゃくちゃ高いのに、どこか社会と噛み合わない。高性能なのにOSが独自規格、みたいな人。仕事はできるけど上司に嫌われるタイプ。",
    positive:
      "あなたが合わないのは社会の方。その実力があれば道は自分で作れる。",
    traits: [
      "正論をぶつけて場を凍らせがち",
      "効率厨を超えた効率の鬼",
      "一人で仕事したほうが速い",
    ],
  },
  {
    id: 7,
    emoji: "👾",
    title: "完全社不",
    ningenLevel: "低め",
    shafuLevel: "高い",
    subtitle: "社会のバグ",
    description:
      "人間力低め、社不度MAX。社会というゲームのルールブックを読まずにプレイしている状態。でも大丈夫、インターネットがある時代に生まれてよかったね。",
    positive:
      "社会不適合は、社会の側が狭いだけかもしれない。自分の世界を大切に。",
    traits: [
      "常識？なにそれおいしいの？",
      "昼夜逆転がデフォルト",
      "ネットの中では饒舌",
    ],
  },
  {
    id: 8,
    emoji: "🎭",
    title: "社不界のエリート",
    ningenLevel: "中くらい",
    shafuLevel: "高い",
    description:
      "それなりに能力はあるのに、社会に全然適合できていない。やればできる子なのに、やらない。社不としてはプロフェッショナルレベル。リモートワークの発明に最も感謝している人種。",
    positive:
      "あなたに合った環境が必ずある。今の時代、適合しなくても生きていける。",
    traits: [
      "面接は受かるのに出社で詰む",
      "ポテンシャルだけは認められている",
      "在宅勤務だと異常に生産性が高い",
    ],
  },
  {
    id: 9,
    emoji: "⚡",
    title: "異端の天才",
    ningenLevel: "高い",
    shafuLevel: "高い",
    subtitle: "社会に収まりきらない逸材",
    description:
      "圧倒的な人間力を持ちながら、社会のルールに収まらない。歴史上の偉人にこのタイプが多い（と自分に言い聞かせよう）。天才と変人は紙一重、あなたは両方。",
    positive:
      "枠にはまらない人間こそが世界を変える。あなたはその可能性を持っている。",
    traits: [
      "発想が飛びすぎて理解されない",
      "ルールを壊して新しいルールを作る",
      "孤高だけど孤独じゃない",
    ],
  },
  {
    id: 10,
    emoji: "⚖️",
    title: "完全なる凡人",
    ningenLevel: "均等",
    shafuLevel: "均等",
    subtitle: "パラメータ均等の奇跡",
    description:
      "全パラメータが驚くほど均等。尖りがなさすぎて逆に尖っている。RPGなら「勇者」の初期ステータス。何にでもなれるが、何者にもなれていない。ある意味で最もレアなタイプ。",
    positive:
      "バランス型は最も伸びしろがある。どの方向にも進化できるのは最大の強み。",
    traits: [
      "5つの評価軸が奇跡的に均等",
      "良くも悪くも予測不能",
      "可能性の塊、だが方向性が定まらない",
    ],
  },
];

export default function TypesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-dotgrid">
      <main className="flex-1 px-6 py-16 max-w-3xl mx-auto w-full">
        <Link
          href="/"
          className="inline-block mb-8 text-sm text-amber-400 hover:text-amber-300 transition-colors"
        >
          ← トップに戻る
        </Link>

        <h1 className="text-3xl font-black text-white mb-4 border-b border-white/10 pb-4">
          診断タイプ一覧
        </h1>

        <p className="text-sm text-gray-300 mb-10 leading-relaxed">
          ニンゲン力検定では、「人間力スコア」と「社会不適合度（社不度）」の2軸の組み合わせによって、
          全10タイプのいずれかに分類されます。各タイプの特徴・傾向・ポジティブメッセージをまとめました。
        </p>

        {/* タイプ分布図 */}
        <section className="mb-12">
          <h2 className="text-lg font-bold text-white mb-4">タイプ分布マトリクス</h2>
          <p className="text-sm text-gray-400 mb-4">
            縦軸が人間力（低→高）、横軸が社不度（低→高）。自分がどの位置にいるか確認してみてください。
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr>
                  <th className="border border-white/10 p-2 text-gray-500 bg-white/5" />
                  <th className="border border-white/10 p-2 text-amber-400 bg-white/5">社不度 低</th>
                  <th className="border border-white/10 p-2 text-amber-400 bg-white/5">社不度 中</th>
                  <th className="border border-white/10 p-2 text-amber-400 bg-white/5">社不度 高</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/10 p-2 text-amber-400 font-bold bg-white/5 whitespace-nowrap">人間力 高</td>
                  <td className="border border-white/10 p-2 text-center text-white">👑 圧倒的人間</td>
                  <td className="border border-white/10 p-2 text-center text-white">🧠 ハイスペ変人</td>
                  <td className="border border-white/10 p-2 text-center text-white">⚡ 異端の天才</td>
                </tr>
                <tr>
                  <td className="border border-white/10 p-2 text-amber-400 font-bold bg-white/5 whitespace-nowrap">人間力 中</td>
                  <td className="border border-white/10 p-2 text-center text-white">😊 そこそこの一般人</td>
                  <td className="border border-white/10 p-2 text-center text-white">🤪 器用な変人</td>
                  <td className="border border-white/10 p-2 text-center text-white">🎭 社不界のエリート</td>
                </tr>
                <tr>
                  <td className="border border-white/10 p-2 text-amber-400 font-bold bg-white/5 whitespace-nowrap">人間力 低</td>
                  <td className="border border-white/10 p-2 text-center text-white">🧑 量産型ニンゲン</td>
                  <td className="border border-white/10 p-2 text-center text-white">😴 ゆるふわ社不予備軍</td>
                  <td className="border border-white/10 p-2 text-center text-white">👾 完全社不</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            ※ TYPE 10「完全なる凡人」は全パラメータが均等な場合にのみ出現する特殊タイプです。
          </p>
        </section>

        {/* 各タイプ詳細 */}
        <div className="space-y-8">
          {types.map((type) => (
            <section
              key={type.id}
              className="border border-white/10 p-6"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-4xl">{type.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5">
                      TYPE {type.id}
                    </span>
                    <span className="text-xs text-gray-500">
                      人間力: {type.ningenLevel} / 社不度: {type.shafuLevel}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white mt-1">
                    {type.title}
                  </h3>
                  {type.subtitle && (
                    <p className="text-sm text-amber-400 mt-0.5">
                      ── {type.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-300 leading-relaxed">
                {type.description}
              </p>

              <div className="mt-4">
                <p className="text-xs font-bold text-gray-500 mb-2">
                  このタイプの特徴
                </p>
                <ul className="space-y-1">
                  {type.traits.map((trait, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-400 flex items-start gap-2"
                    >
                      <span className="text-amber-400/60 mt-0.5">▸</span>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 border-t border-white/5 pt-3">
                <p className="text-sm text-amber-400/80 italic">
                  {type.positive}
                </p>
              </div>
            </section>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400 mb-6">
            あなたはどのタイプ？ 20問・約3分で診断できます。
          </p>
          <Link
            href="/quiz"
            className="group relative inline-block px-10 py-3.5 text-base font-black text-black bg-amber-400 hover:bg-amber-300 transition-all duration-200"
          >
            <span className="relative z-10">検定を受けてみる</span>
            <div className="absolute inset-0 border-2 border-amber-400 translate-x-1.5 translate-y-1.5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-200" />
          </Link>
        </section>
      </main>

      <footer className="py-8 text-center text-xs text-gray-600 border-t border-white/5 tracking-wider">
        <p>&copy; 2026 ニンゲン力検定</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <Link href="/privacy" className="text-gray-600 hover:text-amber-400 transition-colors">
            プライバシーポリシー
          </Link>
          <span className="text-gray-700">|</span>
          <Link href="/contact" className="text-gray-600 hover:text-amber-400 transition-colors">
            お問い合わせ
          </Link>
        </div>
      </footer>
    </div>
  );
}
