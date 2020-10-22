import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import products from './products';
import categories from './categories';
import cart from './simpleCart.js';
import productDetails from './product-details.js';


let reducers = combineReducers({ products, categories, cart, productDetails }); //comb

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();