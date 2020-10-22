import axios from 'axios';

let initialState = {
  categories:{

  },
 
  activeCategory: {

  },
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
  
    return {...state, activeCategory: payload};

    case  'GET_CATEGORY':
    
    return {...state, categories: payload};

    default:
      return state;
  }

};

export const changeCategory = (active) => {
  return {
    type: 'CHANGE',
    payload: active,
  };
};

export function getCategory () {

  return async function(dispatch){
  const response = await axios.get('https://api-js401.herokuapp.com/api/v1/categories');
  dispatch({
    type: 'GET_CATEGORY',
    payload: response.data.results,
  })
}
}