import React from "react";
import arrowImage from "@/assets/image/arrow.png";

interface PrevNextButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
}

const PrevNextButton: React.FC<PrevNextButtonProps> = ({
  direction,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="w-[32px] h-[32px]">
      <img
        src={arrowImage}
        alt={direction === "prev" ? "이전" : "다음"}
        style={{
          transform: direction === "prev" ? "rotate(180deg)" : "none",
        }}
      />
    </button>
  );
};

export default PrevNextButton;
