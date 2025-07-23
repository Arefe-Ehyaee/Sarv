export type TestKey = "bai" | "bdi" | "ghq";

export interface TestInfo {
  time: string;
  category: string;
  name: string;
  questionsCount: number;
}

export const testData: Record<TestKey, TestInfo> = {
  bai: {
    time: "15 دقیقه",
    category: "اضطراب و افسردگی",
    name: "آزمون اضطراب بک (BAI)",
    questionsCount: 21,
  },
  bdi: {
    time: "15 دقیقه",
    category: "اضطراب و افسردگی",
    name: "آزمون افسردگی بک (BDI)",
    questionsCount: 21,
  },
  ghq: {
    time: "15 دقیقه",
    category: "سلامت روان",
    name: "آزمون سلامت عمومی (GHQ)",
    questionsCount: 28,
  },
};

export interface StaticOption {
  id: number;
  text: string;
  value: number;
}

export const STATIC_OPTIONS: Record<string, StaticOption[]> = {
  ghq: [
    { id: 1, text: "نه، اصلاً", value: 0 },
    { id: 2, text: "نه، نه چندان", value: 1 },
    { id: 3, text: "بله، تا حدی", value: 2 },
    { id: 4, text: "بله، کاملاً", value: 3 }
  ],
  bai: [
    { id: 1, text: "اصلاً", value: 0 },
    { id: 2, text: "کمی", value: 1 },
    { id: 3, text: "متوسط", value: 2 },
    { id: 4, text: "شدید", value: 3 }
  ]
};