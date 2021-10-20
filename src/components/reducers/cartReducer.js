import { ADD_TO_CART } from "./cartReducerActions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
        const { id, title, author, price, amount, imgUrl } = action.payload; 
        const tempItem = state.cartItems.find(item => item.id === id);
        if (tempItem) {

        } else {
            const newItem = {id, title, author, price, amount, imgUrl};
            return {
                ...state,
                cartItems: [...state.cartItems, newItem],
                totalAmount: state.totalAmount + amount
            }
        }
        break;
    default:
      console.log(`invalid action type: ${action.type}`);
      return state;
  }
};
