import React from "react";
import { BtnImgType } from "@/types/boxType";

const Box = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center w-[320px] h-[380px] shadow-[0px_0px_16px_rgba(104,109,224,0.2)] bg-white border-2 border-[#F4EFE9] rounded-[30px] relative cursor-pointer">
      {children}
    </div>
  );
};

const Img = ({ img, imgName }: BtnImgType) => {
  return (
    <div
      className="w-[200px] h-[160px] mt-[60px] mb-[42px] rounded-[10px] bg-cover bg-center"
      style={{ backgroundImage: `url(${img})` }}
      aria-label={imgName}
    />
  );
};

const Name = ({ text }: { text: string }) => {
  return (
    <span className="font-semibold text-[38px] leading-[40px] text-[#111111]">
      {text}
    </span>
  );
};

const Temperature = ({ text }: { text: string }) => {
  return (
    <span className="font-normal text-[24px] leading-[30px] text-[#767676] tracking-[0]">
      {text}
    </span>
  );
};

export const MenuBox = Object.assign(Box, {
  Img: Img,
  Name: Name,
  Temperature: Temperature,
});
