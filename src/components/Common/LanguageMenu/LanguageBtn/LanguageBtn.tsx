export const LanguageBtn = ({
  id,
  language,
  isSelected,
  onClick,
}: {
  id: string;
  language: string;
  isSelected: boolean;
  onClick: (id: string) => void;
}) => {
  return (
    <li
      onClick={() => onClick(id)}
      className={`flex items-center justify-center w-[186px] h-[66px] rounded-[20px] cursor-pointer ${
        isSelected ? "bg-blueColor text-white" : "bg-white text-textBlackColor"
      } shadow-md`}
    >
      <span className="text-[20px] font-medium tracking-[-0.025em] text-center">
        {language}
      </span>
    </li>
  );
};
