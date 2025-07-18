// File: src/pages/TestResult.tsx
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomButton from "../components/CustomeButton";

function TestResult() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { testId } = useParams();

  const result = state || {};

  return (
    <div className="min-h-screen bg-Gray-50 text-Gray-950 flex flex-col">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-8 py-16">
        <h1 className="text-3xl font-myPeydaSemibold mb-4">نتیجه آزمون شما</h1>
        <p className="text-xl text-center font-myVazirRegular mb-6">
          {result?.summary || "نتیجه‌ای برای نمایش وجود ندارد."}
        </p>

        {result?.score !== undefined && (
          <p className="text-lg font-myVazirFaNumRegular mb-4">
            امتیاز شما: <span className="text-primary-700 font-bold">{result.score}</span>
          </p>
        )}

        <CustomButton
          text="بازگشت به آزمون‌ها"
          className="bg-primary-600 text-white w-40 h-12"
          handleOnClick={() => navigate("/tests")}
        />
      </div>

      <Footer />
    </div>
  );
}

export default TestResult;