import { useDispatch, useSelector } from "react-redux";
import {
  claim,
  startGame,
} from "../../redux/exampleReducer/gamesValues.reducer";
import {
  selectBalance,
  selectGameOver,
} from "../../redux/exampleReducer/gamesValues.selectors";

function ClaimBtn() {
  const dispatch = useDispatch();
  const isGameOver = useSelector(selectGameOver);
  const balance = useSelector(selectBalance);
  const handleClaim = () => {
    if (isGameOver) return;
    dispatch(claim());
  };
  const handleNewGame = () => {
    dispatch(startGame());
  };
  return (
    <div>
      <button
        onClick={handleClaim}
        className={`
  pl-[100px] pr-[100px] pt-[10px] pb-[10px]
  rounded-lg
  border border-dashed border-[rgba(255,255,255,0.2)]
  flex justify-center items-center gap-1
   text-lg font-extrabold text-inter
  mx-auto mt-[10px]
  
  ${
    balance > 0 && !isGameOver
      ? "bg-gradient-to-b from-lime-500 to-lime-700 text-white"
      : "bg-white/10 text-[rgba(255,255,255,0.4)]"
  }
`}
      >
        Claim
      </button>
      <button onClick={handleNewGame}>Start New</button>
    </div>
  );
}

export default ClaimBtn;
