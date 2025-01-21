import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
  backgroundImage?: string;
}

const Background = ({ children, backgroundImage }: BackgroundProps) => {
  return (
    <div className="relative">
      <div
        className="fixed inset-0 w-[9999px] h-[9999px] -z-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {children}
    </div>
  );
};

export const OptionBackground = ({ children }: BackgroundProps) => {
  return (
    <div className="relative">
      <div className="fixed inset-0 w-[9999px] h-[9999px] -z-10 bg-bgColor" />
      {children}
    </div>
  );
};

export default Background;
