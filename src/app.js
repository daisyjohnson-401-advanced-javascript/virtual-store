import React from 'react';

// import CurrentCategory from './components/storefront/current-category.js';
import Categories from './components/storefront/categories.js';
import Products from './components/storefront/products.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';

function App() {

  return (
    <>
      <Header />
      <main>
        <Categories />
        {/* <CurrentCategory /> */}
        <Products />
      </main>
      <Footer />
    </>
  );
}

export default App;
