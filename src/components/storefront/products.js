import React from 'react';
import { connect } from 'react-redux';


import Typography from '@material-ui/core/Typography';


const Products = props => {

  
  return (
    <>

        <Typography variant="h5">PRODUCTS:</Typography>
       <ul>
         {props.displayProducts.map(product => { 
          return( 
          <li key={product.name}> 
          Product:{product.name}
          </li> 
            );
        })}
      </ul>
      </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products.products,
    displayProducts: state.products.displayProducts,
  };
};

export default connect(
  mapStateToProps,
)(Products);