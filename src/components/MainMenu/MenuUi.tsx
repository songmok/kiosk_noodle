import { categories } from "@/apis/data/dummyColdNoodles";
import { Link } from "react-router-dom";
import { MenuBox } from "./MenuBox";

const MenuUi = () => {
  return (
    <ul className="flex flex-row justify-center gap-[20px]">
      {categories.map((data) => (
        <li key={data.id}>
          <Link to={`options/${data.id}`}>
            <MenuBox>
              <MenuBox.Img img={data.imgMain} imgName="냉면" />
              <MenuBox.Name text={data.name} />
              <MenuBox.Temperature text={data.description} />
            </MenuBox>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuUi;
