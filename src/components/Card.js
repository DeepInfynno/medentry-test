import SvgIcon from "../SvgIcon/QuestionIcon.svg";
import { ReviewedTag } from "./ReviewedTag";
export const Card = ({ keyIndex, number, isReviewed, title }) => {
  return (
    <div className="flex py-3 border-b border-gray-200 gap-6 items-start justify-center">
      <div>
        <img src={SvgIcon} alt="Question-icon" className="h-3 w-3 mt-1" />
      </div>
      <div className="flex flex-grow items-center justify-between">
        <div className="flex flex-col ">
          <h6 className="text-xs text-black font-normal">
            Question {number || keyIndex + 1}
          </h6>
          <p className="text-xs font-normal text-gray-400">{title}</p>
        </div>
        {isReviewed ? (
          <div className="flex items-center justify-center">
            <ReviewedTag />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
