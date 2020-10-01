let initialState = {
  categories: [
    {name: 'firstcategory', displayName:'Category 1', description:'first category' },
    {name: 'secondcategory', displayName:'Category 2', description:'second category' },
    {name: 'thirdcategory', displayName:'Category 3', description:'third category' },
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

export const changeCategory = (name) => {
  return {
    type: 'CHANGE',
    payload: name,
  };
};