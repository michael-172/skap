import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getWork = createAsyncThunk(
  "Skapluie/getWork",
  async (serviceName, thunkAPI) => {
    try {
      const response = await fetch(
        `http://abnuur-001-site1.btempurl.com/api/work/FilterWorkByService/${serviceName}`
      );
      const res = await response.json();
      return res;
    } catch (error) {
      throw Error();
    }
  }
);

export const getAllWork = createAsyncThunk(
  "Skapluie/getWork",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        `http://abnuur-001-site1.btempurl.com/api/Work`
      );
      const res = await response.json();
      return res;
    } catch (error) {
      throw Error();
    }
  }
);

export const workSlice = createSlice({
  name: "work",
  initialState: { work: [], AllWork: [] },
  extraReducers: {
    [getWork.pending]: (state, action) => {},
    [getWork.fulfilled]: (state, action) => {
      state.work = action.payload;
    },
    [getAllWork.pending]: (state, action) => {},
    [getAllWork.fulfilled]: (state, action) => {
      state.work = action.payload;
    },
  },
});
export default workSlice.reducer;
