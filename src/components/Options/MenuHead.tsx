import { MenuItemType } from "@/types/itemsType";
import { Link } from "react-router-dom";

interface MenuHeadProps {
  mainId?: string;
  data: MenuItemType;
  selectedOption: MenuItemType[];
}

const MenuHead = ({ mainId, data, selectedOption }: MenuHeadProps) => {
  const isSelected = selectedOption.some(
    (option: MenuItemType) => option.name === data.name
  );

  const borderColor = isSelected ? "border-[#E53939]" : "border-[#00000033]";
  return (
    <Link to={`/mainMenu/${mainId}/options/${data.id}`}>
      <div
        className={`flex items-center justify-center w-[200px] h-[140px] bg-white rounded-[20px] box-border border-[3px] border-[#00000033] ${borderColor}`}
      >
        <span className="text-[36px] font-medium noLetter">{data.name}</span>
      </div>
    </Link>
  );
};

export default MenuHead;
