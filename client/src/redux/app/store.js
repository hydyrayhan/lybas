import { configureStore } from '@reduxjs/toolkit';

import dropdowns from '../features/dropdowns';
import banners from '../features/banners';
import blogs from '../features/blogs';
import dresses from '../features/dresses';

export const store = configureStore({
  reducer: {
    dropdowns,
    banners,
    blogs,
    dresses,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
})