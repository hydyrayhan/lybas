import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 10,
  offset: 0,
  count: 0,
  search: '',
  filter:'',
};
export const fetchDataDresses = createAsyncThunk('data/fetchDataDresses', async (_, { getState }) => {
  try {
    const { limit, offset, search, filter } = getState().Dresses;
    const data = await AxiosCustom(`/products?limit=${limit}&offset=${offset}&filter=${JSON.stringify(filter)}&keyword=${search}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Dresses = createSlice({
  name: 'Dresses',
  initialState,
  reducers: {
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.offset = 0; // Reset the offset when changing the limit
    },
    setOffset: (state, action) => {
      state.offset = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
      state.offset = 0
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.offset = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataDresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataDresses.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
        state.count = action?.payload.data.count;
      })
      .addCase(fetchDataDresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter } = Dresses.actions;
export default Dresses.reducer;
