interface optionsSelectedLableType {
  id: string;
  name: string;
  description: string;
  mainCategoryId: string;
  menus: number[];
  img: string;
}

const OptionsSelectLabel = ({
  selectedItem,
}: {
  selectedItem: optionsSelectedLableType;
}) => {
  return (
    <div className="flex items-center w-full h-[220px] bg-white mt-[29px]">
      <div className="flex justify-center items-center w-[300px] h-[200px] bg-[#262323] rounded-r-[20px]">
        <span className="text-[42px] text-white font-bold">선택메뉴</span>
      </div>
      <div className="flex ml-[52px]">
        <img
          src={selectedItem.img}
          alt={selectedItem.name}
          className="w-[160px] h-[160px] mr-[75px]"
        />
        <div className="flex flex-col justify-center">
          <span className="text-[42px] font-semibold">{selectedItem.name}</span>
          <span className="text-[24px] font-normal text-textBlackColor">
            {selectedItem.description}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OptionsSelectLabel;
