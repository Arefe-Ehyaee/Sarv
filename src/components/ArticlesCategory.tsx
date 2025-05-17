import { useState } from "react";

type Category = {
  id: string;
  label: string;
};

interface ArticlesCategoryProps {
  categories?: Category[];
  onCategoryChange?: (categoryId: string) => void;
}

function ArticlesCategory({ 
  categories = [
    { id: "all", label: "همه" },
    { id: "mental-health", label: "سلامت روان" },
    { id: "anxiety", label: "اضطراب" },
    { id: "depression", label: "افسردگی" },
  ], 
  onCategoryChange = () => {} 
}: ArticlesCategoryProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="h-16 bg-primary-800 rounded-lg w-full overflow-hidden flex items-center  justify-center">
      <div className="flex overflow-x-auto scrollbar-hide px-2 h-full">
        <div className="flex flex-nowrap items-center gap-[20px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
          className={`desktop:w-[209.6px] tablet:w-[144.8px] w-[85px] py-2 desktop:h-[38px] flex items-center justify-center tablet:h-[35px] h-8 text-center font-myPeydaMedium desktop:text-[20px] tablet:text-lg text-base text-primary-50 transition-colors ${
                activeCategory === category.id 
                  ? "bg-primary-500 rounded-lg" 
                  : "hover:bg-primary-500 hover:bg-opacity-50 rounded-lg"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArticlesCategory;