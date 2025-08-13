import { useDispatch, useSelector } from "react-redux";

import dollSvg from "../../assets/doll.svg";
import bombSvg from "../../assets/bomb-big.svg";
import cash from "../../assets/cash-big.svg";
import x2Svg from "../../assets/double-big.svg";
import emptySvg from "../../assets/zero-big.png";
import {
  openCell,
  startGame,
} from "../../redux/exampleReducer/gamesValues.reducer";
import { selectBoard } from "../../redux/exampleReducer/gamesValues.selectors";
import { useEffect } from "react";

function CardsFrontSide() {
  const dispatch = useDispatch();
  const board = useSelector(selectBoard);

  useEffect(() => {
    dispatch(startGame());
  }, [dispatch]);

  const styleDouble =
    "w-[85px] h-[85px] relative bg-gradient-to-b from-white/10 to-white/5 rounded-xl shadow-[0px_4px_8px_0px_rgba(24,26,32,0.30)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.20)] backdrop-blur-blur flex justify-center items-center mx-auto";

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
    <ul className="mx-auto flex flex-wrap gap-[4px] pl-0 w-[300px]">
      {board?.map((cell, index) => (
        <li
          key={cell.id}
          className={styleDouble}
          onClick={() => handleClick(index)}
        >
          <img src={getIcon(cell)} alt={cell.type} />
          {cell.opened && cell.type === "cash" && (
            <span className="absolute bottom-1 text-xs text-white">
              +{cell.value}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CardsFrontSide;
