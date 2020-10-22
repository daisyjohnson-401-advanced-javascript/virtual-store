import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { removeInventory } from '../../store/products.js';
import { addProductsToCart } from '../../store/simpleCart.js';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';


const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
},
card: {
    display: 'flex',
    flexDirection: 'column',
},
cardMedia: {
  height: 0,
  paddingTop: "56.25%",
},

cardContent: {
    flexGrow: 1,
},
}));


const ProductDetails = props => {

const classes = useStyles();
  
// useEffect(() => {
//     props.getProduct();
//   }, [props])

  function addToCart(product){
    props.removeInventory(product);
    props.addProductsToCart(product);
  }

  return (
    <>
{console.log('DETAILS', props.product)}
    <Container className={classes.cardGrid} maxWidth='lg'>
    <Grid container spacing={1}>
   
         <Grid item key={props.details.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia 
            className={classes.cardMedia}
            image={`https://source.unsplash.com/random?${props.details.name}`}
            title={props.details.name} />
            <CardContent className={classes.CardContent}>
              <Typography gutterBottom variant='h5'>
               Product: {props.details.name}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Description: {props.details.description}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Price: {`$ ${props.details.price}`}
              </Typography>
              <Typography gutterBottom variant='h5'>
                In Stock: {props.details.inStock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => addToCart(props.details)}>Add to Cart</Button>
            </CardActions>
          </Card>

          </Grid>     

   
    </Grid>
    </Container>
      
      </>
  );
};

const mapStateToProps = state => {
  return {
    product: state.products,
    details: state.products.displayProducts,
  };
};

const mapDispatchToProps = { addProductsToCart, removeInventory }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductDetails);