import PrevNextButton from "@/components/Footer/CartSlider/PrevNextButton/PrevNextButton";

const PageNation = () => {
  const console = () => {};

  return (
    <div className="flex flex-row justify-center items-center p-[10px] gap-[32px] w-[1024px] h-[96px]">
      <PrevNextButton direction="prev" onClick={console} />

      <PrevNextButton direction="next" onClick={console} />
    </div>
  );
};

export default PageNation;
