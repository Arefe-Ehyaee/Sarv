import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import tree from "../assets/icons/treeArticles.svg";
import svg1 from "../assets/images/backTree_big.svg";

import Navbar from "../components/Navbar";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import ArticlesCategory from "../components/ArticlesCategory";

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

interface ApiResponse {
  data: Article[];
  total?: number;
  page?: number;
  limit?: number;
}

function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchArticles = async (page = 1) => {
    try {
      setLoading(true);
      setError(null);

      const res = await fetch(`${BASE_URL}/api/v1/blogs?limit=10&page=${page}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();

      // Debug logging
      console.log("API Response:", data);
      console.log("Articles data:", data?.data);
      console.log("Is data an array?", Array.isArray(data));
      console.log("Is data.data an array?", Array.isArray(data?.data));

      // Handle different response structures
      let articlesData: Article[] = [];

      if (Array.isArray(data)) {
        // If the response is directly an array
        articlesData = data;
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
      setTotalPages(Math.ceil((data.total || articlesData.length) / 10));
      setCurrentPage(page);
    } catch (error) {
      console.error("Failed to fetch articles:", error);
      setError("خطا در بارگذاری مقالات. لطفاً دوباره تلاش کنید.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles(1);
  }, []);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      fetchArticles(page);
    }
  };

  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-400"></div>
    </div>
  );

  const ErrorMessage = () => (
    <div className="flex flex-col items-center justify-center h-64 text-center font-myVazirRegular">
      <p className="text-red-500 mb-4">{error}</p>
      <button
        onClick={() => fetchArticles(currentPage)}
        className="bg-primary-400 text-white px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors"
      >
        تلاش مجدد
      </button>
    </div>
  );

  const Pagination = () => (
    <div className="flex justify-center items-center mt-12 mb-8 gap-2">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        قبلی
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 border rounded-lg transition-colors ${currentPage === index + 1
              ? 'bg-primary-400 text-white border-primary-400'
              : 'hover:bg-gray-100'
            }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 transition-colors"
      >
        بعدی
      </button>
    </div>
  );

  return (
    <div className="relative min-h-screen text-Gray-950 bg-Gray-50 overflow-hidden">
      <div className="hidden desktop:block">
        <img
          src={svg1}
          alt="Background Left"
          className="absolute left-0 top-[4%] z-0 pointer-events-none"
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <div className="desktop:px-[96px] tablet:px-6 px-4 pb-[120px]">
          <div className="flex flex-row justify-between mt-[80px]">
            <div>
              <h4 className="font-myPeydaSemibold text-4xl text-Gray-950 mb-1">
                مقالات سرو
              </h4>
              <h5 className="font-myVazirRegular text-lg text-Gray-950">
                به روزترین مقالات معتبر را اینجا بخوانید.
              </h5>
            </div>
            <img src={tree} alt="sarv" />
          </div>

          <ArticlesCategory />

          {loading && <LoadingSpinner />}
          {error && <ErrorMessage />}

          {!loading && !error && (
            <>
              <div className="grid grid-cols-1 desktop:grid-cols-3 gap-[32px] place-items-center mt-[60px]">

                {articles.map((article) => (
                  <ArticleCard
                    key={article.id}
                    title={article.title}
                    subtitle={article.sub_title}
                    image={article.image}
                    category={article.categories?.[0]?.title || "بدون دسته"}
                    readTime={article.reading_time.toString()}
                    slug={article.slug}
                    createdAt={article.createdAt}
                    imageTitle={article.image_title}
                    className="bg-primary-50 border-primary-100"
                  />
                ))}
              </div>

              {articles.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-Gray-500 text-lg">مقاله‌ای یافت نشد.</p>
                  <p className="text-Gray-400 text-sm mt-2">
                    Debug: Check console for API response details
                  </p>
                </div>
              )}

              {totalPages > 1 && <Pagination />}
            </>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default ArticlesPage;