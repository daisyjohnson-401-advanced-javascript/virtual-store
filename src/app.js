import React from 'react';
// import { connect } from 'react-redux';

import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import ShoppingCart from './components/shoppingCart/shopping-cart.js';
// import ProductDetails from './components/storefront/product-details.js';
// import SimpleCart from './components/storefront/simpleCart.js';
import { Route, Switch } from 'react-router-dom';
import './app.css';

function App() {

  return (
    <div >
      <Header />
      <main className='App'>
        <Switch>
      <Route exact path='/'>
       <Categories />
        <Products />
      </Route>
      {/* <Route exact path='/products'>
        <ProductDetails />
      </Route> */}
      <Route exact path='/cart'>
        <ShoppingCart />
      </Route>
      </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
