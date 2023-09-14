import {configureStore} from '@reduxjs/toolkit';

import dropdowns from '../features/dropdowns';
import banners from '../features/banners';
import blogs from '../features/blogs';

export const store = configureStore({
  reducer:{
    dropdowns,
    banners,
    blogs,
  }
})