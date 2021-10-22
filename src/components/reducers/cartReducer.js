import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_FROM_CART,
  TOGGLE_AMOUNT_OF_COPIES,
} from "./cartReducerActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, author, price, amount, imgUrl, copies } =
        action.payload;
      const tempItem = state.cartItems.find((item) => item.id === id);
      if (tempItem) {
        const tempCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > copies) {
              newAmount = copies;
            }
            return { ...cartItem, amount: newAmount };
          }
          return cartItem;
        });
        return {
          ...state,
          cartItems: tempCartItems,
        };
      } else {
        const newItem = { id, title, author, price, amount, imgUrl, copies };
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
        };
      }

    case REMOVE_FROM_CART:
      const tempCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: tempCartItems,
      };

    case TOGGLE_AMOUNT_OF_COPIES:
      const { itemId, toggleAction } = action.payload;
      const tempCart = state.cartItems.map((item) => {
        if (item.id === itemId) {
          if (toggleAction === "increase") {
            let newAmount = item.amount + 1;
            if (newAmount >= item.copies) {
              newAmount = item.copies;
            }
            return {
              ...item,
              amount: newAmount,
            };
          }
          if (toggleAction === "decrease") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return {
              ...item,
              amount: newAmount,
            };
          }
        }
        return item;
      });
      return {
        ...state,
        cartItems: tempCart,
      };

    case COUNT_CART_TOTALS:
      const { totalItems, totalAmount } = state.cartItems.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalAmount += amount * price;
          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );
      return { ...state, totalItems, totalAmount };

    case CLEAR_CART:
      return { ...state, cartItems: [] };

    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};
