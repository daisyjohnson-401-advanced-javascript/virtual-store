import React from 'react';
import { connect } from 'react-redux';

const Products = props => {

  return (
    <div>
      <h2> Product List </h2>
      <ul>
        {props.products.displayProducts.map(product => {
          return <li key={product.name}>{product.name}</li>
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {

  return {
    products: state.products,
  };
};

export default connect(
  mapStateToProps,
)(Products);