import Logo from "@/assets/image/logo.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 text-white #005F73">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-8 h-8 mr-2" />
        <span className="font-medium">필동면옥</span>
      </div>
      <span className="font-medium">09:16:32</span>
    </header>
  );
};

export default Header;
