import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order";
import itemReducer from "./features/item";
import settingReducer from "./features/setting";
import userReducer from "./features/user";
import thunk from "redux-thunk";

export const store = configureStore({
  reducer: {
    order: orderReducer,
    item: itemReducer,
    setting: settingReducer,
    user: userReducer,
  },
  middleware: [thunk],
});
