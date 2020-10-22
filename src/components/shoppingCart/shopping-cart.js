import React, { useState } from 'react';
import {connect} from 'react-redux';
import { List, ListItem, Card, Typography, Paper, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
import { clearCart } from '../../store/simpleCart.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({


}));

const If = props => {
  return props.condition ? props.children : null;
};

const ShoppingCart = (props) => {

  const classes = useStyles();

  const [checkout, setCheckout] = useState('');

  const[shipping, setShipping] = useState(false);


  function calcTotal(){
    let total = 0;
    props.cart.cartItems.forEach(product => {
      total += parseFloat(product.price);
    });
    return total.toFixed(2).toString();
  }

  function orderNumber() {
    return Math.floor((Math.random() * 10000) + 1);
  }

  return (
    <div className={classes.cart}>
      <If condition={checkout === ''}>
        <Paper variant='outline'>
          <Typography id='productTitle' variant='h6'>Shopping Cart</Typography>

          <List className={classes.list}>
            {props.cart.cartItems.map((product, idx) => (
              <div className={classes.card}>
                <Card variant='outlined'>
                  <ListItem key={product.name}> Product: {product.name}</ListItem>
                  <ListItem key={product.price}>Price: ${product.price}</ListItem>
                </Card>
              </div>
            ))}


          </List>
          <Card variant='outlined'>
            <If condition={calcTotal() === '0.00'}>
              <Typography component='p'>Your Cart is Empty! :(</Typography>
            </If>
            <If condition={calcTotal() !== '0.00'}>
              <Typography component='p'>Total: ${calcTotal()}</Typography>
              <Button variant='outline' onClick={() => setCheckout('shipping')}>Checkout</Button>
            </If>
          </Card>
        </Paper>
      </If>
      <div className={classes.checkout}>
      <If condition={checkout === 'shipping'}>
        <Paper>
          <Typography variant='h6' gutterBottom>
            Shipping Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='address1'
              name='adress1'
              label='Address line 1'
              fullWidth
              autoComplete='shipping address-line1'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='address2'
              name='adress2'
              label='Address line 2'
              fullWidth
              autoComplete='shipping address-line2'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='city'
              name='city'
              label='City'
              fullWidth
              autoComplete='shipping address-level2'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='state'
              name='state'
              label='State/Province'
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='zip'
              name='zip'
              label='Zip/Postal Code'
              fullWidth
              autoComplete='shipping postal-code'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='country'
              name='country'
              label='Country'
              fullWidth
              autoComplete='shipping country'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
              control={<Checkbox color='secondary' name='saveAddress' value='yes' onChange={(e) => {
                setShipping(!shipping); }}/>}
                label='Same as billing address'
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={() => setCheckout('')}>Back</Button>
              </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='outlined' onClick={(e) => {e.preventDefault();
              if(shipping === true){
                setCheckout('payment');
              }else {
                setCheckout('billing');}}}>
                  Next
                </Button>
            </Grid>
          </Grid>
          </Paper>
          </If>  
          <If condition={checkout === 'billing'}>
          <Paper>
          <Typography variant='h6' gutterBottom>
            Billing Address
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='firstName'
              name='firstName'
              label='First Name'
              fullWidth
              autoComplete='given-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='lastName'
              name='lastName'
              label='Last Name'
              fullWidth
              autoComplete='family-name'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='address1'
              name='adress1'
              label='Address line 1'
              fullWidth
              autoComplete='billing address-line1'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='address2'
              name='adress2'
              label='Address line 2'
              fullWidth
              autoComplete='billing address-line2'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='city'
              name='city'
              label='City'
              fullWidth
              autoComplete='billing address-level2'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='state'
              name='state'
              label='State/Province'
              fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='zip'
              name='zip'
              label='Zip/Postal Code'
              fullWidth
              autoComplete='billing postal-code'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              required
              id='country'
              name='country'
              label='Country'
              fullWidth
              autoComplete='billing country'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button variant="outlined" onClick={() => setCheckout('')}>Back</Button>
              </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='outlined' onClick={(e) => {e.preventDefault();
                setCheckout('payment');}}>
                  Next
                </Button>
            </Grid>
            </Grid>
            </Paper>
          </If>

          <If condition={checkout === 'payment'}>
            <Paper>
              <Typography variant='h6' gutterBottom>
                Payment Method
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                  required
                  id='cardName'
                  label='Name on Card'
                  fullWidth
                  autoComplete='cc-name'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                  required
                  id='cardNumber'
                  label='Card Number'
                  fullWidth
                  autoComplete='cc-number'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                  required
                  id='expDate'
                  label='Expiration Date'
                  fullWidth
                  autoComplete='cc-exp'
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                  required
                  id='cvv'
                  label='CVV'
                  helperText='Three digits on back of card'
                  fullWidth
                  autoComplete='cc-cvv'
                  />
                </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant='outlined' onClick={(e) => {e.preventDefault();
                if(shipping === true){
                  setCheckout('shipping');
                setShipping(false);
              }else{
                setCheckout('billing')
              }}}>
                  Back
                </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
              <Button variant='outlined' onClick={(e) => {e.preventDefault();
                  setCheckout('purchase');
                  props.clearCart();
               }}>
                  Purchase
                </Button>
              </Grid>
              </Grid>
            </Paper>
            </If>
            <If condition={checkout === 'purchase'}>
              <Paper>
                <Typography variant='h6' gutterBorrom>
                  Thank you for your order!
                </Typography>
                <Typography component='p' gutterBottom>
                  Your Order Number is {orderNumber()}.
                </Typography>
              </Paper>
            </If>
      </div>
      
    </div>
  )
}

const mapStateToProps = state => {

  return {
    categories: state.categories,
    products: state.products,
    cart: state.cart,
  };
};

const mapDispatchToProps = { clearCart }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);