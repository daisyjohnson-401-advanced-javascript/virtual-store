import axios from 'axios';

// define initial state
const initialState = {
  products: [
  
  ],
  displayProducts: [],
}

// TODO define reducer
export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case 'CHANGE':
      let displayProducts = state.products.filter(product => {
        return product.category === payload.name;

      });

      return { ...state, displayProducts };

    case 'GET_PRODUCTS':
      return{...state, products: payload}

      default:
        return state;
  }

}

export function getProducts () {
  

  return async function(dispatch){
    const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products');
    dispatch({
      type: 'GET_PRODUCTS',
      payload: response.data.results,
    })
  }
}

export const removeInventory = (product) => async (dispatch) =>{
  product.inStock = product.inStock - 1;
  await axios( {
    url: `https://api-js401.herokuapp.com/api/v1/products/${product.id}`,
    method: 'put',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json'},
    data: JSON.stringify(product),
  });
  const response = await axios.get (`https://api-js401.herokuapp.com/api/v1/products`);
  dispatch({
    type: 'GET_PRODUCTS',
    payload: response.data,
  });
};

export const addInventory = (product) => async (dispatch) =>{
  product.inStock = product.inStock + 1;
  await axios( {
    url: `https://api-js401.herokuapp.com/api/v1/products/${product.id}`,
    method: 'put',
    mode: 'cors',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json'},
    data: JSON.stringify(product),
  });
  const response = await axios.get (`https://api-js401.herokuapp.com/api/v1/products`);
  dispatch({
    type: 'GET_PRODUCTS',
    payload: response.data,
  });
};