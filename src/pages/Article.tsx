import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import tree from "../assets/icons/treeArticles.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import right from "../assets/icons/chevron-right.svg";
import { ReactComponent as Calendar } from "../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../assets/icons/clock.svg";
import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { ReactComponent as Bookmark } from "../assets/icons/bookmark.svg";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";
import svg1 from "../assets/images/backTree_big.svg";
import ReactMarkdown from "react-markdown";
import moment from "jalali-moment";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Category {
  id: number;
  slug: string;
  title: string;
  createdAt: string;
  updatedAt: string;
}

interface User {
  id: number;
  email: string;
  username: string;
}

interface Article {
  id: number;
  title: string;
  sub_title: string;
  image: string;
  image_title: string;
  reading_time: number;
  slug: string;
  content: string;
  createdAt: number;
  updatedAt: string;
  categories: Category[];
  user: User;
}

function Article() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const mountedRef = useRef(true);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    mountedRef.current = true;
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const fetchArticle = async () => {
      if (!slug) {
        setError("شناسه مقاله معتبر نیست");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${BASE_URL}/api/v1/blogs/${slug}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(
            response.status === 404
              ? "مقاله یافت نشد"
              : `خطا در بارگذاری مقاله: ${response.status}`
          );
        }

        const data = await response.json();

        if (!mountedRef.current) return;

        const articleData: Article = data.data ?? data;

        if (!articleData.id) {
          throw new Error("فرمت داده‌های دریافتی نامعتبر است");
        }

        setArticle(articleData);
      } catch (err: any) {
        if (err.name === "AbortError") {
          console.log("Request was aborted");
          return;
        }
        console.error("Fetch error:", err);
        if (mountedRef.current) {
          setError(err.message || "خطا در بارگذاری مقاله");
        }
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    };

    fetchArticle();

    return () => {
      mountedRef.current = false;
      controller.abort();
    };
  }, [slug]);

  const formattedDate = (() => {
    if (!article?.createdAt) return "";

    let dateValue: number | string = article.createdAt;

    // Convert string to number if it's numeric
    if (typeof dateValue === "string" && !isNaN(Number(dateValue))) {
      dateValue = Number(dateValue);
    }

    // If it's a number, determine if it's seconds or milliseconds
    if (typeof dateValue === "number") {
      if (dateValue < 1e12) {
        dateValue = dateValue * 1000; // seconds → ms
      }
    }

    // Convert to moment, ensure valid
    const m = moment(new Date(dateValue));
    return m.isValid() ? m.locale("fa").format("D MMMM YYYY") : "";
  })();


  const formatReadingTime = (minutes: number) => `${minutes} دقیقه مطالعه`;

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="flex flex-col items-center justify-center h-64 text-center">
      <p className="text-red-500 mb-4">{error}</p>
      <button
        onClick={() => slug && abortControllerRef.current?.abort()}
        className="bg-primary-400 text-white px-4 py-2 rounded-lg font-myVazirMedium hover:bg-primary-500 transition-colors mb-4"
      >
        تلاش مجدد
      </button>
      <button
        onClick={() => navigate("/articles")}
        className="text-primary-600 font-myVazirRegular hover:text-primary-700 transition-colors"
      >
        بازگشت به مقالات
      </button>
    </div>
  );

  if (loading) {
    return (
      <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">
        <Navbar />
        <div className="desktop:px-[96px] tablet:px-6 px-4">
          <LoadingSpinner />
        </div>
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">
        <Navbar />
        <div className="desktop:px-[96px] tablet:px-6 px-4">
          <ErrorMessage />
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">
      <div className="hidden desktop:block">
        <img
          src={svg1}
          alt="Background Left"
          className="absolute left-0 top-[6%] z-0 pointer-events-none"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="desktop:px-[96px] tablet:px-6 px-4">
          <button
            className="flex flex-row gap-[10px] items-center mt-[50px]"
            onClick={() => navigate("/articles")}
          >
            <img src={right} alt="" />
            <span className="font-myVazirRegular text-Gray-600 desktop:text-[18px] tablet:text-[18px] text-[14px]">
              بازگشت به مقالات
            </span>
          </button>

          <div className="my-[30px]">
            <p className="font-myPeydaSemibold desktop:text-[36px] tablet:text-[32px] text-[28px]">
              {article.title}
            </p>
            <p className="font-myVazirRegular desktop:text-[16px] tablet:text-[16px] text-[14px]">
              {article.sub_title}
            </p>
          </div>

          <div className="flex flex-row items-center gap-[6px] mb-[10px] font-myVazirFaNumRegular desktop:hidden tablet:hidden">
            دسته بندی:
            <div className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-center rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600">
              {article.categories?.[0]?.title || "بدون دسته"}
            </div>
          </div>

          <div className="flex flex-row justify-between items-center font-myVazirFaNumRegular mb-[14px]">
            <div className="flex flex-row desktop:gap-[20px] tablet:gap-[20px] gap-[10px]">
              <p className="flex flex-row gap-[6px]">
                <Clock className="text-primary-700 w-6 h-6" />
                <span className="text-Gray-500">{formatReadingTime(article.reading_time)}</span>
              </p>
              <p className="flex flex-row gap-[6px]">
                <Calendar className="text-primary-700 w-6 h-6" />
                <p className="text-Gray-500">{formattedDate}</p>
              </p>
            </div>

            <div className="desktop:flex tablet:flex flex-row items-center gap-[6px] hidden">
              دسته بندی:
              <div className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-center rounded-full px-[10px] py-[4px] bg-primary-50 border border-primary-100 text-primary-600">
                {article.categories?.[0]?.title || "بدون دسته"}
              </div>
            </div>
          </div>

          <img
            src={article.image.startsWith("http") ? article.image : `http://${article.image}`}
            alt={article.image_title || article.title}
            className="object-cover rounded-[20px] mx-auto w-full desktop:h-[565px] tablet:h-[565px] h-[366px]"
          />

          <div className="flex flex-row gap-[20px] items-center desktop:justify-end tablet:justify-end justify-between mt-[10px]">
            <div className="bg-background-BG rounded-[9px] flex flex-row justify-center gap-2 p-[6px] cursor-pointer hover:bg-gray-200 transition-colors">
              <Bookmark className="text-primary-700" />
              <span className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-Gray-500">
                ذخیره کردن مقاله
              </span>
            </div>
            <div className="bg-background-BG rounded-[9px] flex flex-row justify-center gap-2 p-[6px] cursor-pointer hover:bg-gray-200 transition-colors">
              <Heart className="text-primary-800" />
              <div className="font-myVazirRegular desktop:text-base tablet:text-base text-sm text-Gray-500">
                افزودن به علاقمندی‌ها
              </div>
            </div>
          </div>


          <div className="mb-[100px] mt-[30px] text-justify font-myVazirRegular desktop:text-[18px] tablet:text-[18px] text-[16px]">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown>
                {article.content}
              </ReactMarkdown>
            </div>

          </div>
        </div>

        <div className="relative h-[269px] bg-primary-800 mt-[120px] flex flex-col items-center justify-center text-center">
          <h5 className="text-primary-200 font-myPeydaSemibold desktop:text-[32px] tablet:text-[32px] text-[22px]">
            خود آگاهی از این مسیر شروع میشه
          </h5>
          <button className="mt-5">
            <div className="flex items-center gap-2 text-primary-300 font-myVazirRegular text-lg">
              درباره‌ی خدمات ما بیشتر بدانید
              <Arrow />
            </div>
          </button>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Article;
