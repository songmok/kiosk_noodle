import { BtnImgProps } from "@/types/boxProps";

interface WidgetBoxProps {
  children: React.ReactNode;
  isEmpty?: boolean;
}

const WidgetBox = ({ children, isEmpty }: WidgetBoxProps) => {
  return (
    <div
      className={`flex flex-col ${
        isEmpty ? "justify-center" : "justify-between"
      } items-center w-[160px] h-[160px] p-[16px] bg-white border border-[#2B2D42] rounded-[16px]`}
    >
      {children}
    </div>
  );
};

const CartText = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center justify-center w-[128px] h-[96px]">
      <span className="text-fz3 text-[#d9d9d9] font-bold">{text}</span>
    </div>
  );
};

const CartImg = ({ img, imgName }: BtnImgProps) => {
  return (
    <div className="w-[128px] h-[96px] bg-gray-200 flex items-center justify-center">
      {img && (
        <img className="w-full h-full object-cover" src={img} alt={imgName} />
      )}
    </div>
  );
};

const QuantityControlBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[32px] gap-[10px]">
      {children}
    </div>
  );
};

const ControlButton = ({ img, imgName }: BtnImgProps) => {
  return (
    <div className="flex justify-center items-center w-[32px] h-[32px] bg-[#D9D9D9] rounded-full cursor-pointer">
      <img src={img} alt={imgName} />
    </div>
  );
};

const QuantityDisplay = ({ quantity }: { quantity: string }) => {
  return (
    <div className="flex justify-center items-center w-[44px] h-[29px] font-inter font-bold text-[24px] leading-[29px] text-[#2B2D42]">
      {quantity}
    </div>
  );
};

export const CartWidget = Object.assign(WidgetBox, {
  CartImg: CartImg,
  QuantityControlBox: QuantityControlBox,
  ControlButton: ControlButton,
  QuantityDisplay: QuantityDisplay,
  CartText: CartText,
});
