import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/pages/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
