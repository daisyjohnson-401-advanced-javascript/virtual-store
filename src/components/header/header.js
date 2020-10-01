import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  toolbar: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
  },
  appBar: {
    zIndex: 1000
  },
}));

const Header = () => {

  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="relative">
    <Toolbar className={classes.toolbar}>
      <Grid container>
        <Grid item xs>
          <Typography variant="h2">
            Welcome to Daisy's Doodads!
          </Typography>
          </Grid>
        </Grid>
    </Toolbar>
    </AppBar>
  );
};

export default Header;