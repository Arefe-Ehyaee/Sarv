interface CategoryBadgeProps{
    category: string;
  }
  

  
  
  export default function DocumentStateBadge({category}:CategoryBadgeProps) {
  
    return (
        <div className="font-myVazirRegular text-sm text-center h-[25px] rounded px-1 py-[2px] bg-primary-50 text-primary-400">
        {category}
      </div>
    )
  }
  