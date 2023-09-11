import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from '../common/AxiosInstance';

export const getSizes = createAsyncThunk(
  "/datas/getSizes", 
  async (args,{rejectWithValue}) => {
    try {
      const {data} = await AxiosInstance.get(`/sizes?limit=${args.limit}&offset=${args.limit * args.page}`);
      return {data,limit:args.limit,page:args.page} || {data:[],count:0};
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const fetchData = createSlice({
  name:'getSizes',
  initialState:{
    data:[],
    count:0,
    page:0,
    limit:10,
    isSuccess:false,
    message:"",
    loading:false,
  },
  
  extraReducers: {
    [getSizes.pending]: (state,{payload})=>{
      state.loading = true;
    },
    [getSizes.fulfilled]: (state,{payload})=>{
      state.loading = false;
      state.data = payload.data.sizes;
      state.count = payload.data.count;
      state.isSuccess = true;
      state.limit = payload.limit;
      state.page = payload.page;
    },
    [getSizes.pending]: (state,{payload})=>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  }
})

// export const { getOneCarpet } = fetchData.actions;

export default fetchData.reducer;