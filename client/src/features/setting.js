import { createSlice } from "@reduxjs/toolkit";
import { currentDate } from "../utilities";

const initialState = {
  menu: "order",
  filter: {
    availableStock: false,
    dateHistory: currentDate(),
  },
};

export const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    changeMenu: (state, { payload }) => {
      state.menu = payload.menu;
    },
    changeFilterAvailableStock: (state) => {
      state.filter.availableStock = !state.filter.availableStock;
    },
    changeDateHistory: (state, { payload }) => {
      state.filter.dateHistory = payload.date;
    },
  },
});

export const { changeMenu, changeFilterAvailableStock, changeDateHistory } =
  settingSlice.actions;

export default settingSlice.reducer;
