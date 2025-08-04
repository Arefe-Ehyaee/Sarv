import React from "react";

interface TestResultMessageProps {
  score: number;
  type: string;
  message: string;
}

interface RangeLevel {
  label: string;
  min: number;
  max: number;
  color: string;
  description: string;
}

const testRanges: Record<string, RangeLevel[]> = {
  bdi: [
    { label: "طبیعی", min: 0, max: 13, color: "green", description: "در محدوده طبیعی هستید." },
    { label: "خفیف", min: 14, max: 19, color: "yellow", description: "نشانه‌هایی از افسردگی خفیف وجود دارد." },
    { label: "متوسط", min: 20, max: 28, color: "orange", description: "افسردگی متوسط ممکن است وجود داشته باشد." },
    { label: "شدید", min: 29, max: 63, color: "red", description: "نشانه‌هایی از افسردگی شدید دیده می‌شود." },
  ],
  bai: [
    { label: "پایین", min: 0, max: 7, color: "green", description: "سطح اضطراب شما پایین است." },
    { label: "خفیف", min: 8, max: 15, color: "yellow", description: "اضطراب خفیف دارید." },
    { label: "متوسط", min: 16, max: 25, color: "orange", description: "اضطراب متوسط دارید." },
    { label: "شدید", min: 26, max: 63, color: "red", description: "ممکن است اضطراب شدیدی را تجربه کنید." },
  ],
  ghq: [
    { label: "طبیعی", min: 0, max: 13, color: "green", description: "در وضعیت روانی مناسبی قرار دارید." },
    { label: "خطر متوسط", min: 14, max: 20, color: "orange", description: "ممکن است فشار روانی متوسطی را تجربه کنید." },
    { label: "نیازمند بررسی", min: 21, max: 28, color: "red", description: "احتمال وجود فشار روانی قابل توجه وجود دارد." },
  ],
};

function TestResultMessage({ score, type, message }: TestResultMessageProps) {
  const typeKey = type.toLowerCase();
  const ranges = testRanges[typeKey];

  const currentRange = ranges?.find((range) => score >= range.min && score <= range.max);

  const maxScore = ranges?.[ranges.length - 1]?.max || 100;
  const percentage = Math.min(100, Math.round((score / maxScore) * 100));

  const getBarColor = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-500";
      case "yellow":
        return "bg-yellow-400";
      case "orange":
        return "bg-orange-400";
      case "red":
        return "bg-red-500";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="bg-white rounded-[20px] px-6 py-8 shadow-md w-full max-w-2xl mx-auto text-gray-800 leading-relaxed font-myVazirRegular">
      <h2 className="text-2xl font-semibold mb-4">نتیجه آزمون شما</h2>

      <p className="mb-2">
        <strong>نوع آزمون:</strong> {type.toUpperCase()}
      </p>
      <p className="mb-2">
        <strong>امتیاز کسب‌شده:</strong> {score} از {maxScore}
      </p>
      <p className="mb-2">
        <strong>توضیح سیستم:</strong> {message}
      </p>

      {currentRange && (
        <div className="my-6">
          <div className="mb-1 flex justify-between text-sm">
            <span>{currentRange.description}</span>
            <span>{percentage}%</span>
          </div>
          <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-4 ${getBarColor(currentRange.color)}`}
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="mt-2 text-sm text-gray-600">
            سطح وضعیت شما در دسته‌بندی <strong>{currentRange.label}</strong> قرار می‌گیرد.
          </p>
        </div>
      )}

      <p className="text-sm text-gray-600 border-t pt-4 mt-4 leading-6">
        این آزمون صرفاً یک ابزار غربالگری اولیه است و نمی‌تواند جایگزین تشخیص بالینی یا مشاوره تخصصی شود. در صورت نگرانی درباره وضعیت روانی خود، لطفاً با یک روان‌شناس یا مشاور سلامت روان مشورت کنید.
      </p>
    </div>
  );
}

export default TestResultMessage;
