import { createContext, useReducer, useContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cartItems: 0,
  totalAmount: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
};

export const useCartState = () => useContext(CartStateContext);
export const useCartDispatch = () => useContext(CartDispatchContext);
