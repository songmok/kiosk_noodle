import { Swiper, SwiperSlide } from "swiper/react";
import x from "@/assets/image/x.svg";
import "swiper/css";
import "swiper/css/navigation";
import cartStore from "@/stores/cartStore";
import { useState } from "react";
import { useModalStore } from "@/stores/modalStore";
import ModalLayout from "../Common/ModalLayout/ModalLayout";
import OrderModal from "../Common/Modal/OrderModal/OrderModal";
import { useTotalPrice } from "@/hooks/usePrice";

const Cart = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = cartStore();
  const { setModal } = useModalStore();

  const orderConfModal = () => {
    setModal(
      <ModalLayout>
        <OrderModal />
      </ModalLayout>
    );
  };

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const totalAmount = useTotalPrice(cart);

  return (
    <div
      className={`flex flex-col items-center w-[1080px] h-[480px] fixed bottom-[140px] transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "translate-y-[410px]"
      }`}
    >
      <button
        onClick={toggleVisibility}
        className="z-40 w-[220px] h-[70px] bg-white rounded-t-[30px] text-white font-medium rounded-md"
        style={{ boxShadow: "0px -4px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <span className="text-[28px] font-semibold text-[#AA4524] noLetter">
          장바구니
        </span>
      </button>
      <div
        className={`w-full h-[410px] bg-white rounded-md py-[22px] px-[50px]`}
        style={{ boxShadow: "0px -4px 20px rgba(0, 0, 0, 0.1)" }}
      >
        <ul className="flex justify-between text-[30px] mb-[40px]">
          <li>
            <span className="mr-[95px] font-medium">주문수</span>
            <span className="text-textBrownColor">{cart.length}</span>
          </li>
          <li>
            <span className="text-textBlackColor mr-[73px]">합계금액</span>
            <span className="text-textBrownColor">
              {totalAmount.toLocaleString()}
              <b className="font-normal text-textBlackColor">원</b>
            </span>
          </li>
        </ul>
        <div className="flex mb-[25px] h-[177px]">
          <Swiper slidesPerView={4.2}>
            {cart.map((data, i) => {
              const menuAmount = data.optionPrice * data.quantity;
              return (
                <SwiperSlide key={i}>
                  <div className="flex flex-col w-[220px] h-[177px] border-[#aa4524] border-[2px] rounded-[20px] px-[20px]">
                    <button
                      className="self-end w-[14px] h-[14px] mt-[14px] mr-[5px]"
                      onClick={() => removeFromCart(data.id)}
                    >
                      <img src={x} alt="x_img" />
                    </button>
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span className="text-[24px] font-semibold">
                          {data.menuName}
                        </span>
                        {data.recommendation === "1" && (
                          <div className="w-[10px] h-[10px] bg-[#FF875F] rounded-full ml-[10px]" />
                        )}
                      </div>
                      <span className="text-[22px] text-textGrayColor font-medium">
                        {data.optionName}
                      </span>
                      <span className="text-[24px] text-textDarkLiverColor font-medium">
                        {menuAmount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between self-end px-[20px] text-[21px] text-[#461C0E] w-[128px] h-[35px] border-[1px] border-[#DADEE3] rounded-[10px]">
                      <button onClick={() => decreaseQuantity(data.id)}>
                        -
                      </button>
                      <span className="noLetter">{data.quantity}</span>
                      <button onClick={() => increaseQuantity(data.id)}>
                        +
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="flex justify-center text-white font-semibold text-[30px] gap-[30px]">
          <button
            className="flex justify-center items-center w-[210px] h-[90px] rounded-[60px] bg-[#565050]"
            onClick={clearCart}
          >
            <span className="noLetter">취소</span>
          </button>
          <button
            className="flex justify-center items-center w-[440px] h-[90px] rounded-[60px] bg-[#AA4524]"
            onClick={() => {
              orderConfModal();
            }}
          >
            <span className="noLetter">선택 완료</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
