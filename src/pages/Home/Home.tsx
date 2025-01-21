import { Link } from "react-router-dom";
import backGround from "@/assets/image/background.png";
import Background from "@/components/Common/BackGround/BackGround";
import { MainMenuData } from "@/apis/data/dummyMainMenu";
import LanguageMenu from "@/components/Common/LanguageMenu/LanguageMenu";
import Instruction from "@/components/Common/HeadText/HeadText";
import { MainCategoryWidget } from "@/components/Home/CategoryBox";

const Home = () => {
  return (
    <Background backgroundImage={backGround}>
      <LanguageMenu />
      <div className="langMain">
        <Instruction
          mainText="화면을 터치하여"
          subText="메뉴를 선택해 주세요"
        />
        <div className="w-[1080px] flex flex-row justify-center gap-[60px] mx-[70px]">
          {MainMenuData.map((data) => (
            <Link
              key={data.id}
              to={`/mainMenu/${data.id}`}
              className="block w-[440px]"
            >
              <MainCategoryWidget>
                <MainCategoryWidget.Img img={data.img} imgName={data.name} />
                <MainCategoryWidget.Name text={data.name} />
              </MainCategoryWidget>
            </Link>
          ))}
        </div>
      </div>
    </Background>
  );
};

export default Home;
