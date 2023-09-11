import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import orderPagination from './orderPaginationReducer';
import fetchCategories from './categorySlice';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  orderPagination: orderPagination,
  fetchCategories,
});

export default reducer;
