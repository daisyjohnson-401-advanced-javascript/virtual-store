import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import products from './products';
import categories from './categories';
import cart from './simpleCart.js';


let reducers = combineReducers({ products, categories, cart }); //comb

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();