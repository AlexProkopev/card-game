import { useDispatch, useSelector } from "react-redux";

import dollSvg from "../../assets/doll.svg";
import bombSvg from "../../assets/bomb-big.png";
import cash from "../../assets/cash-big.svg";
import x2Svg from "../../assets/double-big.svg";
import emptySvg from "../../assets/zero-big.png";
import {
  openCell,
  startGame,
} from "../../redux/exampleReducer/gamesValues.reducer";
import { selectBoard } from "../../redux/exampleReducer/gamesValues.selectors";
import { useEffect } from "react";
import CardBackSide from "../CardBackSide/CardBackSide";

function CardsFrontSide() {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  const handleClick = (index) => {
    dispatch(openCell(index));
  };

  const getIcon = (cell) => {
    if (!cell.opened) return dollSvg;
    switch (cell.type) {
      case "cash":
        return cash;
      case "bomb":
        return bombSvg;
      case "x2":
        return x2Svg;
      case "empty":
        return emptySvg;
      default:
        return emptySvg;
    }
  };

  return (
    <ul className="mx-auto flex flex-wrap justify-center items-center gap-[4px] pl-0 w-[300px]">
      {board?.map((cell, index) => (
        <li
          key={cell.id}
          className="w-[85px] h-[85px] perspective"
          onClick={() => handleClick(index)}
        >
          <article
            className={`  relative w-full h-full duration-500 transform-style preserve-3d ${
              cell.opened ? "rotate-y-180" : ""
            }`}
          >
            <div className="absolute w-full h-full flex justify-center items-center bg-gradient-to-b from-white/10 to-white/5 rounded-xl shadow-md backface-hidden">
              <img src={dollSvg} alt="front" />
            </div>

            <CardBackSide getIcon={getIcon} cell={cell} />
          </article>
        </li>
      ))}
    </ul>
  );
}

export default CardsFrontSide;
