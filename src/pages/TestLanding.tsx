import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import svgSmall from "../assets/icons/smalltreeBg.svg";
import right from "../assets/icons/chevron-right.svg";
import CustomButton from "../components/CustomeButton";
import { defaultOptions } from "../constants/testOptions";

interface Question {
  id: number;
  title: string;
}

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

function TestLanding() {
  const navigate = useNavigate();
  const { testName } = useParams<{ testName: string }>();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);

  // Fetch questions on page load
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/v1/tests/${testName}/questions`);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error("Error fetching questions:", error);
        alert("خطا در دریافت سوالات آزمون.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [testName]);

  const handleChange = (qid: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = async () => {
    if (Object.keys(answers).length !== questions.length) {
      alert("لطفاً به تمام سوالات پاسخ دهید.");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/v1/tests/${testName}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers }),
      });

      if (!response.ok) throw new Error("Failed to submit");
      const result = await response.json();
      navigate(`/test/${testName}/result`, { state: result });
    } catch (error) {
      console.error("Submission failed:", error);
      alert("خطایی در ارسال پاسخ‌ها رخ داد.");
    }
  };

  if (loading) return <p className="text-center mt-20">در حال بارگذاری سوالات...</p>;

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

      <div className="bg-background-BG p-6 rounded-[20px] shadow-md z-10 relative">
        {questions.map((q) => (
          <div key={q.id} className="mb-6 border-b border-primary-100 pb-4">
            <h4 className="font-myPeydaSemibold text-[18px] mb-3">{q.title}</h4>
            <div className="flex flex-wrap gap-6">
              {defaultOptions.map((opt) => (
                <label key={opt.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt.id}
                    onChange={() => handleChange(q.id, opt.id)}
                    checked={answers[q.id] === opt.id}
                  />
                  <span>{opt.text}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <CustomButton
          text="ارسال پاسخ‌ها"
          className="bg-primary-400 text-white w-[164px] h-[48px]"
          handleOnClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default TestLanding;
