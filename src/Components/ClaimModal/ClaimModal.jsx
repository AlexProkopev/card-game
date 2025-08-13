import { useDispatch, useSelector } from "react-redux"
import { selectOpenedCells } from "../../redux/exampleReducer/gamesValues.selectors"
import useModal from "../../hooks/useModal";
import { startGame } from "../../redux/exampleReducer/gamesValues.reducer";

function ClaimModal() {

    const {closeModal} = useModal();
    const dispatch = useDispatch();

    const openedCells = useSelector(selectOpenedCells)
    const cashCells = openedCells.filter(cell => cell.type === "cash").length;
    const bombCells = openedCells.filter(cell => cell.type === "bomb").length;
     const emptyCells = openedCells.filter(cell => cell.type === "empty").length;
      const x2Cells = openedCells.filter(cell => cell.type === "x2").length;

      const handleCloseAndStartNewGame = async () =>{
          await closeModal();
          dispatch(startGame());
     
        }
      


  return (
    <div>
        <ul>
            <li>Cash Cells: {cashCells}</li>
            <li>Bomb Cells: {bombCells}</li>
            <li>Empty Cells: {emptyCells}</li>
            <li>X2 Cells: {x2Cells}</li>
        </ul>
        <button type="button" onClick={handleCloseAndStartNewGame}>Claim Rewards</button>
    </div>
  )
}

export default ClaimModal