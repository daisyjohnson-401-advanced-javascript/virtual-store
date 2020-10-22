const initialState = {
  cartItems: [],

}

export default (state = initialState, action) => {
  const{ type, payload } = action;

    switch (type) {

      case 'Add': 
      let items = state.cartItems.push(payload);
      return {...state, items};

      case 'Remove':
        let removeItems = state.cartItems.filter(item => item !== payload)
        return{cartItems: removeItems}

      case 'Clear':
        return initialState;

    default:
      return state;
    };
};

export const addProductsToCart = (product) => {
  return {
    type: 'Add',
    payload: product,
  };
};

export const removeItemsFromCart = (product) => {
  return {
    type: 'Remove',
    payload: product,
  };
};

export const clearCart = () => {
  return {
    type: 'CLEAR',
  };
};