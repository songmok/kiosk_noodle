import MenuLayer from "@/components/MenuLayer/MenuLayer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Home = () => {
  return (
    <>
      <div className="relative w-[1024px] h-[1440px] fullscreen">
        <Header />
        <MenuLayer />
        <Footer />
      </div>
    </>
  );
};

export default Home;
