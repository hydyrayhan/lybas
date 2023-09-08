import {configureStore} from '@reduxjs/toolkit';

import dropdowns from '../features/dropdowns';

export const store = configureStore({
  reducer:{
    dropdowns
  }
})