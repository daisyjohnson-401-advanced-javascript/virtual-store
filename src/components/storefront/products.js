import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProducts, removeInventory } from '../../store/products.js';
import { getSingleProduct } from '../../store/product-details.js';
import { addProductsToCart } from '../../store/simpleCart.js';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
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


const Products = props => {

const classes = useStyles();
  
useEffect(() => {
    props.getProducts();
  }, [props])

  function addToCart(product){
    props.removeInventory(product);
    props.addProductsToCart(product);
  }

  return (
    <>

    <Container className={classes.cardGrid} maxWidth='md'>
    <Grid container spacing={1}>
      {props.displayProducts.map(product => { 
        return <Grid item key={product.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia 
            className={classes.cardMedia}
            image={`https://source.unsplash.com/random?${product.name}`}
            title={product.name} />
            <CardContent className={classes.CardContent}>
              <Typography gutterBottom variant='h5'>
               Product: {product.name}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Description: {product.description}
              </Typography>
              <Typography gutterBottom variant='h5'>
                Price: {`$ ${product.price}`}
              </Typography>
              <Typography gutterBottom variant='h5'>
                In Stock: {product.inStock}
              </Typography>
            </CardContent>
            <CardActions>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
              {/* <Link className={classes.links} to='/products'>
                <Button variant='outlined' onClick={() => props.getSingleProduct(product)}>
                  View Details
                </Button>
              </Link> */}
            </CardActions>
          </Card>

          </Grid>     

        })}
    </Grid>
    </Container>
      
      </>
  );
};

const mapStateToProps = state => {
  return {
    products: state.products,
    displayProducts: state.products.displayProducts,
  };
};

const mapDispatchToProps = { addProductsToCart, getProducts, removeInventory, getSingleProduct }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);