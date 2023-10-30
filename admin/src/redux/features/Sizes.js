import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 10,
  offset: 0,
  count: 0,
  search: ''
};
export const fetchDataSizes = createAsyncThunk('data/fetchDataSizes', async (_, { getState }) => {
  try {
    const { limit, offset } = getState().Sizes;
    const data = await AxiosCustom(`/seller?limit=${limit}&offset=${offset}`);
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Sizes = createSlice({
  name: 'Sizes',
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
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataSizes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataSizes.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data];
        state.count = action?.payload.count;
      })
      .addCase(fetchDataSizes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch } = Sizes.actions;
export default Sizes.reducer;
