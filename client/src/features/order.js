import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalQuantity: 0,
  totalPrice: 0,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addTotalQuantity: (state) => {
      state.totalQuantity += 1;
    },
    minTotalQuantity: (state) => {
      state.totalQuantity -= 1;
    },
    addTotalPrice: (state, { payload }) => {
      state.totalPrice += payload.price;
    },
    minTotalPrice: (state, { payload }) => {
      state.totalPrice -= payload.price;
    },
    resetOrder: (state) => {
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const {
  addTotalQuantity,
  minTotalQuantity,
  addTotalPrice,
  minTotalPrice,
  resetOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
