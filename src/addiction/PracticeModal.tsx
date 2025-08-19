import { ReactComponent as XIcon } from "../assets/icons/x-circle.svg"; 
import practice from "../assets/icons/Clipboard2.svg";

interface PracticeModalProps {
  onClick: () => void;
}

export default function PracticeModal({
  onClick,
}: PracticeModalProps) {

  return (
    <div
      className="w-[300px] md:w-[785px] min-h-[524px] rounded-lg flex flex-col bg-white pb-4"
      style={{
        boxShadow:
          "-2px 4px 8px 2px rgba(168, 168, 168, 1), 2px 4px 8px 2px rgba(168, 168, 168, 1)",
      }}
    >
      <div className="flex flex-row justify-between items-center mb-4 h-14 bg-[#0ea5a2] px-4 rounded-t-lg shrink-0">
        <div className="text-white font-myYekanDemibold text-sm flex flex-row items-center gap-2">
          <div className="relative w-10 h-10 bg-white rounded-full flex justify-center items-center">
            <img src={practice} alt="icon" className="w-6 h-6" />
          </div>
          <p>
            تمرین‌های من
          </p>
        </div>
        <button onClick={onClick}>
          <XIcon className="text-white"></XIcon>
        </button>
      </div>

      {/* <img src={stepTwo} alt="steps" /> */}

      <div className="overflow-y-auto max-h-[60vh] px-8">

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

        <div className="w-full h-[104px] border border-neutral-100 rounded-xl mt-8 mx-auto p-4 font-myPeydaFaNumRegular">
          <div>تمرین شماره یک</div>
          <div className="flex flex-row  gap-[31px] items-center mt-4">

          </div>
        </div>

      </div>
    </div>
  );
}
