import { createSlice } from '@reduxjs/toolkit';

export const bannersSlice = createSlice({
  name:"banners",
  initialState:{
    data:null,
  },
})

export default bannersSlice.reducer;