import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./features/order";
import itemReducer from "./features/item";

export const store = configureStore({
  reducer: { order: orderReducer, item: itemReducer },
});
