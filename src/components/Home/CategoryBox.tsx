import { BtnImgType } from "@/types/boxType";

const CategoryBox = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className="flex flex-col items-center w-[440px] h-[549px] bg-white border-[2px] border-[#F4EFE9] rounded-[30px] cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Name = ({ text }: { text: string }) => {
  return <span className="text-[#111111] font-medium text-[60px]">{text}</span>;
};

const Img = ({ img, imgName }: BtnImgType) => {
  return (
    <div
      className="w-[330px] h-[260px] mt-[90px] mb-[80px] bg-cover bg-center rounded-[20px]"
      style={{ backgroundImage: `url(${img})` }}
      aria-label={imgName}
    ></div>
  );
};

export const MainCategoryWidget = Object.assign(CategoryBox, {
  Name: Name,
  Img: Img,
});
