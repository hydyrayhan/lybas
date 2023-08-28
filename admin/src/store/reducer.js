import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import orderPagination from './orderPaginationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  orderPagination: orderPagination,
});

export default reducer;
