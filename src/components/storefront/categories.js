import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  categories: {
    margin: theme.spacing(3),
  },
}));

const Categories = props => {
  const classes = useStyles();
  let categoriesMap = props.category.categories;
  return (
    <section className={classes.categories}>
      <Typography variant="h4">Check out our stuff!</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
        {categoriesMap.map(category => 
        <Button 
          key={category.displayName} 
          onClick={() => props.changeCategory(category)}>
            {category.displayName}
          </Button>
          )}
      </ButtonGroup>
    </section>
  )
}

const mapStateToProps = state => {
  return{
    category: state.categories,

  }
}

const mapDispatchToProps = { changeCategory };

export default connect(
  mapStateToProps, 
  mapDispatchToProps
  )(Categories);