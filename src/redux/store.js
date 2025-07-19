import { configureStore } from "@reduxjs/toolkit";
import { exampleReducer } from "./exampleReducer/example.reducer";


export const store = configureStore({
  reducer: {
     exampleStore: exampleReducer,
  },
});

