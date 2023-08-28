// project imports
import config from 'config';

// action - state management
import * as orderPagination from './orderPagination';

export const initialState = {
  rows_per_page: 10,
  page:0,
};

// ==============================|| ORDERPAGINATION REDUCER ||============================== //

const orderPaginationRe = (state = initialState, action) => {
  switch (action.type) {
    case orderPagination.PAGE:
      return {
        ...state,
        page: action.page
      };
    case orderPagination.ROWS_PER_PAGE:
      return {
        ...state,
        rows_per_page: action.rowsPerPage
      };
    default:
      return state;
  }
};

export default orderPaginationRe;
