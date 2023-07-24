import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.value.some((item) => item.item.id === action.payload.id)) {
        const itemIndex = state.value.findIndex(
          (obj) => obj.item.id === action.payload.id
        );
        state.value[itemIndex].amount += 1;
      } else state.value.push({ item: action.payload, amount: 1 });
    },
  },
});

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;
