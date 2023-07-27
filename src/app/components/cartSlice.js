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
    removeProduct: (state, action) => {
      const itemIndex = state.value.findIndex(
        (obj) => obj.item.id === action.payload.id
      );
      state.value.splice(itemIndex, itemIndex + 1);
    },
    incrementProduct: (state, action) => {
      const itemIndex = state.value.findIndex(
        (obj) => obj.item.id === action.payload.id
      );
      state.value[itemIndex].amount += 1;
    },
    decrementProduct: (state, action) => {
      const itemIndex = state.value.findIndex(
        (obj) => obj.item.id === action.payload.id
      );
      if (state.value[itemIndex].amount == 0) {
      } else state.value[itemIndex].amount -= 1;
    },
    setProductAmount: (state, action) => {
      if (action.payload.value >= 1 && action.payload.value <= 10) {
        const itemIndex = state.value.findIndex(
          (obj) => obj.item.id === action.payload.item.item.id
        );
        state.value[itemIndex].amount = action.payload.value;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  incrementProduct,
  decrementProduct,
  setProductAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
