import { createSlice } from "@reduxjs/toolkit";

export type Data = {
  coctails: [];
  relatedIng: [];
  trigger: boolean;
};

const coctailsData: Data = {
  coctails: [],
  relatedIng: [],
  trigger: false,
};

export const coctailStore = createSlice({
  name: "sig coctail",
  initialState: coctailsData,
  reducers: {
    storeCoctails(state, action) {
      state.coctails = action.payload;
    },
    storeRelatedIng(state, action) {
      state.relatedIng = action.payload;
    },
    clearRelatedIng(state) {
      state.relatedIng = [];
    },
    spark(state) {
      state.trigger = !state.trigger;
    },
  },
});

export const coctailAction = coctailStore.actions;
