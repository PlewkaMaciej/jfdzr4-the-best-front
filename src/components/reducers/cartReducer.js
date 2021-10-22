import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS } from "./cartReducerActions";

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
