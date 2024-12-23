import { BtnImgProps } from "@/types/boxProps";

const MenuBox = ({
  children,
  isEmpty,
}: {
  children: React.ReactNode;
  isEmpty?: boolean;
}) => {
  return (
    <div
      className={`flex items-center ${
        isEmpty ? "justify-center" : "justify-between"
      } flex-col max-w-[256px] w-full h-[256px] p-[16px] bg-white border border-[#2B2D42] rounded-[16px]`}
    >
      {children}
    </div>
  );
};

const MenuName = ({ text }: { text: string }) => {
  return <span className="text-[#2B2D42] font-bold text-fz3 pr-4">{text}</span>;
};

const MenuOption = ({ text }: { text: string }) => {
  return (
    <span className="text-[#2B2D42] font-medium text-[1.6rem]">{text}</span>
  );
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

const MenuText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center w-[128px] h-[96px]">
      <span className="text-fz3 text-[#d9d9d9] font-bold">{text}</span>
    </div>
  );
};

export const MenuWidget = Object.assign(MenuBox, {
  MenuName: MenuName,
  MenuOption: MenuOption,
  MenuPrice: MenuPrice,
  MenuImg: MenuImg,
  MenuText: MenuText,
});
