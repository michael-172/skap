import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
  name: "scroll",
  initialState: { scroll: false, scrollTo: 0 },
  reducers: {
    scrolled(state) {
      state.scroll = true;
    },
    notScrolled(state) {
      state.scroll = false;
    },
  },
});
export const { scrolled, notScrolled, scrollToPoint } = scrollSlice.actions;

export default scrollSlice.reducer;
