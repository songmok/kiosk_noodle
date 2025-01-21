import { langData } from "@/apis/data/langData";
import { langStore } from "@/stores/langStore";

const LanguageHead = () => {
  const { selectedLang } = langStore();
  const langFindData = langData.find((item) => item.id === selectedLang);
  const langName = langFindData?.name;

  return (
    <div className="flex items-center w-full h-[100px] px-[40px] border-b-2 border-black bg-[#FFFFFF80]">
      <button className="w-[140px] h-[45px]  bg-blueColor rounded-[45px]">
        <span className="text-[18px] font-medium text-white">{langName}</span>
      </button>
    </div>
  );
};

export default LanguageHead;
