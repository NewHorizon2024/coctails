import { createSlice } from "@reduxjs/toolkit";

interface CoctailDetails {
  cocDetail: {};
  openDetails: boolean;
}

const coctailD: CoctailDetails = {
  cocDetail: {},
  openDetails: false,
};

export const coctailData = createSlice({
  name: "coctail details",
  initialState: coctailD,
  reducers: {
    getDetails(state, action) {
      state.cocDetail = action.payload;
    },
    gurdPath(state, action) {
      state.openDetails = action.payload;
    },
  },
});

export const coctailDetailActions = coctailData.actions;
