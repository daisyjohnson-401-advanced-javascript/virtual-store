import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#eee',
    padding: theme.spacing(1),
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',

  },


}));

const Footer = () => {

  const classes = useStyles(); 
  
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="left" gutterBottom>
        &copy; 2020 Daisy Johnson
      </Typography>
      <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
        React + Redux + Material UI
        </Typography>
    </footer>
  );
};

export default Footer;