import { menuData } from "@/apis/data/dummyMenu";
import { MenuWidget } from "@/components/Common/MenuBox/MenuBox";

const MenuGrid = () => {
  const placeholderCount = 3;
  return (
    <>
      <div className="grid grid-cols-3 max-w-[1024px] w-full p-[64px] gap-[64px]">
        {menuData.map((menu, i) => {
          return (
            <MenuWidget key={i}>
              <MenuWidget.MenuImg img={menu.img} imgName={menu.menuName} />
              <div>
                <MenuWidget.MenuName text={menu.menuName} />
                <MenuWidget.MenuOption text={menu.option} />
              </div>
              <MenuWidget.MenuPrice text={menu.price} />
            </MenuWidget>
          );
        })}
        {Array.from({ length: placeholderCount }, (_, index) => (
          <MenuWidget key={`placeholder-${index}`} isEmpty={true}>
            <MenuWidget.MenuText text="필동면옥"></MenuWidget.MenuText>
          </MenuWidget>
        ))}
      </div>
    </>
  );
};

export default MenuGrid;
