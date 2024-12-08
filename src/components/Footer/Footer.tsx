import { MainBtn } from "../Common/BtnBox/BtnBox";
import cardImg from "../../assets/image/card.png";
import CartSlider from "./CartSlider/CartSlider";

const Footer = () => {
  return (
    <div className="flex-box h-[192px]">
      <div className="flex w-full">
        {/* 장바구니 슬라이드 */}
        <CartSlider />
        <MainBtn bgColor="bg-mainColor">
          <MainBtn.BtnText text="총 결제금액" />
          <MainBtn.BtnMiddleText text="₩ 8,000" />
          <MainBtn.BtnBottomText text="전체 취소" textColor="text-white" />
        </MainBtn>
        <MainBtn bgColor="bg-mainLightColor">
          <MainBtn.BtnImg img={cardImg} imgName="카드 이미지" />
          <MainBtn.BtnBottomText text="결제하기" textColor="text-black" />
        </MainBtn>
      </div>
    </div>
  );
};

export default Footer;
