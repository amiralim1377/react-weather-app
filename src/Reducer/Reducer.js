import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: "tehran",
};

const usersearchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchinput(state, action) {
      state.city = action.payload || state.city;
    },
  },
});

export const { searchinput } = usersearchSlice.actions;

export default usersearchSlice.reducer;
