import { priceData } from "@/apis/data/dummyMenu";

const PriceBox = () => {
  return (
    <div className="flex items-center w-[746px] h-[346px] bg-white/40 rounded-[30px] relative top-[158px]">
      <table className="text-[28px] text-black text-right whitespace-nowrap">
        <thead>
          <tr>
            <th></th>
            <th className="px-[80px] py-[10px] font-semibold text-center">
              <span>보통</span>
            </th>
            <th className="px-[80px] py-[10px] font-semibold text-center">
              <span>곱빼기</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {priceData.map((data, idx) => (
            <tr key={idx}>
              <td className="block ml-[143px] pr-[50px] py-[10px]">
                <span>{data.menu}</span>
              </td>
              <td className="px-[80px] py-[10px]">
                <span>{data.name}</span>
              </td>
              <td
                className={`px-[80px] py-[10px] relative ${
                  data.menu === "온면"
                    ? "after:content-['(원)'] after:text-[18px] after:absolute after:bottom-[15px] after:ml-[5px]"
                    : ""
                }`}
              >
                <span>{data.price}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceBox;
