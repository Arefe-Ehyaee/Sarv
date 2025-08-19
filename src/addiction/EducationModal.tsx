import { useState } from "react";
import { ReactComponent as XIcon } from "../assets/icons/x-circle.svg";
import reading from "../assets/icons/reading.svg";
import back from "../assets/icons/chevron-left.svg";

interface EducationModalProps {
  onClick: () => void;
}

// Example educational contents (from your book, simplified)
const contents: Record<string, string> = {
  "تأثیر مواد محرک روی مغز": `
مواد محرکی مانند شیشه (مت‌آمفتامین) سیستم عصبی را به‌شدت تحریک می‌کنند. این مواد با آزاد کردن حجم زیادی دوپامین ــ ماده‌ای که مسئول ایجاد شادی و لذت در مغز است ــ فرد را دچار هیجان و نشاط موقت می‌سازند.

اما مصرف مداوم باعث برهم‌خوردن تعادل طبیعی مغز می‌شود. به همین دلیل مشکلاتی مانند کاهش حافظه و تمرکز، ناتوانی در تجربه لذت بدون مصرف، و افزایش احتمال بروز افسردگی یا پرخاشگری دیده می‌شود.

📍 این آسیب‌ها همیشگی نیستند. در صورت قطع مصرف و دادن فرصت به مغز برای ترمیم، بسیاری از این تغییرات قابل بازگشت خواهند بود.`,

  "مهارت‌های مقابله با وسوسه": `
وسوسه یکی از مهم‌ترین چالش‌ها در مسیر بهبودی است. چند راهکار کاربردی برای مدیریت آن :

تنفس عمیق یا مدیتیشن کوتاه: این کار به آرام‌سازی بدن و ذهن کمک می‌کند.

تغییر محیط: اگر در مکانی هستید که محرک مصرف وجود دارد، از آن فاصله بگیرید.

فعالیت جایگزین: انجام ورزش سبک، تماس با یک دوست حامی یا هر فعالیت سالم دیگر می‌تواند توجه شما را از وسوسه دور کند.

مرور دلایل ترک: یادداشت کنید چرا تصمیم گرفتید پاک بمانید و به این دلایل رجوع کنید.

📍 به یاد داشته باشید، وسوسه همیشه موقتی است و اوج آن معمولاً بیشتر از چند دقیقه طول نمی‌کشد.`,

  "پیشگیری از عود": `
عود به معنای شکست نیست. بلکه بخشی طبیعی از مسیر بهبودی است. برای مدیریت آن میتوانید اقدامات زیر را در نظر بگیریم:

شناسایی محرک‌ها و موقعیت‌های خطرناک: مثل دیدن دوستان مصرف‌کننده یا تجربه استرس شدید.

داشتن برنامه جایگزین: بدانید وقتی وسوسه سراغتان آمد چه کاری انجام خواهید داد.

حامی قابل اعتماد: شخصی که بتوانید در لحظه‌های سخت با او تماس بگیرید و حمایت بگیرید.

استفاده از تکنیک‌های شناختی-رفتاری: برای مثال، تغییر افکار منفی و تمرکز روی افکار سالم و سازنده.

📍 هر بار که در برابر وسوسه مقاومت می‌کنید، مغزتان قوی‌تر می‌شود و احتمال پاک ماندن افزایش می‌یابد.`,
};

export default function EducationModal({
  onClick,
}: EducationModalProps) {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

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
          <p>محتوای آموزشی</p>
        </div>
        <button onClick={onClick}>
          <XIcon className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Content */}
      <div className="overflow-y-auto max-h-[60vh] px-8 flex flex-col gap-2">
        {!selectedTopic &&
          Object.keys(contents).map((title) => (
            <div
              key={title}
              className="border-[0.6px] cursor-pointer bg-white text-black rounded-lg hover:shadow-lg transition relative flex items-center p-3 font-myYekanMedium"
              onClick={() => setSelectedTopic(title)}
            >
              <span className="mr-1 truncate">{title}</span>
            </div>
          ))}


        {selectedTopic && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
              <h2 className="text-base md:text-lg font-myYekanDemibold">{selectedTopic}</h2>

              <button
                onClick={() => setSelectedTopic(null)}
                className="self-start bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md p-2 font-myYekanMedium"
              >
                <img src={back} alt="" className="w-3 h-3" />
              </button>
            </div>
            <p className="text-sm font-myYekanRegular leading-relaxed whitespace-pre-line text-justify">
              {contents[selectedTopic]}
            </p>

          </div>
        )}
      </div>
    </div>
  );
}
