import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import Dressmakers from '../features/Dressmakers';
import Orders from '../features/Orders';
import Dresses from '../features/Dresses';
import Categories from '../features/Categories'
import Sizes from '../features/Sizes';
import Colors from '../features/Colors';
import Materials from '../features/Materials';
import Banners from '../features/Banners';
import Comments from '../features/Comments';
import Blog from '../features/Blogs';

export const store = configureStore({
  reducer:{
    Dressmakers,
    Orders,
    Dresses,
    Categories,
    Sizes,
    Materials,
    Colors,
    Banners,
    Comments,
    Blog,
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false,
    })
})