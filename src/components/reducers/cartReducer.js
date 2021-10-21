import { ADD_TO_CART } from "./cartReducerActions";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, title, author, price, amount, imgUrl, copies } =
        action.payload;
      const tempItem = state.cartItems.find((item) => item.id === id);
      if (tempItem) {
        let addToTotal = 0;
        const tempCartItems = state.cartItems.map((cartItem) => {
          if (cartItem.id === id) {
            let newAmount = cartItem.amount + amount;
            if (newAmount > copies) {
              newAmount = copies;
              addToTotal = copies;
            }
            addToTotal = amount;
            return { ...cartItem, amount: newAmount };
          }
          return cartItem;
        });
        return {
          ...state,
          cartItems: tempCartItems,
          totalAmount: state.totalAmount + addToTotal,
        };
      } else {
        const newItem = { id, title, author, price, amount, imgUrl, copies };
        let addToTotal = amount;
        if (amount >= copies) {
          addToTotal = copies;
        }
        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          totalAmount: state.totalAmount + addToTotal,
        };
      }
    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};
