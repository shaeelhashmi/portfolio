import { createSlice } from "@reduxjs/toolkit";
export const Darkmode = createSlice({
  name: "Darkmode",
  initialState: {
    mode: true,
  },
  reducers: {
    changeState: (state, action) => {
      state.mode = action.payload;
      return;
    },
  },
});

export const { changeState, removeState } = Darkmode.actions;
export default Darkmode.reducer;
