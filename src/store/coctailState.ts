import { createSlice } from "@reduxjs/toolkit";

type State = {
  loaded: boolean;
  isNetwork: boolean;
  thereIscoctails: boolean;
};

const coctailinitState: State = {
  loaded: false,
  isNetwork: true,
  thereIscoctails: true,
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
    productsState(state, action) {
      if (action.payload === "1") {
        state.thereIscoctails = true;
      }
      if (action.payload === "0") {
        state.thereIscoctails = false;
      }
    },
  },
});

export const coctailStateActions = coctailState.actions;
