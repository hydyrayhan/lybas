import {configureStore} from '@reduxjs/toolkit';

import Dressmakers from '../features/Dressmakers';
import Orders from '../features/Orders';
import Dresses from '../features/Dresses';
import Categories from '../features/Categories'
import Sizes from '../features/Sizes';
import Colors from '../features/Colors';
import Fabrics from '../features/Fabrics';
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
    Fabrics,
    Colors,
    Banners,
    Comments,
    Blog,
  }
})