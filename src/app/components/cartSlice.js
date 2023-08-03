import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    value: [],
    added: null,
  },
  reducers: {
    addProduct: (state, action) => {
      if (state.value.some((item) => item.item.id === action.payload.item.id)) {
        const itemIndex = state.value.findIndex(
          (obj) => obj.item.id === action.payload.item.id
        );
        state.value[itemIndex].amount += action.payload.quantity;
      } else
        state.value.push({
          item: action.payload.item,
          amount: action.payload.quantity,
        });
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
      if (action.payload.value >= 1 && action.payload.value <= 25) {
        const itemIndex = state.value.findIndex(
          (obj) => obj.item.id === action.payload.item.item.id
        );
        state.value[itemIndex].amount = Number(action.payload.value);
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
