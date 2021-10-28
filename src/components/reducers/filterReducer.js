import {
  FILTER_PRODUCTS,
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

    case FILTER_PRODUCTS:
      const { allProducts } = state;
      const text = action.payload;
      let tempProducts = [...allProducts];
      if (!text) {
        return {
          ...state,
          filteredProducts: tempProducts,
        };
      } else {
        tempProducts = tempProducts.filter((product) => {
          return (
            product.title.toLowerCase().includes(text) ||
            product.author.toLowerCase().includes(text)
          );
        });
      }
      return {
        ...state,
        filteredProducts: tempProducts,
      };

    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};
