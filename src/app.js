import React from 'react';
// import { connect } from 'react-redux';

import CurrentCategory from './components/storefront/current-category.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import SimpleCart from './components/storefront/simpleCart.js';

function App() {

  return (
    <>
      <Header />
      <main>
        <Categories />
        <CurrentCategory />
        <Products />
        <SimpleCart />
      </main>
      <Footer />
    </>
  );
}

export default App;
