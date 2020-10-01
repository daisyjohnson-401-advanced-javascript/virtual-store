import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#eee',
    padding: theme.spacing(6),
  },


}));

const Footer = () => {

  const classes = useStyles(); 
  
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2020 Daisy Johnson
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        React + Redux + Material UI
        </Typography>
    </footer>
  );
};

export default Footer;