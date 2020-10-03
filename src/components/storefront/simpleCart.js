import React from 'react';
import { connect } from 'react-redux';
import { addProductsToCart } from '../../store/products.js';

const SimpleCart = props => {
  return (
    <>
      <h2> Your Cart! </h2>
      <h4>{props.cart.items.length}</h4>
      <ul>
        {props.cart.items.map(product => {
          return <li key={product.name}>
            {product.name}
          </li>
        })}
      </ul>
  
    </>
  )
}

const mapStateToProps = state => {
  return{
    cart: state.cart,
  }
}

const mapDispatchToProps = { addProductsToCart }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCart);