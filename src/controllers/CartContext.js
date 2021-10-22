import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../components/reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from "../components/reducers/cartReducerActions";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cartItems: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 9.99,
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const countTotals = () => {
    dispatch({
      type: COUNT_CART_TOTALS,
    });
  };

  const addToCart = (id, title, author, price, amount, imgUrl, copies) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, title, author, price, amount, imgUrl, copies },
    });
    countTotals();
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    countTotals();
  };

  return (
    <CartDispatchContext.Provider
      value={{ dispatch, addToCart, clearCart, countTotals }}
    >
      <CartStateContext.Provider value={cartState}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
