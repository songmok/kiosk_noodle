interface BtnBoxProps {
  children: React.ReactNode;
  bgColor?: string;
}
interface BtnTextProps {
  text: string;
}

const BtnBox = ({ children, bgColor }: BtnBoxProps) => {
  return (
    <div
      className={`flex w-[192px] h-[192px] flex-col items-center justify-between text-center p-4 rounded-lg ${bgColor}`}
    >
      {children}
    </div>
  );
};

const BtnText = ({ text }: BtnTextProps) => {
  return <span className={`text-fz1`}>{text}</span>;
};

export const MainBtn = Object.assign(BtnBox, {
  BtnText: BtnText,
});
