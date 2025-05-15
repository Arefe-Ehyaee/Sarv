import { useState } from "react";

type Category = {
  id: string;
  label: string;
};

interface ArticlesBoxProps {
  categories?: Category[];
  onCategoryChange?: (categoryId: string) => void;
}

function ArticlesBox({ 
  categories = [
    { id: "all", label: "همه" },
    { id: "mental-health", label: "سلامت روان" },
    { id: "anxiety", label: "اضطراب" },
    { id: "depression", label: "افسردگی" },
  ], 
  onCategoryChange = () => {} 
}: ArticlesBoxProps) {
  const [activeCategory, setActiveCategory] = useState("mental-health");

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange(categoryId);
  };

  return (
    <div className="h-16 bg-primary-800 rounded-lg flex justify-center items-center px-2 w-full">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`desktop:w-[209.6px] tablet:w-[144.8px] w-[85px] py-2 desktop:h-[38px] flex items-center justify-center tablet:h-[35px] h-8 text-center font-myPeydaMedium desktop:text-[20px] tablet:text-lg text-base text-primary-50 transition-colors ${
            activeCategory === category.id 
              ? "bg-primary-500 rounded-lg" 
              : "hover:bg-primary-500 rounded-lg"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}

export default ArticlesBox;