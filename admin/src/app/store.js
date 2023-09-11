import { configureStore } from "@reduxjs/toolkit";
import fetchCategories from '../features/categories';
import customizationReducer from "store/customizationReducer";
import fetchColors from '../features/colors';
import fetchSizes from '../features/sizes';

export const store = configureStore({
  reducer: {
    fetchCategories,
    fetchColors,
    fetchSizes,
    customization: customizationReducer,
  }
})