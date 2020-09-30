import React from 'react';
import { connect } from 'react-redux';

const Products = props => {

}

const mapStateToProps = state => {

  return {
    categories: state.categories,
    products: state.products, 
  };
};

export default connect(
  mapStateToProps,
)(Products);