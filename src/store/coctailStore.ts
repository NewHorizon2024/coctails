import { configureStore } from "@reduxjs/toolkit";
import { coctailStore } from "./coctailSlice";

const store = configureStore({
  reducer: {
    coca: coctailStore.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
