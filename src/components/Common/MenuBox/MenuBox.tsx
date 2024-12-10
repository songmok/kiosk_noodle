import { BtnImgProps } from "@/types/boxProps";

const MenuBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={`flex-center justify-between flex-col max-w-[256px] w-full h-[256px] p-[16px] bg-white border border-[#2B2D42] rounded-[16px]`}
    >
      {children}
    </div>
  );
};

const MenuName = ({ text }: { text: string }) => {
  return <span className="text-[#2B2D42] font-bold text-fz3">{text}</span>;
};
const MenuPrice = ({ text }: { text: string }) => {
  return <span className="text-[#2B2D42] font-bold text-fz3">{text}</span>;
};

const MenuImg = ({ img, imgName }: BtnImgProps) => {
  return (
    <div
      className="max-w-[170px] w-full h-[128px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      aria-label={imgName}
    ></div>
  );
};

export const MenuWidget = Object.assign(MenuBox, {
  MenuName: MenuName,
  MenuPrice: MenuPrice,
  MenuImg: MenuImg,
});
