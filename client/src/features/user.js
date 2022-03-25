import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.name = payload.data.name;
      state.email = payload.data.email;
    },
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
