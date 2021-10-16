import { configureStore } from "@reduxjs/toolkit";
import { coctailStore } from "./coctailSlice";
import { coctailState } from "./coctailState";
import { coctailData } from "./coctailDetails";

const store = configureStore({
  reducer: {
    coca: coctailStore.reducer,
    cocaState: coctailState.reducer,
    coctaildata: coctailData.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
