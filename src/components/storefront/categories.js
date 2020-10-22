import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { changeCategory, getCategory } from '../../store/categories';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(1),
    paddingRight: 10,
  },
}));

const Categories = props => {
const classes = useStyles();
  let categoriesMap = props.category.categories;
  


  useEffect(() => {
    props.getCategory();
  }, [props])


  return (
    <Container className={classes.cat}>
    <Grid container justify='flex-end' className={classes.categories}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group"  >
        {Object.keys(categoriesMap).map(category => {
         return <Button 
          key={category.displayName} 
          onClick={() => props.changeCategory(categoriesMap[category])}>
            {categoriesMap[category].name}
          </Button>
          })}
      </ButtonGroup>
      </Grid>
      <div className={classes.details}>
        <Typography variant='h5'>
          {props.activeCategory.name}
        </Typography>
      </div>
   </Container> 
  )
}

const mapStateToProps = state => {
  return{
    category: state.categories,
    activeCategory: state.categories.activeCategory,

  }
}

const mapDispatchToProps = { changeCategory, getCategory };

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Categories);