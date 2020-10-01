import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';

import Typography from '@material-ui/core/Typography';


const CurrentCategory = props => {
console.log('Current category', props)
  return (
  <>
 <Typography variant="h5"> Selected category: {props.activeCategory.displayName}</Typography>
  </>
  )
}

const mapStateToProps = (state) => {
  return{
    activeCategory: state.categories.activeCategory,

  };
};

const mapDispatchToProps = { changeCategory };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentCategory);