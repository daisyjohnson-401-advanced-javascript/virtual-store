import React from 'react';
import { connect } from 'react-redux';
import { addProductsToCart } from '../../store/simpleCart.js';



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
          {console.log('INVENTORY', product.inventory)}
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