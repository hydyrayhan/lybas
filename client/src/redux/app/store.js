import { configureStore } from '@reduxjs/toolkit';

import dropdowns from '../features/Dropdowns';
import banners from '../features/Banners';
import blogs from '../features/Blogs';
import Dresses from '../features/Dresses';
import Colors from '../features/Colors';
import Sizes from '../features/Sizes';
import Categories from '../features/Categories';
import Materials from '../features/Materials';
import Cart from '../features/Cart'

export const store = configureStore({
  reducer: {
    dropdowns,
    banners,
    blogs,
    Cart,

    // Seller
    Dresses,
    Colors,
    Sizes,
    Categories,
    Materials,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})