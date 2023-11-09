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
export const fetchDataComments = createAsyncThunk('data/fetchDataComments', async (_, { getState }) => {
  try {
    const { limit, offset } = getState().Comments;
    const data = await AxiosCustom(`/seller?limit=${limit}&offset=${offset}`);
    return data;
  } catch (error) {
    console.log(error.response.data.message)
    const err = error.response.data.message;
    if (err === 'jwt expired') {
      window.location.reload('/admin/login')
      localStorage.clear('lybas-token')
    }
    throw error;
  }
});

// Create a slice using Redux Toolkit
const Comments = createSlice({
  name: 'Comments',
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
      .addCase(fetchDataComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDataComments.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...action?.payload?.data];
        state.count = action?.payload.count;
      })
      .addCase(fetchDataComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'An error occurred';
      });
  },
});

// Export the actions and reducer
export const { setLimit, setOffset, setSearch } = Comments.actions;
export default Comments.reducer;
