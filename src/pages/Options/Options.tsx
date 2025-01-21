import { categories, cold_noodles } from "@/apis/data/dummyColdNoodles";
import { OptionBackground } from "@/components/Common/BackGround/BackGround";
import LanguageHead from "@/components/Options/LanguageHead";
import MenuHead from "@/components/Options/MenuHead";
import { OptionsHead } from "@/components/Options/OptionsHead";
import OptionsSelectLabel from "@/components/Options/OptionsSelectLabel";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import Cart from "@/components/Options/Cart";
import OptionsMenu from "@/components/Options/OptionsMenu";

const Options = () => {
  const { mainId, optionsId } = useParams<{
    mainId: string;
    optionsId: string;
  }>();

  const selectedMenus = cold_noodles.filter(
    (menu) => menu?.categoryId === optionsId
  );

  const selectedOption = categories.filter(
    (option) => option?.id === optionsId
  );

  const selectedItem = selectedOption[0];

  return (
    <OptionBackground>
      <LanguageHead />
      <div className="langOption">
        <OptionsHead text="다른 메뉴 선택하기" />
        <div className="flex justify-center gap-[50px] mt-[46px]">
          {categories.map((data, i) => {
            return (
              <MenuHead
                data={data}
                selectedOption={selectedOption}
                mainId={mainId}
                key={i}
              />
            );
          })}
        </div>
        <OptionsSelectLabel selectedItem={selectedItem} />
        <OptionsMenu selectedMenus={selectedMenus} />
        <Cart />
      </div>
    </OptionBackground>
  );
};

export default Options;
