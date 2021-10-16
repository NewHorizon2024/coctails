import { createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

type State = {
  loaded: boolean;
  isNetwork: boolean;
};

const coctailinitState: State = {
  loaded: false,
  isNetwork: true,
};

export const coctailState = createSlice({
  name: "coctail state",
  initialState: coctailinitState,
  reducers: {
    coctailLoaded(state) {
      state.loaded = true;
    },
    coctailLoading(state) {
      state.loaded = false;
    },
    networkState(state, action) {
      if (action.payload === "active") {
        state.isNetwork = true;
      }

      if (action.payload === "inactive") {
        state.isNetwork = false;
      }
    },
  },
});

export const coctailStateActions = coctailState.actions;
