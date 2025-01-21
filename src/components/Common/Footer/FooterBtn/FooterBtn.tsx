interface FooterButtonType {
  icon: string;
  label: string;
  backNav?: any;
}

export const FooterButton = ({ icon, label, backNav }: FooterButtonType) => {
  return (
    <button className="flex" onClick={backNav}>
      <img src={icon} alt={label} className="mr-[3.5px]" />
      <span className="text-[34px] text-white">{label}</span>
    </button>
  );
};
