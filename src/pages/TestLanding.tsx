import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg";
import useUserStore from "../store/UserStore";
import { toast } from "react-toastify";
import { STATIC_OPTIONS, StaticOption } from "../utils/utils_tests";

interface BDIOption {
  id: number;
  option_text: string;
  option_value: number;
}

interface Question {
  id: number;
  title: string;
  options?: BDIOption[]; // Only for BDI
}

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function TestLanding() {
  const navigate = useNavigate();
  const { testName } = useParams<{ testName: string }>();
  const token = useUserStore((state) => state.token);

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1); // -1 shows intro page
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token || !testName) return;

    fetch(`${BASE_URL}/api/v1/tests/${testName}/questions`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          toast.error("باید لاگین کنید");
          throw new Error("Unauthorized");
        }
        if (!res.ok) throw new Error("Failed to fetch test questions");
        return res.json();
      })
      .then((data: Question[]) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [testName, token]);

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  function handleSubmit() {
    if (!token || !testName) return;

    const answersArray = questions.map((q) => {
      const answer = answers[q.id];
      if (answer === undefined) {
        toast.error("لطفاً به تمام سوالات پاسخ دهید.");
        throw new Error("Incomplete answers");
      }
      return answer;
    });

    fetch(`${BASE_URL}/api/v1/tests/${testName}/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ options: answersArray }),
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("لطفاً ابتدا لاگین کنید");
          throw new Error("Forbidden");
        }
        if (res.status === 400) {
          toast.error("فرمت پاسخ‌ها نامعتبر است");
          throw new Error("Bad Request");
        }
        if (!res.ok) {
          toast.error("خطا در ارسال پاسخ‌ها");
          throw new Error("Failed to submit answers");
        }
        return res.json();
      })
      .then(() => {
        toast.success("پاسخ‌ها با موفقیت ثبت شد!");
        navigate("/tests");
      })
      .catch((err) => {
        console.error("Submission error:", err);
      });
  }

  function getOptions(): StaticOption[] {
    if (testName === "bdi") {
      return (
        currentQuestion?.options?.map((opt) => ({
          id: opt.id,
          text: opt.option_text,
          value: opt.option_value,
        })) || []
      );
    } else {
      return STATIC_OPTIONS[testName!] || [];
    }
  }

  const optionsToRender = currentIndex >= 0 ? getOptions() : [];

  if (loading) return <div className="text-center p-8">در حال بارگذاری...</div>;
  if (!questions.length) return <div className="text-center p-8">سوالی یافت نشد.</div>;

  return (
    <div className="relative min-h-screen flex flex-col items-start w-full justify-center bg-Gray-100 text-Gray-950 px-4 desktop:px-[96px]">
      <img
        src={svgSmall}
        alt="Background Left"
        className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0 hidden desktop:block"
      />

      <button
        className="flex flex-row gap-[10px] items-center mb-[30px]"
        onClick={() => navigate("/tests")}
      >
        <img src={right} alt="exit" />
        <span className="font-myVazirRegular text-Gray-600  desktop:text-lg tablet:text-lg mobile:text-base">
          خروج از آزمون
        </span>
      </button>

      <h2 className="font-myVazirFaNumRegular bg-primary-200 desktop:text-lg tablet:text-lg mobile:text-base mb-[30px] border rounded-full px-[18px] py-[6px]">
        سوال {currentIndex + 1} از {questions.length}
      </h2>

      {/* ✅ Intro Page */}
      {currentIndex === -1 ? (
        <div className="w-full">
          <div className="bg-white px-[22px] py-7 rounded-[20px] w-full mx-auto z-10 relative">
            <h1 className="text-4xl font-myPeydaSemibold mb-4">
              آزمون {testName?.toUpperCase()}
            </h1>
            <p className="text-gray-700 mb-4">تعداد سوالات: {questions.length}</p>
          </div>
          <div className="flex flex-row justify-end items-center mt-[30px] z-10 relative">
            <button
              onClick={() => setCurrentIndex(0)}
              className="flex flex-row gap-[10px] items-center mb-[30px] disabled:opacity-50"
            >
              ادامه
              <img src={right} alt="next" className="text-primary-600 rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]" />
            </button>
          </div>


        </div>
      ) : (
        // ✅ Question Page
        <div className="w-full">
          <div className="bg-white px-[22px] py-7 rounded-[20px] mx-auto z-10 relative">
            <p className="mb-4 font-myVazirMedium desktop:text-[32px] tablet:text-[32px] mobile:text-[22px]">
              {currentQuestion.title}
            </p>

            <div className="flex flex-col gap-3 font-myVazirRegular desktop:text-lg">
              {optionsToRender.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name={`q-${currentQuestion.id}`}
                    value={opt.value}
                    checked={answers[currentQuestion.id] === opt.value}
                    onChange={() =>
                      setAnswers({ ...answers, [currentQuestion.id]: opt.value })
                    }
                  />
                  {opt.text}
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center mt-[30px] z-10 relative">
            <button
              onClick={() => setCurrentIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="flex flex-row gap-[6px] items-center mb-[30px] disabled:opacity-50"
            >
              <img src={right} alt="prev" className="text-Gray-600 border border-Gray-300 rounded-[4px] bg-Gray-200 p-[6px]"/>
              <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px] tablet:text-[18px] mobile:text-base">
                سوال قبلی
              </span>
            </button>

            <button
              disabled={answers[currentQuestion.id] === undefined}
              onClick={() => {
                if (isLast) {
                  handleSubmit();
                } else {
                  setCurrentIndex(currentIndex + 1);
                }
              }}
              className="flex flex-row gap-[10px] items-center mb-[30px] disabled:opacity-50 z-10 relative font-myVazirRegular desktop:text-lg"
            >
              {isLast ? "ارسال پاسخ‌ها" : "سوال بعدی"}
              <img src={right} alt="next" className="text-primary-600 rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestLanding;
