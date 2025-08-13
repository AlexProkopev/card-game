import React from "react";
import dollSvg from '../../assets/cash.png'
import { useSelector } from "react-redux";
import { selectClaimBalance } from "../../redux/exampleReducer/gamesValues.selectors";

function BoomModal() {
  const currentBalance = useSelector(selectClaimBalance)
  return (
    <div className="relative">
      <h2 className="text-center w-[172px] text-rose-100 text-2xl font-bold font-inter leading-normal [text-shadow:_0px_1px_9px_rgb(254_44_85_/_1.00)] absolute  top-[-120px] left-[50%] translate-x-[-50%] ">
        Danger ahead!
      </h2>

      <p
        className="w-72 text-center   text-white text-sm font-normal font-inter leading-none
        absolute  top-[-80px] left-[50%] translate-x-[-50%]
      "
      >
        You’re on a Bomb Square! You hit a bomb and lose all rewards from this
        field...
      </p>
     <div className="relative top-[115px] left-[50%] translate-x-[-50%]">
       <img  className="w-12 h-12" src={dollSvg} alt="cash" />
      <p className="text-center text-white text-base font-bold font-inter leading-tight">{currentBalance}</p>
     </div>

     <p className=" absolute bottom-[-85px] left-[50%] translate-x-[-50%] w-[220px] text-white text-sm font-normal font-inter leading-none">...or defuse it and save your run!
</p>
    </div>
  );
}

export default BoomModal;
