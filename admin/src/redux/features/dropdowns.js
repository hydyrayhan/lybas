import { createSlice } from '@reduxjs/toolkit';

export const dropdownsSlice = createSlice({
  name:"dropdowns",
  initialState:{
    setCart:false,
  },
  reducers:{
    setCartDropdown: (state,{payload})=>{
      state.setCart = payload;
    }
  }
})

export const {setCartDropdown} = dropdownsSlice.actions;
export default dropdownsSlice.reducer;