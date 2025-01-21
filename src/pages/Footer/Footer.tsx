import back from "@/assets/image/footer_back_arrow.svg";
import bell from "@/assets/image/bell.png";
import { FooterButton } from "@/components/Common/Footer/FooterBtn/FooterBtn";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const backNav = () => {
    navigate(-1);
  };

  return (
    <div className="fixed flex items-center justify-between w-[1080px] bottom-0 bg-black h-[140px] px-[40px]">
      <FooterButton icon={back} label="이전" backNav={backNav} />
      <FooterButton icon={bell} label="직원호출" />
    </div>
  );
};

export default Footer;
