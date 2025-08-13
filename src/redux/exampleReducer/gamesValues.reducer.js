import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  board: [],
  balance: 0,
  claimBalance: 0,
  multiplier: 1,
  gameOver: false,
  openedCells: [],
  bombIsOpen: false,
  toClaim: false
};

const shuffle = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const gamesValues = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame(state) {
      const cells = [
        { id: 0, type: "bomb", opened: false },
        { id: 1, type: "x2", opened: false },
        { id: 2, type: "empty", opened: false },
        { id: 3, type: "empty", opened: false },
        { id: 4, type: "cash", value: 50, opened: false },
        { id: 5, type: "cash", value: 100, opened: false },
        { id: 6, type: "cash", value: 150, opened: false },
        { id: 7, type: "cash", value: 200, opened: false },
        { id: 8, type: "cash", value: 300, opened: false },
      ];
      state.board = shuffle(cells);
      state.balance = 0;
      state.multiplier = 1;
      state.gameOver = false;
      state.openedCells = [];
      state.bombIsOpen = false;
      state.toClaim = false
    },
    openCell(state, action) {
      const index = action.payload;
      const cell = state.board[index];
      if (cell.opened || state.gameOver) return;

      cell.opened = true;
      state.openedCells.push({ ...cell });

      switch (cell.type) {
        case "cash":
          state.balance += (cell.value ?? 0) * state.multiplier;
          break;
        case "x2":
          state.multiplier *= 2;
          state.balance *= 2;
          break;
        case "bomb":
          state.gameOver = true;
          state.board.forEach((c) => (c.opened = true));
          state.bombIsOpen = true;
          break;
        case "empty":
          break;
        default:
          break;
      }
    },
    claim(state) {
      state.gameOver = true;
      state.board.forEach((c) => (c.opened = true));
      state.claimBalance += state.balance;
      state.toClaim = true;
    },
    isBoom(state){
      state.claimBalance = 0;
    }
  },
});
export const { startGame, openCell, claim, isBoom } = gamesValues.actions;

export const gamesValuesReducer = gamesValues.reducer;
