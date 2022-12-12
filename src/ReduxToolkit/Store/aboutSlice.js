import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAbout = createAsyncThunk(
  "Skapluie/getAbout",
  async (type, thunkAPI) => {
    try {
      const res = await fetch(
        `http://abnuur-001-site1.btempurl.com/api/AboutUs/${type}}`
      );
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const aboutSlice = createSlice({
  name: "aboutSlice",
  initialState: { about: [] },
  extraReducers: {
    [getAbout.fulfilled]: (state, action) => {
      state.about = action.payload;
    },
  },
});

export default aboutSlice.reducer;
