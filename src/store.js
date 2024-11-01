import { configureStore } from "@reduxjs/toolkit";
import usersearchReducer from "./Reducer/Reducer";

const store = configureStore({
  reducer: {
    usersearch: usersearchReducer,
  },
});

export default store;
