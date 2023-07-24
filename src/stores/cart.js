import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/app/components/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
