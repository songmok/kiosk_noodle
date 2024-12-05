import { MainBtn } from "../../components/Common/BtnBox/BtnBox";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <MainBtn bgColor="bg-mainColor">
        <MainBtn.BtnText text="btntest"></MainBtn.BtnText>
      </MainBtn>
    </>
  );
};

export default Home;
