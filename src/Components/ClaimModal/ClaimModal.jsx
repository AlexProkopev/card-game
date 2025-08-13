import { useDispatch, useSelector } from "react-redux";
import { selectOpenedCells } from "../../redux/exampleReducer/gamesValues.selectors";
import useModal from "../../hooks/useModal";
import { startGame } from "../../redux/exampleReducer/gamesValues.reducer";
import smallDollSvg from "../../assets/smal-doll.svg";
import doubleSvg from "../../assets/double2.svg";
import bombSvg from "../../assets/bomb.svg";

function ClaimModal() {
  const { closeModal } = useModal();
  const dispatch = useDispatch();

  const openedCells = useSelector(selectOpenedCells);
  const cashCells = openedCells.filter((cell) => cell.type === "cash").length;
  const bombCells = openedCells.filter((cell) => cell.type === "bomb").length;
  const emptyCells = openedCells.filter((cell) => cell.type === "empty").length;
  const x2Cells = openedCells.filter((cell) => cell.type === "x2").length;

  const handleCloseAndStartNewGame = async () => {
    await closeModal();
    dispatch(startGame());
  };

  return (
    <div className="rounded-2xl p-6 max-w-sm w-full mx-auto">
      <ul className="space-y-3 mb-6">
        <li className="flex justify-center items-center gap-2">
          <img src={smallDollSvg} alt="Small Doll" />
          <span className="text-green-400 font-bold">{cashCells}</span>
        </li>
        <li className="flex justify-center items-center gap-2">
          <img src={bombSvg} alt="Bomb" />
          <span className="text-red-400 font-bold">{bombCells}</span>
        </li>
        <li className="flex justify-center items-center gap-2">
          <p className="font-black text-yellow-400 text-3xl font-inter leading-tight tracking-tight select-none">
            0
          </p>
          <span className="text-gray-400 font-bold">{emptyCells}</span>
        </li>
        <li className="flex justify-center items-center gap-2 ">
          <img src={doubleSvg} alt="Double" />
          <span className="text-yellow-400 font-bold">{x2Cells}</span>
        </li>
      </ul>

      <button
        type="button"
        onClick={handleCloseAndStartNewGame}
        className=" bg-gradient-to-r px-[20px] py-[10px]  font-bold text-lg text-white shadow-md transform hover:scale-105 transition-all"
      >
        Claim Rewards
      </button>
    </div>
  );
}

export default ClaimModal;
