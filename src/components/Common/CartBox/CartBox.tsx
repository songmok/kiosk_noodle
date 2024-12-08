import React from "react";
import { BtnImgProps } from "../../../types/boxProps";

const WidgetBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col justify-between items-center w-full h-[160px] p-[16px] bg-white border border-[#2B2D42] rounded-[16px]">
      {children}
    </div>
  );
};

const CartImg = ({ img, imgName }: BtnImgProps) => {
  return <img className="w-[128px] h-[96px]" src={img} alt={imgName} />;
};

const QuantityControlBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-[32px] gap-[10px]">
      {children}
    </div>
  );
};

// 수량 버튼
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
});
