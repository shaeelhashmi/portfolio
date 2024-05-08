import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../Slice/Dark mode/Darkmode.js";
export const store = configureStore({
  reducer: Reducer,
});
