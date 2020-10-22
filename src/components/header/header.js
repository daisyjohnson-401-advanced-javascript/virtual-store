import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { ShoppingCartOutlined, Home } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      
      flexGrow: 1,
    },
    appBar:{
     backgroundColor:'#00afb9', 
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
    links: {
      textDecoration: 'none',
      color: '#fff',
      textAlign:'center',
    }
  }));

const Header = (props) => {

  const classes = useStyles();
  return (
//     <Paper className={classes.root}>
//     <AppBar className={classes.appBar} position="static">
     
      
//       <Container className={classes.title}>
//       <Toolbar className={classes.toolbar} >
//       <Typography id="title" variant="h3" component="h1" gutterBottom > The Shop</Typography>
//     </Toolbar>

//     </Container>
//     <Container className='nav'>
//     <NavBar />
//      </Container>
//     </AppBar>
    
//     </Paper>
//   );
// };
<div className={classes.root}>
<AppBar className={classes.appBar}  position="static">
  <Toolbar className={classes.toolbar}>
    
    <Typography className={classes.title} variant="h3" noWrap>
      The E-Shop
    </Typography>
    <IconButton aria-label="search" color="inherit">
    <Link className={classes.links} to='/'>
          <Home />
          </Link>
    </IconButton>
    <IconButton aria-label="display more actions" edge="end" color="inherit">
    <Link className={classes.links} to='/cart'>
        <ShoppingCartOutlined />
        <Typography variant='p' component='p'  gutterBottom>{props.cart.cartItems.length}</Typography>
      </Link> 
    </IconButton>
  </Toolbar>
</AppBar>
</div>
);
}


const mapStateToProps = state => {
  return{
    cart: state.cart,
  };
};
export default connect(mapStateToProps)(Header);