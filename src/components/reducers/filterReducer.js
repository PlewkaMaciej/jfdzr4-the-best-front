import {
  LOAD_PRODUCTS_START,
  LOAD_PRODUCTS_SUCCESS,
} from "./filterReducerActions";

export const filterReducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_START:
      return { ...state, isLoading: true };
    case LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        allProducts: action.payload,
        filteredProducts: action.payload,
      };
    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};
