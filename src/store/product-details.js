import axios from 'axios';

const initialState = [];

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {

    case 'GET_PRODUCT':
      return payload;

      default:
        return state;

  }
};


export const getSingleProduct = (product) => async (dispatch) => {
  const response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`);
  dispatch({
    type: 'GET_PRODUCT',
    payload: response.data,
  });
};