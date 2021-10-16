import { createSlice } from "@reduxjs/toolkit";

interface CoctailDetails {
  cocDetail: {};
}

const coctailD: CoctailDetails = {
  cocDetail: {},
};

export const coctailData = createSlice({
  name: "coctail details",
  initialState: coctailD,
  reducers: {
    getDetails(state, action) {
      state.cocDetail = action.payload;
    },
  },
});

export const coctailDetailActions = coctailData.actions;
