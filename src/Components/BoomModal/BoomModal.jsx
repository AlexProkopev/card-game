import dollSvg from "../../assets/cash.png";
import { useDispatch, useSelector } from "react-redux";
import { selectClaimBalance } from "../../redux/exampleReducer/gamesValues.selectors";
import useModal from "../../hooks/useModal";
import { isBoom, startGame } from "../../redux/exampleReducer/gamesValues.reducer";

function BoomModal() {
  const currentBalance = useSelector(selectClaimBalance);
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const handleCloseAndStartNewGame = async () =>{
    await closeModal();
    await dispatch(isBoom());
    dispatch(startGame());
  }
  return (
    <div className=" flex flex-col justify-center items-center ">
      <div className="w-[172px] relative top-[-77px] left-0 flex flex-col justify-center items-center ">
        <h2 className="text-center  text-rose-100 text-2xl font-bold font-inter leading-normal [text-shadow:_0px_1px_9px_rgb(254_44_85_/_1.00)] ">
          Danger ahead!
        </h2>

        <p
          className="w-72 text-center   text-white text-sm font-normal font-inter leading-none
          
      "
        >
          You’re on a Bomb Square! You hit a bomb and lose all rewards from this
          field...
        </p>
      </div>
      <div className="relative bottom-[-135px] left-0 flex flex-col justify-center items-center gap-2">
        <img className="w-12 h-12" src={dollSvg} alt="cash" />
        <p className="text-center text-white text-base font-bold font-inter leading-tight">
          {currentBalance}
        </p>
        <p className=" mt-[43px]  w-[220px] text-[#FFFFFFCC] text-sm font-normal font-inter leading-none">
          ...or defuse it and save your run!
        </p>

        <div className="flex gap-[8px] mt-[24px]">
          <button
          onClick={handleCloseAndStartNewGame}
            type="button"
            className=" self-stretch px-[26px] pt-[7px] pb-[7px] bg-gradient-to-b from-[#FF5858] to-orange-800 rounded-lg shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.20)] shadow-[inset_0px_-1px_4px_0px_rgba(255,255,255,0.10)] inline-flex justify-center items-center text-white-80%/80 text-lg text-white font-extrabold font-inter leading-none [text-shadow:_0px_1px_1px_rgb(0_0_0_/_0.20)]"
          >
            Take a hit
          </button>
          <button
            type="button"
            className="  px-[25px] pt-[15px] pb-[15px] bg-gradient-to-b from-purple-500 to-violet-700 rounded-md shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.50)] inline-flex justify-center items-center text-white-80%/80 text-lg  text-white font-extrabold font-inter leading-none [text-shadow:_0px_1px_1px_rgb(0_0_0_/_0.20)]"
          >
            Defuse for {currentBalance}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BoomModal;
