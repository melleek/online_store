import { configureStore } from "@reduxjs/toolkit";
import Home from "../reducers/Home/Home";

export const store = configureStore({
  reducer: {
    Home,
  },
});
