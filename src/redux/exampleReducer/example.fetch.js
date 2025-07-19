import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'example request'


export const fetchExample = createAsyncThunk(
  "example/fetchExample",
  async (_, thunkApi) => {
    try {
      const response  = await axios.get(`${API_URL}/example`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const fetchExampleById = createAsyncThunk(
  'example/fetchExampleById',
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`${API_URL}example/${id}`);
      return response.data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);