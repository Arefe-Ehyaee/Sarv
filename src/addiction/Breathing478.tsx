import { useState, useEffect } from "react";
import { Play, RotateCcw } from "lucide-react";

interface Breathing478ExerciseProps {
  onBack: () => void;
}

export default function Breathing478Exercise({ onBack }: Breathing478ExerciseProps) {
  const [step, setStep] = useState(0);
  const [circleSize, setCircleSize] = useState(80);
  const [cycleCount, setCycleCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = [
    { text: "نفس بکشید", duration: 4000, size: 120, color: "from-emerald-400 to-teal-500", instruction: "4 ثانیه" },
    { text: "نفس خود را حبس کنید", duration: 7000, size: 120, color: "from-blue-400 to-cyan-500", instruction: "7 ثانیه" },
    { text: "بازدم", duration: 8000, size: 80, color: "from-purple-400 to-pink-500", instruction: "8 ثانیه" },
  ];

  useEffect(() => {
    setIsAnimating(true);
    setCircleSize(steps[step].size);

    const timer = setTimeout(() => {
      const nextStep = (step + 1) % steps.length;
      setStep(nextStep);
      if (nextStep === 0) setCycleCount(prev => prev + 1);
    }, steps[step].duration);

    return () => clearTimeout(timer);
  }, [step]);

  const resetCycle = () => {
    setStep(0);
    setCycleCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="mb-3 bg-white/80 backdrop-blur-sm rounded-lg px-4 pt-1 shadow-sm font-myYekanFaNumMedium">
        <span className="text-sm text-gray-600">چرخه: </span>
        <span className="font-bold text-teal-600">{cycleCount}</span>
      </div>

      <div className="mb-0 font-myYekanFaNumMedium">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{steps[step].text}</h3>
        <p className="text-lg text-gray-600">{steps[step].instruction}</p>
      </div>

      <div className="relative flex items-center justify-center">
        <div className="w-72 h-72 flex items-center justify-center">
          <div className="absolute w-60 h-60 border-2 border-gray-200 rounded-full opacity-30"></div>

          <div
            className={`bg-gradient-to-br ${steps[step].color} rounded-full transition-all ease-in-out shadow-2xl relative overflow-hidden`}
            style={{ width: circleSize, height: circleSize, transitionDuration: `${steps[step].duration}ms` }}
          >
            <div className="absolute inset-2 bg-white/20 rounded-full blur-sm"></div>
            <div className={`absolute inset-0 bg-white/10 rounded-full ${isAnimating ? 'animate-pulse' : ''}`}></div>
          </div>
        </div>

      </div>

      <div className="flex gap-3 font-myYekanFaNumMedium">
        <button
          onClick={resetCycle}
          className="px-4 py-2 bg-white hover:bg-[#0ea5a2]/20 border border-gray-200 rounded-lg text-gray-700  flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" /> شروع مجدد
        </button>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-gray-100 border hover:bg-[#0ea5a2]/20 rounded-lg text-gray-700"
        >
          بازگشت
        </button>
      </div>



      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes scaleProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
      `}} />
    </div>
  );
}
