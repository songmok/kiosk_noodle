import React from "react";
import arrowImage from "@/assets/image/arrow.svg";

interface PrevNextButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const PrevNextButton: React.FC<PrevNextButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <div className="p-[16px]">
      <button onClick={onClick}>
        <img
          src={arrowImage}
          alt={direction === "prev" ? "이전" : "다음"}
          className="w-[32px] h-[32px] max-w-max"
          style={{
            transform: direction === "prev" ? "none" : "rotate(180deg)",
          }}
        />
      </button>
    </div>
  );
};

export default PrevNextButton;
