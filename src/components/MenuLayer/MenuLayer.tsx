import { menuData } from "@/apis/data/dummyMenu";
import { MenuWidget } from "../Common/MenuBox/MenuBox";
import menuImg from "@/assets/image/menu1.png";
const MenuLayer = () => {
  //
  return (
    <>
      <div className="flex flex-row flex-wrap items-start content-start max-w-[1024px] w-full p-[64px] gap-[64px]">
        {menuData.map((menu, i) => {
          return (
            <MenuWidget key={i}>
              <MenuWidget.MenuImg img={menuImg} imgName={menu.menuName} />
              <MenuWidget.MenuName text={menu.menuName} />
              <MenuWidget.MenuPrice text={menu.price} />
            </MenuWidget>
          );
        })}
        <div className="flex flex-row justify-center items-center p-[10px] gap-[32px] w-[1024px] h-[96px]"></div>
      </div>
    </>
  );
};

export default MenuLayer;
