import cartStore, { CartItem } from "@/stores/cartStore";
import plusBtn from "@/assets/image/plus.svg";
import minusBtn from "@/assets/image/minus.svg";
import deleteBtn from "@/assets/image/delete.svg";
import { useTotalCount, useTotalPrice } from "@/hooks/usePrice";

const OrderModal = () => {
  const {
    cart: cartItem,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = cartStore();

  const totalAmount = useTotalPrice(cartItem);
  const totalCount = useTotalCount(cartItem);

  return (
    <div className="flex flex-col items-center mt-[112px]">
      <div className="flex flex-col items-center mb-[40px]">
        <h3 className="text-textBlackColor text-[48px] font-medium letterOn">
          주문 확인
        </h3>
        <span className="text-[#2B2B2B] text-[32px] letterOn">
          주문내역을 확인해 주세요
        </span>
      </div>
      <div className="bg-textBlackColor w-[730px] h-[4px] mb-[10px]" />
      <ul className="w-[731px] h-[820px] overflow-y-auto mb-[30px]">
        {cartItem.map((data: CartItem) => {
          const menuAmount = data.optionPrice * data.quantity;
          return (
            <li key={data.id} className="grid grid-cols-3 w-full h-[90px]">
              <div className="flex flex-col justify-center w-[200px]">
                <div className="flex items-center">
                  <span className="text-textBlackColor text-[28px] noLetter">
                    {data.menuName}
                  </span>
                  {data.recommendation === "1" && (
                    <div className="w-[10px] h-[10px] bg-[#FF875F] rounded-full ml-[11px]" />
                  )}
                </div>
                <span className="text-textGray2Color text-[20px]">
                  {data.optionName}
                </span>
              </div>
              <div className="flex items-center justify-around w-[150px] justify-self-end mr-[40px]">
                <button
                  className="w-[32px] h-[32px]"
                  onClick={() => decreaseQuantity(data.id)}
                >
                  <img src={minusBtn} alt="minus_img" />
                </button>
                <span className="text-textBlackColor text-[24px] font-medium noLetter">
                  {data.quantity}
                </span>
                <button
                  className="w-[32px] h-[32px]"
                  onClick={() => increaseQuantity(data.id)}
                >
                  <img src={plusBtn} alt="plus_img" />
                </button>
              </div>
              <div className="flex items-center justify-end pr-[28px]">
                <span className="text-textBlackColor text-[26px] mr-[18px] noLetter">
                  {menuAmount.toLocaleString()}
                </span>
                <button
                  className="w-[32px] h-[32px]"
                  onClick={() => removeFromCart(data.id)}
                >
                  <img src={deleteBtn} alt="delete_img" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="grid grid-cols-3 items-center w-[730px] h-[93px] px-[20px] bg-[#edecf3] mb-[30px]">
        <span className="text-[28px] noLetter">총 결제 금액</span>
        <span className="text-[26px] justify-self-end noLetter">
          {totalCount}개
        </span>
        <span className="text-[28px] text-[#DA2323] justify-self-end noLetter">
          <b className="font-normal pr-[15px]">￦</b>
          {totalAmount.toLocaleString()}
        </span>
      </div>
      <button className="flex justify-center items-center w-[440px] h-[90px] rounded-[50px] bg-[#aa4524]">
        <span className="text-[30px] font-semibold text-white noLetter">
          결제하기
        </span>
      </button>
    </div>
  );
};

export default OrderModal;
