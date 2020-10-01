let initialState = {
  categories: [
    {normalizedName: 'firstcategory', displayName:'Category 1', description:'first category' },
    {normalizedName: 'secondcategory', displayName:'Category 2', description:'second category' },
    {normalizedName: 'thirdcategory', displayName:'Category 3', description:'third category' },
  ],
  activeCategory: 'Category 1',
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE':
  
    return {...state, activeCategory: payload};

    default:
      return state;
  }

};

export const changeCategory = (category) => {
  return {
    type: 'CHANGE',
    payload: category,
  };
};