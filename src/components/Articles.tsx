import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import { ReactComponent as Arrow } from "../assets/icons/arrow-left-green.svg";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

interface Category {
  id: number;
  slug: string;
  title: string;
  createdAt: number;
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
  categories: Category[];
  createdAt: number;
  updatedAt: string;
  user: User;
}

function Articles() {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const res = await fetch(`${BASE_URL}/api/v1/blogs?limit=4&page=1`);
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        
        // Debug logging
        console.log("Articles API Response:", data);
        console.log("Articles data:", data?.data);
        console.log("Is data an array?", Array.isArray(data));
        console.log("Is data.data an array?", Array.isArray(data?.data));
        
        // Handle different response structures
        let articlesData: Article[] = [];
        
        if (Array.isArray(data)) {
          // If the response is directly an array
          articlesData = data.slice(0, 4); // Limit to 4 items
        } else if (Array.isArray(data?.data)) {
          // If the response has a data property containing the array
          articlesData = data.data;
        } else if (data && typeof data === 'object') {
          // If it's an object, try to find the array
          articlesData = Object.values(data).find(val => Array.isArray(val)) as Article[] || [];
        }
        
        console.log("Final articles data:", articlesData);
        console.log("Articles count:", articlesData.length);
        
        setArticles(articlesData);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError("خطا در بارگذاری مقالات");
      } finally {
        setLoading(false);
      }
    };
    
    fetchArticles();
  }, []);

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-400"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="text-center py-8 font-myVazirRegular">
      <p className="text-red-500 mb-4">{error}</p>
      <button
        onClick={() => window.location.reload()}
        className="bg-primary-400 text-white px-4 py-2 rounded-lg font-myVazirMedium hover:bg-primary-500 transition-colors"
      >
        تلاش مجدد
      </button>
    </div>
  );

  const EmptyState = () => (
    <div className="text-center py-8">
      <p className="text-Gray-500 text-lg font-myVazirRegular">مقاله‌ای یافت نشد.</p>
    </div>
  );

  return (
    <div className="mt-[150px] desktop:px-[96px] tablet:px-6 xs:px-4 text-Gray-950">
      <div className="mb-10 flex flex-col items-start justify-between">
        <div className="w-full flex flex-row items-center justify-between">
          <h2 className="desktop:text-4xl tablet:text-3xl text-[28px] font-myPeydaSemibold desktop:h-[54px] tablet:h-[48px] h-[42px]">
            مقالات
          </h2>
          <button
            className="flex flex-row items-center gap-[10px] text-primary-400 hover:text-primary-600 transition-colors duration-200"
            onClick={() => navigate("/articles")}
          >
            <p className="whitespace-nowrap font-myVazirMedium desktop:text-xl tablet:text-xl text-base">
              مشاهده همه مقالات
            </p>
            <Arrow className="transition-transform duration-200 hover:translate-x-1" />
          </button>
        </div>

        <h3 className="desktop:text-lg tablet:text-lg text-base font-myVazirRegular mt-1">
          با مقالات به روز و معتبر سرو، از خود مراقبت کنید.
        </h3>
      </div>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      
      {!loading && !error && (
        <>
          {articles.length > 0 ? (
<div className="grid grid-cols-1 desktop:grid-cols-3 gap-[32px] place-items-center">

              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  subtitle={article.sub_title}
                  image={article.image}
                  imageTitle={article.image_title}
                  category={article.categories?.[0]?.title || "بدون دسته"}
                  readTime={article.reading_time.toString()}
                  slug={article.slug}
                  createdAt={article.createdAt}
                  className="bg-primary-50 border-primary-100"
                />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}
        </>
      )}
    </div>
  );
}

export default Articles;