import CheckIcon from "../SvgIcon/CheckIcon.svg";

export const ReviewedTag = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={CheckIcon} alt="reviewed" className="h-3 w-3" />
      <p className="ml-2 text-xs font-normal text-gray-700">Reviewed</p>
    </div>
  );
};
