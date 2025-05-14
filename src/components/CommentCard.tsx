import tree from "../assets/icons/tree.svg"
import comma from "../assets/icons/101.svg"
import smile from "../assets/icons/smile.svg"

interface FeatureCardProps {
    date: string;
    text: string;
    bot: boolean;
}

function CommentCard({ date, text, bot }: FeatureCardProps) {
    return (
        <div className="bg-primary-50 p-6 border border-primary-100 rounded-3xl flex-1 w-[340px] h-[240px] flex flex-col text-center">
            <div className="flex flex-row items-center justify-between">
                <h4 className="desktop:text-sm tablet:text-sm text-xs font-myVazirMedium text-gray-400">
                    {date}
                </h4>

                <img src={comma} alt="" />
            </div>

            <p className="desktop:text-base tablet:text-base text-sm font-myVazirRegular text-gray-950 mt-5 max-w-[292px] line-clamp-3 max-h-[240px] text-justify">
                {text}
            </p>

            {bot ? (
                <div className="flex flex-row items-end mt-auto">
                    <img src={tree} alt="Sarv Bot Icon" className="w-[35px] h-[46px]" />
                    <div className="mr-2 font-myVazirRegular">
                        <p className="text-primary-300  text-sm">نظر اعضا درباره‌ی</p>
                        <p className="text-primary-400 text-base text-right">سروبات</p>
                    </div>
                </div>
            ) : (
                <div className="flex flex-row items-start gap-0 mt-auto">
                    <img src={smile} alt="Smile Icon" />

                    <div className="mr-2 font-myVazirRegular">
                        <p className="text-primary-300  text-sm">نظر اعضا درباره‌ی</p>
                        <p className="text-primary-400 text-base text-right">خانم دکتر یاوری</p>
                    </div>                </div>
            )}
        </div>
    );
}

export default CommentCard;