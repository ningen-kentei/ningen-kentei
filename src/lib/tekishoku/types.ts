export type TekishokuScores = {
  sozoryoku: number;    // 創造力
  kyocho: number;       // 協調力
  bunseki: number;      // 分析力
  kodo: number;         // 行動力
  kansei: number;       // 感性
};

export type TekishokuChoice = {
  label: string;
  text: string;
  scores: TekishokuScores;
};

export type TekishokuQuestion = {
  id: number;
  text: string;
  category: string;
  choices: TekishokuChoice[];
};

export type TekishokuResultType = {
  id: number;
  emoji: string;
  title: string;
  subtitle: string;
  description: string;
  positive: string;
  jobs: string[];
  traits: string[];
  topAxes: [string, string];
};
