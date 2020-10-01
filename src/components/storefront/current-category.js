import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';


const CurrentCategory = props => {
console.log('Current category', props)
  return <h2>ACTIVE CATEGORY: {props.activeCategory.displayName}</h2>
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