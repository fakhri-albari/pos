import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  name: "",
  email: "",
};

export const settingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
    },
  },
});

export const { changeMenu, changeFilterAvailableStock, changeDateHistory } =
  settingSlice.actions;

export default settingSlice.reducer;
