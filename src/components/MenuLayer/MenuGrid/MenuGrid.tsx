import { menuData } from "@/apis/data/dummyMenu";
import { MenuWidget } from "@/components/Common/MenuBox/MenuBox";
import menuImg from "@/assets/image/menu1.png";
const MenuGrid = () => {
  return (
    <>
      <div className="grid grid-cols-3 max-w-[1024px] w-full p-[64px] gap-[64px]">
        {menuData.map((menu, i) => {
          return (
            <MenuWidget key={i}>
              <MenuWidget.MenuImg img={menuImg} imgName={menu.menuName} />
              <MenuWidget.MenuName text={menu.menuName} />
              <MenuWidget.MenuPrice text={menu.price} />
            </MenuWidget>
          );
        })}
      </div>
    </>
  );
};

export default MenuGrid;
