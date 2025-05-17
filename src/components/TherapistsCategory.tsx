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
    { id: "individuals", label: "مشاوره فردی" },
    { id: "couples", label: "زوجین و خانواده" },
    { id: "departments", label: "ورکشاپ سازمانها" },
    { id: "kids", label: "مشاوره کودک و نوجوان" },
    { id: "group", label: "گروه درمانی" },
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
        <div className="flex flex-nowrap items-center desktop:gap-[60px] gap-[20px]">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`whitespace-nowrap px-4 py-2 desktop:h-[38px] flex items-center justify-center tablet:h-[35px] h-8 text-center font-myPeydaMedium desktop:text-[20px] tablet:text-lg text-base text-primary-50 transition-colors flex-shrink-0 ${
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

