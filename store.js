import { configureStore } from "@reduxjs/toolkit";
import tabReducer from "./stores/tabSlice";

export const store = configureStore({
  reducer: {
    tab: tabReducer,
  },
});
