import { MenuWidget } from "../Common/MenuBox/MenuBox";
import menuImg from "@/assets/image/menu1.png";
const MenuLayer = () => {
  return (
    <>
      <MenuWidget>
        <MenuWidget.MenuImg img={menuImg} imgName="Product Image" />
        <MenuWidget.MenuName text="제품명" />
        <MenuWidget.MenuPrice text="₩ 50,000" />
      </MenuWidget>
    </>
  );
};

export default MenuLayer;
