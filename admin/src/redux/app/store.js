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
import Blogs from '../features/Blogs';
import Notification from '../features/Notification';
import Emails from '../features/Emails';

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
    Blogs,
    Notification,
    Emails
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:false,
    })
})