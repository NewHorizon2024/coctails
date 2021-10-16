import { configureStore } from "@reduxjs/toolkit";
import { coctailStore } from "./coctailSlice";
import { coctailState } from "./coctailState";

const store = configureStore({
  reducer: {
    coca: coctailStore.reducer,
    cocaState: coctailState.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
