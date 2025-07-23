import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg";
import useUserStore from "../store/UserStore";
import { toast } from "react-toastify";
import { STATIC_OPTIONS, StaticOption } from "../utils/testUtils";


// Types
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

  // Fetch test questions
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
      return currentQuestion?.options?.map((opt) => ({
        id: opt.id,
        text: opt.option_text,
        value: opt.option_value,
      })) || [];
    } else {
      return STATIC_OPTIONS[testName!] || [];
    }
  }

  const optionsToRender = currentIndex >= 0 ? getOptions() : [];

  if (loading) return <div className="text-center p-8">در حال بارگذاری...</div>;
  if (!questions.length) return <div className="text-center p-8">سوالی یافت نشد.</div>;

  return (
    <div className="relative min-h-screen bg-Gray-100 text-Gray-950 px-4 desktop:px-[96px] pb-16">
      <img
        src={svgSmall}
        alt="Background Left"
        className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0 hidden desktop:block"
      />

      <button
        className="flex flex-row gap-[10px] items-center mb-[30px] pt-10"
        onClick={() => navigate("/tests")}
      >
        <img src={right} alt="exit" />
        <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px]">
          خروج از آزمون
        </span>
      </button>

      {/* ✅ Intro Page */}
      {currentIndex === -1 ? (
        <div className="bg-white p-6 rounded-[20px] shadow-md max-w-2xl mx-auto text-center">
          <h1 className="text-2xl font-bold mb-4">آزمون {testName?.toUpperCase()}</h1>
          <p className="text-gray-700 mb-4">تعداد سوالات: {questions.length}</p>
          <button
            className="bg-primary-400 text-white px-6 py-2 rounded text-lg"
            onClick={() => setCurrentIndex(0)}
          >
            شروع آزمون
          </button>
        </div>
      ) : (
        // ✅ Question Page
        <div className="bg-white p-6 rounded-[20px] shadow-md max-w-2xl mx-auto">
          <h2 className="font-bold text-xl mb-4">
            سوال {currentIndex + 1} از {questions.length}
          </h2>
          <p className="mb-4">{currentQuestion.title}</p>

          <div className="flex flex-col gap-3">
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

          <div className="flex justify-between items-center mt-8">
            {currentIndex > 0 && (
              <button
                onClick={() => setCurrentIndex(currentIndex - 1)}
                className="text-sm text-gray-500"
              >
                سوال قبلی
              </button>
            )}
            <button
              disabled={answers[currentQuestion.id] === undefined}
              onClick={() => {
                if (isLast) {
                  handleSubmit();
                } else {
                  setCurrentIndex(currentIndex + 1);
                }
              }}
              className="bg-primary-400 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              {isLast ? "ارسال پاسخ‌ها" : "سوال بعدی"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestLanding;
