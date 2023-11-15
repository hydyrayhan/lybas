import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosCustom } from '../../common/AxiosInstance.js'

const initialState = {
  data: [],
  loading: false,
  error: null,
  limit: 5,
  offset: 0,
  count: 0,
  search: '',
  status: '',
  filter: '',
};
export const fetchDataOrders = createAsyncThunk('data/fetchDataOrders', async (_, { getState }) => {
  try {
    const { limit, offset, filter, search,status } = getState().Orders;
    const data = await AxiosCustom(`/orders?limit=${limit}&status=${status}&offset=${offset}&filter=${JSON.stringify(filter)}&keyword=${search}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      window.location.reload('/login')
      localStorage.clear('lybas-token')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Orders = createSlice({
  name: 'Orders',
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
    setFilter: (state, action) => {
      state.filter = action.payload;
      state.offset = 0
    },
    setStatus: (state, action) => {
      state.status = action.payload;
      state.offset = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data.data];
        state.count = action?.payload.data.count;
      })
      .addCase(fetchDataOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch, setFilter, setStatus } = Orders.actions;
export default Orders.reducer;
