import Logo from "@/assets/image/logo.svg";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between h-[128px] p-4 bg-mainColor text-white">
      <img src={Logo} alt="Logo" className="w-[96px] h-[96px] mr-2" />
      <span className="text-fz1 pr-10">필동면옥</span>
      <span className="text-fz1">09:16:32</span>
    </header>
  );
};

export default Header;
