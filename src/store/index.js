import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories';
// import products from './products';

let reducers = combineReducers({ categories }); //comb

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();