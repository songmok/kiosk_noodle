import PrevNextButton from "@/components/Footer/CartSlider/PrevNextButton/PrevNextButton";

const PageNation = () => {
  // 페이지 증감 기능
  const console = () => {};

  // 데이터 개수 배열
  const pages = [1, 2, 3];

  return (
    <div className="flex flex-row justify-center items-center p-[10px] gap-[32px] w-[1024px] h-[96px]">
      <PrevNextButton direction="prev" onClick={console} />

      {pages.map((page, index) => (
        <div
          key={page}
          className={`w-[32px] h-[32px] bg-cover bg-center cursor-pointer ${
            index === 0 ? "bg-page-on" : "bg-page-off"
          }`}
        />
      ))}

      <PrevNextButton direction="next" onClick={console} />
    </div>
  );
};

export default PageNation;
