import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const listBanksSlice = createSlice({
  name: "bancos",
  initialState: {
    results: [],
  },
  reducers: {
    resultado: (state, action) => {
      state.results = action.payload;
    },
  },
});

export const { resultado } = listBanksSlice.actions;

export default listBanksSlice.reducer;

export const fetchAllBanks = (dispatch: any) => {
  axios
    .get(`https://dev.obtenmas.com/catom/api/challenge/banks`)
    .then((response: { data: [] }) => {
      dispatch(resultado(response.data));
    })
    .catch((error: string) => console.log(error, "error"));
};
