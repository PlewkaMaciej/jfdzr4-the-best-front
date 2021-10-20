import { createContext, useReducer, useContext } from "react";
import { reducer } from "../components/reducers/cartReducer";
import { ADD_TO_CART } from "../components/reducers/cartReducerActions";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cartItems: [],
  totalAmount: 0,
  shippingFee: 9.99,
};

export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, title, author, price, amount, imgUrl) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, title, author, price, amount, imgUrl },
    });
  };

  return (
    <CartDispatchContext.Provider value={{dispatch, addToCart}}>
      <CartStateContext.Provider value={cartState}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
