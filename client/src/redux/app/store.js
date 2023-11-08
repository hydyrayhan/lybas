import { configureStore } from '@reduxjs/toolkit';

import dropdowns from '../features/dropdowns';
import banners from '../features/banners';
import blogs from '../features/blogs';
import Dresses from '../features/Dresses';
import Colors from '../features/Colors';
import Sizes from '../features/Sizes';
import Categories from '../features/Categories';
import Materials from '../features/Materials';

export const store = configureStore({
  reducer: {
    dropdowns,
    banners,
    blogs,

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