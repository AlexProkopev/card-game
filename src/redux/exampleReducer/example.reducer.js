import { createSlice } from "@reduxjs/toolkit";
import { fetchExample, fetchExampleById } from "./example.fetch";

const initialState = {
  example: null,
  exampleDetails: null,
  isLoading: false,
  isError: null,
};

const exampleRequest = createSlice({
  name: "exampleReducers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchExample.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.example = payload;
      
    });

    builder.addCase(fetchExample.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });

    builder.addCase(fetchExample.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });

    builder.addCase(fetchExampleById.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchExampleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.exampleDetails = payload;
    });

    builder.addCase(fetchExampleById.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = payload;
    });
  },
});

export const exampleReducer = exampleRequest.reducer;