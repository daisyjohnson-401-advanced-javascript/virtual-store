import React from 'react';
import { connect } from 'react-redux';
import { changeCategory } from '../../store/categories';

const Categories = props => {
  let categoriesMap = props.category.categories;
  return (
    <section className="categories">
      <ul>
        {categoriesMap.map(category => 
          <li key={category.displayName} onClick={() => props.changeCategory(category)}>{category.displayName}</li>
          )}
      </ul>
      
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