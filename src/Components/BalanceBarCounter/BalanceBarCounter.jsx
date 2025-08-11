import smallDollSvg from "../../assets/smal-doll.svg";
import doubleSvg from "../../assets/double2.svg";
import zeroSvg from "../../assets/zero.svg";
import bombSvg from "../../assets/bomb.svg";
import stopSvg from "../../assets/stop.svg";
function BalanceBarCounter() {
  return (
    <ul className="flex justify-center items-center pl-0 gap-[24px] mt-[31px] w-[316px] mx-auto">
      <li className="flex justify-center items-center gap-[4px]">
        <img src={smallDollSvg} alt="Small Doll" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
       <li className="flex justify-center items-center gap-1">
        <img src={doubleSvg} alt="Double"/>
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
      <li className="flex justify-center items-center gap-1">
       <p
   className="font-black text-yellow-400 text-3xl font-inter leading-tight tracking-tight select-none"
>
  0
</p>
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
      <li className="flex justify-center items-center gap-1">
        <img src={bombSvg} alt="Bomb" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
      <li className="flex justify-center items-center gap-1"    >
        <img src={stopSvg} alt="Stop" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
    </ul>
  );
}

export default BalanceBarCounter;
