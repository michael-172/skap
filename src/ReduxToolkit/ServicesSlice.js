import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getServices = createAsyncThunk(
  "Skapluie/getServices",
  async (_, thunkAPI) => {
    const response = await fetch(
      "http://abnuur-001-site1.btempurl.com/api/Services"
    );
    const res = await response.json();
    return res;
  }
);

export const getService = createAsyncThunk(
  "Skapluie/getService",
  async (id, thunkAPI) => {
    try {
      const response = await fetch(
        `http://abnuur-001-site1.btempurl.com/api/Services/${id}`
      );
      const res = await response.json();
      return res;
    } catch (error) {
      throw Error();
    }
  }
);

// create a slice
export const serviceSlice = createSlice({
  name: "services",
  initialState: { services: [], service: {} },
  extraReducers: {
    [getServices.pending]: (state, action) => {},
    [getServices.fulfilled]: (state, action) => {
      state.services = action.payload;
    },
    [getService.fulfilled]: (state, action) => {
      state.service = action.payload;
    },
    [getService.rejected]: (state, action) => {
      console.log("Error");
    },
  },
});

export const servicesActions = serviceSlice.actions;

export default serviceSlice.reducer;
