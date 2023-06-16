import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const searchSlice = createSlice({
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

export const { resultado } = searchSlice.actions;

export default searchSlice.reducer;

export const fetchAllproducts = (dispatch: any) => {
  axios
    .get(`https://dev.obtenmas.com/catom/api/challenge/banks`)
    .then((response: any) => {
      dispatch(resultado(response.data));
    })
    .catch((error: any) => console.log(error, "error"));
};
