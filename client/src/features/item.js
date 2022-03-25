import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  1: {
    name: "baso",
    price: 10000,
    stock: 10,
    selected: 0,
    img: "/img/food.png",
  },
  2: {
    name: "mi ayam",
    price: 15000,
    stock: 0,
    selected: 0,
    img: "/img/food.png",
  },
  3: {
    name: "bubur",
    price: 5000,
    stock: 20,
    selected: 0,
    img: "/img/food.png",
  },
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    addSelected: (state, { payload }) => {
      state[payload.id].selected += 1;
    },
    minSelected: (state, { payload }) => {
      state[payload.id].selected -= 1;
    },
    resetItem: (state) => {
      // state.map((item) => {
      //   item.selected = 0;
      // });
      const keys = Object.keys(state);
      keys.map((key) => (state[key].selected = 0));
    },
    setItem: (state, { payload }) => {
      // console.log(payload);
      const keys = Object.keys(state);
      keys.map((key) => delete state[key]);

      const pkeys = Object.keys(payload);
      pkeys.map((key) => (state[key] = payload[key]));
    },
  },
});

export const { addSelected, minSelected, resetItem, setItem } =
  itemSlice.actions;

export default itemSlice.reducer;
