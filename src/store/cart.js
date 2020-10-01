// State should be an array of products that have been added (all product details)
// Create an action that will trigger the reducer to add the selected item to the cart
// Hint: this could be the same action type as you create for the Products reducer
// Create a reducer that adds the product to the array of items in state

const initialState = [];

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'ADD':

    return [...state, payload];

    default:
      return state;
  }
};

export const addProduct = (product) => {
  return {
    type: 'ADD',
    payload: product,
  }
}