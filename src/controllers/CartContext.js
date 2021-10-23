import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "../components/reducers/cartReducer";
import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_FROM_CART,
  TOGGLE_AMOUNT_OF_COPIES,
} from "../components/reducers/cartReducerActions";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const getCartItemsFromLocalStorage = () => {
  let cartItems = localStorage.getItem("cart");
  if (cartItems) {
    return JSON.parse(cartItems);
  } else {
    return [];
  }
};

const initialState = {
  cartItems: getCartItemsFromLocalStorage(),
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

  const removeItemFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
    countTotals();
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
    countTotals();
  };

  const toggleAmount = (itemId, toggleAction) => {
    dispatch({
      type: TOGGLE_AMOUNT_OF_COPIES,
      payload: { itemId, toggleAction },
    });
    countTotals();
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.cartItems));
    countTotals();
  }, [cartState.cartItems]);

  return (
    <CartDispatchContext.Provider
      value={{
        dispatch,
        addToCart,
        removeItemFromCart,
        clearCart,
        toggleAmount,
        countTotals,
      }}
    >
      <CartStateContext.Provider value={cartState}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
