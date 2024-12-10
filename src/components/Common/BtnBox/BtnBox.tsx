import { BtnImgProps } from "../../../types/boxProps";

interface BtnBoxProps {
  children: React.ReactNode;
  bgColor?: string;
}
interface BtnTextProps {
  text: string;
  textColor?: string;
}

const BtnBox = ({ children, bgColor }: BtnBoxProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-between w-[192px] h-[192px] p-[1.6rem] ${bgColor} cursor-pointer`}
    >
      {children}
    </div>
  );
};

const BtnTopText = ({ text, textColor }: BtnTextProps) => {
  return (
    <span className={`text-fz3 self-end font-bold ${textColor}`}>{text}</span>
  );
};

const BtnMiddleText = ({ text, textColor }: BtnTextProps) => {
  return (
    <span className={`text-fz2 self-end font-bold ${textColor}`}>{text}</span>
  );
};
const BtnBottomText = ({ text, textColor }: BtnTextProps) => {
  return <span className={`text-fz3 font-bold ${textColor}`}>{text}</span>;
};

const BtnImg = ({ img, imgName }: BtnImgProps) => {
  return (
    <div className="w-[96px] h-[96px]">
      <img src={img} alt={imgName} />
    </div>
  );
};

export const MainBtn = Object.assign(BtnBox, {
  BtnText: BtnTopText,
  BtnMiddleText: BtnMiddleText,
  BtnBottomText: BtnBottomText,
  BtnImg: BtnImg,
});
