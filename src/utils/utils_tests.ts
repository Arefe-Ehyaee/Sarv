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

export const BDI_TITLES: Record<number, string> = {
  100: "احساس غمگینی",
  101: "بدبینی",
  102: "احساس شکست",
  103: "نارضایتی",
  104: "احساس گناه",
  105: "احساس تنبیه شدن",
  106: "نارضایتی از خود",
  107: "خودانتقادی",
  108: "افکار خودکشی",
  109: "گریه",
  110: "تحریک‌پذیری",
  111: "علاقه به دیگران",
  112: "تصمیم‌گیری",
  113: "تصویر بدنی",
  114: "کاهش فعالیت",
  115: "مشکلات خواب",
  116: "خستگی",
  117: "اشتها",
  118: "کاهش وزن",
  119: "نگرانی درباره سلامت",
  120: "کاهش میل جنسی",
};



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

export function getTestStatus(type: TestKey, score: number): string {
  switch (type) {
    case "bdi":
      if (score <= 10) return "سالم (فاقد افسردگی)";
      if (score <= 16) return "افسردگی خفیف";
      if (score <= 20) return "نیازمند مشورت با روانپزشک";
      if (score <= 30) return "نسبتا افسرده";
      if (score <= 40) return "افسردگی بالینی (شدید)";
      return "افسردگی بیش از حد";

    case "bai":
      if (score <= 7) return "اضطراب نرمال";
      if (score <= 15) return "اضطراب خفیف";
      if (score <= 25) return "اضطراب متوسط";
      return "اضطراب شدید";

    case "ghq":
      if (score <= 22) return "سلامت روانی مطلوب";
      if (score <= 40) return "احتمال وجود مشکلات روانی متوسط";
      return "احتمال مشکلات روانی شدید";

    default:
      return "وضعیت نامشخص";
  }
}
