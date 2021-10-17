import { createSlice } from "@reduxjs/toolkit";

type AppState = {
  toggle: boolean;
};

const appState: AppState = {
  toggle: false,
};

export const appStateSlice = createSlice({
  name: "app state",
  initialState: appState,
  reducers: {
    main(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const appStateActions = appStateSlice.actions;
