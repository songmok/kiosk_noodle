import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { useRef } from "react";

import minusImg from "@/assets/image/minusBtn.svg";
import plusImg from "@/assets/image/plusBtn.svg";

import "swiper/css";
import "swiper/css/navigation";

import { CartWidget } from "@/components/Common/CartBox/CartBox";
import PrevNextButton from "./PrevNextButton/PrevNextButton";
import { cartItems } from "@/apis/data/dummyMenu";

const CartSlider = () => {
  const totalSlots = 3;
  const placeholderCount = Math.max(0, totalSlots - cartItems.length);
  const sliderRef = useRef<SwiperRef>(null);

  const prevClickHandler = () => {
    sliderRef!.current!.swiper.slidePrev();
  };

  const nextClickHandler = () => {
    sliderRef!.current!.swiper.slideNext();
  };

  return (
    <div className="flex items-center justify-between max-w-[640px] w-full">
      <PrevNextButton direction="prev" onClick={prevClickHandler} />
      <Swiper
        slidesPerView={3}
        spaceBetween={16}
        centeredSlides={false}
        className="mySwiper"
        ref={sliderRef}
      >
        {cartItems.map((item) => (
          <SwiperSlide key={item.id}>
            <CartWidget>
              <CartWidget.CartImg img={item.img} imgName={item.imgName} />
              <CartWidget.QuantityControlBox>
                <CartWidget.ControlButton img={minusImg} imgName="minus" />
                <CartWidget.QuantityDisplay quantity={item.quantity} />
                <CartWidget.ControlButton img={plusImg} imgName="plus" />
              </CartWidget.QuantityControlBox>
            </CartWidget>
          </SwiperSlide>
        ))}
        {Array.from({ length: placeholderCount }, (_, index) => (
          <SwiperSlide key={`placeholder-${index}`}>
            <CartWidget isEmpty={true}>
              <CartWidget.CartText text="필동면옥" />
            </CartWidget>
          </SwiperSlide>
        ))}
      </Swiper>
      <PrevNextButton direction="next" onClick={nextClickHandler} />
    </div>
  );
};

export default CartSlider;
