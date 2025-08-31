import { useState } from "react";
import { ReactComponent as XIcon } from "../assets/icons/x-circle.svg";
import practiceIcon from "../assets/icons/Clipboard2.svg";
import practicesData from "../data/practices.json";

interface PracticeSession {
  id: number;
  title: string;
  description?: string;
  questions?: string[];
  exercises?: string[];
  homework?: string;
  notes?: string[];
  topic?: string;
  content?: {
    description?: string;
    symptoms?: string[];
  };
}

interface PracticeModalProps {
  onClick: () => void;
}

export default function PracticeModal({ onClick }: PracticeModalProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const practices: PracticeSession[] = practicesData;

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
            <img src={practiceIcon} alt="icon" className="w-6 h-6" />
          </div>
          <p>تمرین‌های من</p>
        </div>
        <button onClick={onClick}>
          <XIcon className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[60vh] px-6">
        {practices.map((session) => (
          <div
            key={session.id}
            className="w-full border border-neutral-200 rounded-xl mt-6 p-4 font-myPeydaFaNumRegular hover:shadow-md transition-shadow duration-200"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() =>
                setExpandedId(expandedId === session.id ? null : session.id)
              }
            >
              <h3 className="text-base font-semibold text-gray-800">
                {session.title}
              </h3>
              <span className="text-sm text-[#0ea5a2]">
                {expandedId === session.id ? "بستن" : "مشاهده جزئیات"}
              </span>
            </div>

            {/* جزئیات */}
            {expandedId === session.id && (
              <div className="mt-3 text-sm text-gray-700 space-y-3">
                {session.topic && (
                  <p className="font-medium">موضوع: {session.topic}</p>
                )}
                {session.description && <p>{session.description}</p>}

                {session.content?.description && <p>{session.content.description}</p>}
                {session.content?.symptoms && session.content.symptoms.length > 0 && (
                  <ul className="list-disc pr-6 space-y-1">
                    {session.content.symptoms.map((symptom, i) => (
                      <li key={i}>{symptom}</li>
                    ))}
                  </ul>
                )}

                {session.notes && session.notes.length > 0 && (
                  <div>
                    <p className="font-medium">یادداشت‌ها:</p>
                    <ul className="list-disc pr-6 space-y-1">
                      {session.notes.map((note, i) => (
                        <li key={i}>{note}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {session.questions && session.questions.length > 0 && (
                  <div>
                    <p className="font-medium">سوالات:</p>
                    <ul className="list-disc pr-6 space-y-1">
                      {session.questions.map((q, i) => (
                        <li key={i}>{q}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {session.exercises && session.exercises.length > 0 && (
                  <div>
                    <p className="font-medium">تمرین‌ها:</p>
                    <ul className="list-disc pr-6 space-y-1">
                      {session.exercises.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {session.homework && (
                  <p className="font-medium">تمرین خانگی: {session.homework}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
