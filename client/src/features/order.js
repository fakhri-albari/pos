import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalQuantity: 0,
  totalPrice: 0,
  itemAdded: {},
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
    addItem: (state, { payload }) => {
      const data = {
        ...payload.data.data,
        selected: payload.data.data.selected + 1,
      };
      state.itemAdded = {
        ...state.itemAdded,
        [payload.id]: data,
      };
    },
    minItem: (state, { payload }) => {
      if (payload.data.data.selected - 1 === 0) {
        delete state.itemAdded[payload.data.id];
      } else {
        const data = {
          ...payload.data.data,
          selected: payload.data.data.selected - 1,
        };
        state.itemAdded = {
          ...state.itemAdded,
          [payload.data.id]: data,
        };
      }
    },
  },
});

export const {
  addTotalQuantity,
  minTotalQuantity,
  addTotalPrice,
  minTotalPrice,
  resetOrder,
  addItem,
  minItem,
} = orderSlice.actions;

export default orderSlice.reducer;
