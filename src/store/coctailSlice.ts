import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./coctailStore";

export type Data = {
  coctails: [];
};

const coctailsData: Data = {
  coctails: [],
};

export const coctailStore = createSlice({
  name: "sig coctail",
  initialState: coctailsData,
  reducers: {
    storeCoctails(state, action) {
      state.coctails = action.payload;
    },
  },
});

export const coctailAction = coctailStore.actions;
