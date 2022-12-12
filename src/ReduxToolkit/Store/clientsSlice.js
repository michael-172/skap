import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getClients = createAsyncThunk(
  "Skapluie/getClients",
  async (id, thunkAPI) => {
    const response = id
      ? await fetch(`http://abnuur-001-site1.btempurl.com/api/Clients/${id}`)
      : await fetch("http://abnuur-001-site1.btempurl.com/api/Clients");
    const res = await response.json();
    return res;
  }
);

export const clientsSlice = createSlice({
  name: "clients",
  initialState: { clients: [] },
  extraReducers: {
    [getClients.pending]: (state, action) => {},
    [getClients.fulfilled]: (state, action) => {
      state.clients = action.payload;
    },
  },
});
export default clientsSlice.reducer;
