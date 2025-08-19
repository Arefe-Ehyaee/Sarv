import { ReactComponent as XIcon } from "../assets/icons/x-circle.svg"; 
import reading from "../assets/icons/reading.svg";

interface CureRoutingModalProps {
  onClick: () => void;
  completedSessions: number[]; // شماره جلسات انجام شده (مثلاً [1, 3, 5])
}

export default function CureRoutingModal({
  onClick,
  completedSessions,
}: CureRoutingModalProps) {
  return (
    <div
      className="w-[300px] md:w-[785px] min-h-[524px] rounded-lg flex flex-col bg-white pb-4"
      style={{
        boxShadow:
          "-2px 4px 8px 2px rgba(168, 168, 168, 1), 2px 4px 8px 2px rgba(168, 168, 168, 1)",
      }}
    >
      {/* Header */}
      <div className="flex flex-row justify-between items-center mb-4 h-14 bg-[#0ea5a2] px-4 rounded-t-lg shrink-0">
        <div className="text-white font-myYekanDemibold text-sm flex flex-row items-center gap-2">
          <div className="relative w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <img src={reading} alt="icon" className="w-6 h-6" />
          </div>
          <p>مسیر درمان</p>
        </div>
        <button onClick={onClick}>
          <XIcon className="text-white"></XIcon>
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[60vh] px-8 flex flex-col gap-2">
        {Array.from({ length: 24 }, (_, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-2 border rounded bg-gray-50 font-myYekanFaNumMedium"
          >
            <p>جلسه {i + 1}</p>
            {completedSessions.includes(i + 1) && (
              <span className="text-green-500 font-bold">✔</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
