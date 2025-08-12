import { configureStore } from "@reduxjs/toolkit";
import {gamesValuesReducer } from "./exampleReducer/gamesValues.reducer";


export const store = configureStore({
  reducer: {
     gamesValuesStore: gamesValuesReducer,
  },
});

