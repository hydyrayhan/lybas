import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import { AxiosInstance } from '../common/AxiosInstance';

export const getCategories = createAsyncThunk(
  "/datas/getData", 
  async (args,{rejectWithValue}) => {
    try {
      const {data} = await AxiosInstance.get(`/categories?limit=${args.limit}&offset=${args.offset}`);
      return data;
    } catch (error) {
      rejectWithValue(error.response.data)
    }
  }
)

export const fetchData = createSlice({
  name:'getCategories',
  initialState:{
    data:[],
    count:0,
    isSuccess:false,
    message:"",
    loading:false,
  },
  
  extraReducers: {
    [getCategories.pending]: (state,{payload})=>{
      state.loading = true;
    },
    [getCategories.fulfilled]: (state,{payload})=>{
      console.log(payload,123)
      state.loading = false;
      state.data = payload.data.categories;
      state.count = payload.data.count;
      state.isSuccess = true;
    },
    [getCategories.pending]: (state,{payload})=>{
      state.message = payload;
      state.loading = false;
      state.isSuccess = false;
    },
  }
})

// export const { getOneCarpet } = fetchData.actions;

export default fetchData.reducer;