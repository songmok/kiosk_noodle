import cartStore from "@/stores/cartStore";

import { menuType, optionsType } from "@/types/itemsType";

const OptionsMenu = ({ selectedMenus }: { selectedMenus: menuType[] }) => {
  const { cart, addToCart } = cartStore();

  return (
    <div className="w-full mt-[47px]">
      {selectedMenus.map((menu: menuType, i: number) => {
        return (
          <div key={i}>
            <div className="flex flex-col gap-[30px] pl-[90px]">
              <div className="flex items-center">
                <span className="text-[38px] font-medium">{menu.name}</span>
                {menu.recommendation === "1" && (
                  <div className="w-[18px] h-[18px] bg-[#FF875F] rounded-full ml-[10px]" />
                )}
              </div>
              <div className="flex px-[60px] gap-[20px]">
                {menu.options.map((option: optionsType, j: number) => {
                  const isOptionInCart = cart.some(
                    (item) => item.optionId === option.optionId
                  );
                  return (
                    <div
                      key={j}
                      className={`flex flex-col items-center justify-center w-[200px] h-[178px] bg-white gap-[20px] rounded-[10px] border-[3px] ${
                        isOptionInCart ? "border-[#E53939]" : "border-[#E1E1E3]"
                      }`}
                      onClick={() =>
                        addToCart(
                          menu.menuId,
                          menu.name,
                          menu.categoryId,
                          option.name,
                          option.price,
                          1,
                          option.optionId,
                          menu.recommendation
                        )
                      }
                    >
                      <span className="text-[32px] font-medium noLetter">
                        {option.name}
                      </span>
                      <span className="text-[30px] font-semibold text-textBrownColor">
                        {option.price.toLocaleString()}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            {i < selectedMenus.length - 1 && (
              <div className="w-full border-[1px] border-[#DCE2E6] mt-[34px] mb-[33px]" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default OptionsMenu;
