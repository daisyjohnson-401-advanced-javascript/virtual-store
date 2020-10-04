import React from 'react';
import { connect } from 'react-redux';
import { addProductsToCart } from '../../store/simpleCart.js';
import { removeItemsFromCart } from '../../store/simpleCart.js';

const SimpleCart = props => {
  return (
    <>
      <h2> Your Cart! </h2>
      <h4>{props.cart.cartItems.length}</h4>
      <ul>
        {props.cart.cartItems.map(product => {
          return <li key={product.name}>
            {product.name}
          <button onClick={() => props.removeItemsFromCart(product)}>Remove From Cart</button>
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

const mapDispatchToProps = { addProductsToCart, removeItemsFromCart }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCart);