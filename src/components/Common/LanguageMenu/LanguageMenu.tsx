import { langStore } from "@/stores/langStore";
import { LanguageBtn } from "./LanguageBtn/LanguageBtn";
import { langData } from "@/apis/data/langData";

const LanguageMenu = () => {
  const { selectedLang, setSelectedLang } = langStore();

  return (
    <div className="top-0 flex justify-center items-center w-full h-[140px] bg-white bg-opacity-50 border-b-2 border-[#242771]">
      <ul className="flex justify-between gap-[24px]">
        {langData.map((lang) => (
          <LanguageBtn
            key={lang.id}
            id={lang.id}
            language={lang.name}
            isSelected={selectedLang === lang.id}
            onClick={setSelectedLang}
          />
        ))}
      </ul>
    </div>
  );
};

export default LanguageMenu;
