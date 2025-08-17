import { useState } from "react";
import { Wind, Zap, Moon, Coffee } from "lucide-react";
import ToolCard from "./ToolCard";
import Breathing478Exercise from "./Breathing478";
import whiteClose from "../assets/icons/x-circle.svg";
import box from "../assets/icons/Box Minimalistic.svg";
import { ReactComponent as Pen } from "../assets/icons/edit 1.svg";
import { ReactComponent as HeartList } from "../assets/icons/Clipboard Heart.svg";

interface ToolsModalProps {
  onClick: () => void;
}

export default function ToolsModal({ onClick }: ToolsModalProps) {
  const [selectedPractice, setSelectedPractice] = useState<string | null>(null);

  const practices = [
    {
      id: "breathing",
      title: "تمرین تنفس 4-7-8",
      description: "کاهش استرس و آرام‌سازی ذهن با تکنیک تنفس.",
      icon: <Wind className="w-5 h-5" />,
    },
    {
      id: "energy",
      title: "تمرین انرژی‌بخش",
      description: "فعال شدن و افزایش انرژی با چند حرکت ساده.",
      icon: <Zap className="w-5 h-5" />,
    },
    {
      id: "meditation",
      title: "مدیتیشن شب",
      description: "آرام‌سازی ذهن قبل از خواب.",
      icon: <Moon className="w-5 h-5" />,
    },
    {
      id: "focus",
      title: "تمرین تمرکز",
      description: "بهبود تمرکز و کاهش حواس‌پرتی.",
      icon: <Coffee className="w-5 h-5" />,
    },
    {
      id: "mind_clear",
      title: "تمرین تخلیه ذهن",
      description: "پاکسازی ذهن از افکار مزاحم و آرامش ذهنی.",
      icon: <Pen className="w-5 h-5" />,
    },
    {
      id: "gratitude_list",
      title: "لیست قدردانی",
      description: "ثبت نکات مثبت روزانه و افزایش حس شکرگزاری.",
      icon: <HeartList className="w-5 h-5" />,
    },
  ];

  return (
    <div
      className="w-[320px] md:w-[800px] min-h-[540px] rounded-2xl flex flex-col bg-white overflow-hidden"
      style={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)" }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 h-14 bg-[#0ea5a2] px-4 rounded-t-lg shrink-0">
        <div className="text-white font-myYekanDemibold text-sm flex flex-row items-center gap-2">
          <div className="relative w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <img src={box} alt="icon" className="w-6 h-6" />
          </div>
          <p>جعبه ابزار فوری</p>
        </div>
        <button onClick={onClick}>
          <img src={whiteClose} alt="Close" className="w-[27px] h-[27px]" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[60vh] px-8 flex flex-col gap-2">
        {!selectedPractice ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {practices.map(practice => (
              <ToolCard
                key={practice.id}
                title={practice.title}
                description={practice.description}
                icon={practice.icon}
                onClick={() => setSelectedPractice(practice.id)}
              />
            ))}
          </div>
        ) : selectedPractice === "breathing" ? (
          <Breathing478Exercise onBack={() => setSelectedPractice(null)} />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">تمرین در حال توسعه است</h2>
            <button
              onClick={() => setSelectedPractice(null)}
              className="px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium transition-colors duration-200 shadow-sm"
            >
              بازگشت
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
