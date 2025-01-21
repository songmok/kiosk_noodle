import backGround from "@/assets/image/background.png";
import Background from "@/components/Common/BackGround/BackGround";
import Instruction from "@/components/Common/HeadText/HeadText";
import PriceBox from "@/components/MainMenu/PriceBox";
import MenuUi from "@/components/MainMenu/MenuUi";
import LanguageMenu from "@/components/Common/LanguageMenu/LanguageMenu";

const MainMenu = () => {
  return (
    <Background backgroundImage={backGround}>
      <LanguageMenu />
      <div className="langMain">
        <Instruction mainText="다음 냉면의 종류를" subText="선택해주세요" />
        <MenuUi />
        <PriceBox />
      </div>
    </Background>
  );
};

export default MainMenu;
