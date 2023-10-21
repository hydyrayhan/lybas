import { createSlice } from '@reduxjs/toolkit';

export const blogsSlice = createSlice({
  name:"blogs",
  initialState:{
    banners:[],
  },
})

export default blogsSlice.reducer;