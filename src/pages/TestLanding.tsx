import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg";
import useUserStore from "../store/UserStore";
import { toast } from "react-toastify";
import { BDI_TITLES, STATIC_OPTIONS, StaticOption } from "../utils/utils_tests";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface BDIOption {
  id: number;
  option_text: string;
  option_value: number;
}

interface Question {
  id: number;
  title: string;
  options?: BDIOption[];
}

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function getTestDescription(name: string | undefined): string {
  switch (name?.toLowerCase()) {
    case "bai":
      return "هر عبارت را به دقت بخوانید و مشخص کنید در خلال هفته گذشته تا امروز چقدر از آن علامت در رنج بوده‌اید.";
    case "bdi":
      return "در این پرسشنامه هر سوال بیان‌کننده حالتی در فرد است...";
    case "ghq":
      return "به سوالات زیر پاسخ دهید.";
    default:
      return "";
  }
}

function TestLanding() {
  const navigate = useNavigate();
  const { testName } = useParams<{ testName: string }>();
  const token = useUserStore((state) => state.token);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);
  const [submitted, setSubmitted] = useState(false);

  const queryClient = useQueryClient();

  // Fetch test questions
  useEffect(() => {
    if (!token || !testName) return;

    fetch(`${BASE_URL}/api/v1/tests/${testName}/questions`, {
      headers: { Authorization: `Bearer ${token}` },
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
        if (testName.toLowerCase() === "bdi") {
          const updated = data.map((q) => ({
            ...q,
            title: BDI_TITLES[q.id] || q.title,
          }));
          setQuestions(updated);
        } else {
          setQuestions(data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setLoading(false);
      });
  }, [testName, token]);

  // Submit mutation
  const {
    mutate: submitTestMutation,
    isPending: isSubmitting,
  } = useMutation({
    mutationFn: async (options: number[]) => {
      const res = await fetch(`${BASE_URL}/api/v1/tests/${testName}/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ options }),
      });

      if (!res.ok) throw new Error("خطا در ارسال پاسخ‌ها");
      return res.json();
    },
    onSuccess: (data) => {
      toast.success("پاسخ‌ها با موفقیت ثبت شد!");
      setResult(data);
      setSubmitted(true);
      localStorage.setItem(`${testName}_result`, JSON.stringify(data));
      navigate(`/test/${testName}/result`, { state: data });
      queryClient.invalidateQueries({ queryKey: ["profile", token] });
    },
    onError: () => {
      toast.error("خطا در ثبت پاسخ‌ها");
    },
  });

  // Submit handler
  function handleSubmit() {
    const answersArray = questions.map((q) => {
      const answer = answers[q.id];
      if (answer === undefined) {
        toast.error("لطفاً به تمام سوالات پاسخ دهید.");
        throw new Error("Incomplete answers");
      }
      return answer;
    });

    submitTestMutation(answersArray);
  }

  const currentQuestion = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

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

  if (loading || isSubmitting)
    return <div className="text-center p-8">در حال بارگذاری...</div>;

  if (!questions.length)
    return <div className="text-center p-8">سوالی یافت نشد.</div>;

  if (submitted && result) {
    return (
      <div className="relative min-h-screen flex flex-col items-start w-full justify-center bg-Gray-100 text-Gray-950 px-4 desktop:px-[96px]">
        <img
          src={svgSmall}
          alt="Background Left"
          className="absolute left-[4%] bottom-0 pointer-events-none h-[876px] z-0 hidden desktop:block"
        />

        <h2 className="font-myVazirFaNumRegular bg-primary-200 desktop:text-lg mb-[30px] border rounded-full px-[18px] py-[6px]">
          نتیجه آزمون شما آماده است
        </h2>

        <div className="bg-white px-[22px] py-7 rounded-[20px] mx-auto z-10 relative w-full">
          <h1 className="text-3xl font-myPeydaSemibold mb-4">نتیجه</h1>
          <p className="text-gray-700 mb-4">
            امتیاز شما: <strong>{result.score}</strong>
          </p>
        </div>

        <div className="flex flex-row justify-end items-center mt-[30px] z-10 relative">
          <button
            onClick={() => navigate("/tests")}
            className="flex flex-row gap-[10px] items-center mb-[30px]"
          >
            بازگشت به لیست آزمون‌ها
            <img
              src={right}
              alt="back"
              className="rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]"
            />
          </button>
        </div>
      </div>
    );
  }

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
        <span className="text-Gray-600 desktop:text-lg">خروج از آزمون</span>
      </button>

      <h2 className="bg-primary-200 desktop:text-lg mb-[30px] border rounded-full px-[18px] py-[6px]">
        سوال {currentIndex + 1} از {questions.length}
      </h2>

      {/* Intro Page */}
      {currentIndex === -1 ? (
        <div className="w-full">
          <div className="bg-white px-[22px] py-7 rounded-[20px] w-full mx-auto">
            <h1 className="text-4xl font-myPeydaSemibold mb-4">
              آزمون {testName?.toUpperCase()}
            </h1>
            <p className="text-gray-700 mb-4">تعداد سوالات: {questions.length}</p>
            <p className="text-gray-600 mb-4">{getTestDescription(testName)}</p>
          </div>
          <div className="flex justify-end mt-[30px]">
            <button
              onClick={() => setCurrentIndex(0)}
              className="flex gap-[10px] items-center mb-[30px]"
            >
              ادامه
              <img
                src={right}
                alt="next"
                className="rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]"
              />
            </button>
          </div>
        </div>
      ) : (
        // Question Page
        <div className="w-full">
          <div className="bg-white px-[22px] py-7 rounded-[20px] mx-auto">
            <p className="mb-4 text-[22px]">{currentQuestion.title}</p>

            <div className="flex flex-col gap-3 text-lg">
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

          <div className="flex justify-between mt-[30px]">
            <button
              onClick={() => setCurrentIndex(currentIndex - 1)}
              disabled={currentIndex === 0}
              className="flex gap-[6px] items-center mb-[30px] disabled:opacity-50"
            >
              <img
                src={right}
                alt="prev"
                className="rotate-180 border border-gray-300 rounded-[4px] bg-gray-200 p-[6px]"
              />
              <span className="text-gray-600">سوال قبلی</span>
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
              className="flex gap-[10px] items-center mb-[30px] disabled:opacity-50"
            >
              {isLast ? "ارسال پاسخ‌ها" : "سوال بعدی"}
              <img
                src={right}
                alt="next"
                className="rotate-180 border border-primary-300 rounded-[4px] bg-primary-200 p-[6px]"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestLanding;
