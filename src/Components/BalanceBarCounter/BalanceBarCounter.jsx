import smallDollSvg from "../../assets/smal-doll.svg";
import doubleSvg from "../../assets/double2.svg";
import bombSvg from "../../assets/bomb.svg";
import stopSvg from "../../assets/stop.svg";
import { useSelector } from "react-redux";
import { selectOpenedCells } from "../../redux/exampleReducer/gamesValues.selectors";
function BalanceBarCounter() {
const balanceOpenedCells = useSelector(selectOpenedCells)
  return (
    <ul className="flex justify-center items-center pl-0 gap-[15px] mt-[10px] w-[280px] mx-auto">
      <li className="flex justify-center items-center gap-[4px]">
        <img src={smallDollSvg} alt="Small Doll" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{balanceOpenedCells.filter(cell => cell.type === "cash").length}</p>
      </li>
       <li className="flex justify-center items-center gap-1">
        <img src={doubleSvg} alt="Double"/>
        <p className=" text-white text-base font-bold font-inter leading-tight">{balanceOpenedCells.filter(cell => cell.type === "x2").length}</p>
      </li>
      <li className="flex justify-center items-center gap-1">
       <p
   className="font-black text-yellow-400 text-3xl font-inter leading-tight tracking-tight select-none"
>
  0
</p>
        <p className=" text-white text-base font-bold font-inter leading-tight"> {balanceOpenedCells.filter(cell => cell.type === "empty").length}</p>
      </li>
      <li className="flex justify-center items-center gap-1">
        <img src={bombSvg} alt="Bomb" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{balanceOpenedCells.filter(cell => cell.type === "bomb").length}</p>
      </li>
      <li className="flex justify-center items-center gap-1"    >
        <img src={stopSvg} alt="Stop" />
        <p className=" text-white text-base font-bold font-inter leading-tight">{0}</p>
      </li>
    </ul>
  );
}

export default BalanceBarCounter;
