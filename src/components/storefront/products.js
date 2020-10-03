import React from 'react';
import { connect } from 'react-redux';
import { addProductsToCart } from '../../store/products.js';


import Typography from '@material-ui/core/Typography';


const Products = props => {

  
  return (
    <>

        <Typography variant="h5">PRODUCTS:</Typography>
       <ul>
         {props.displayProducts.map(product => { 
          return( 
          <li key={product.name}> 
          {product.name}
          {product.description}
          {product.price}
          <button onClick={() => props.addProductsToCart(product)}>Add to your Cart!</button>
          </li> 
            );
        })}
      </ul>
      </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    displayProducts: state.products.displayProducts,
  };
};

const mapDispatchToProps = { addProductsToCart }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);