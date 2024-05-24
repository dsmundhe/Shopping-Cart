import { configureStore } from "@reduxjs/toolkit";
import cardReducers from "../features/addcard/cardSlice";
export const store = configureStore({
  reducer: cardReducers,
});
 
