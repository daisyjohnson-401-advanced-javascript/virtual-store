// define initial state
const initialState = {
  categories:[
    {category:'firstcategory', name: 'Product One', description: 'product', price:'$1.00', invetory: 0},
    {category:'secondcategory', name: 'Product Two', description: 'product', price:'$1.00', invetory: 0},
    {category:'thirdcateogry', name: 'Product Three', description: 'product', price:'$1.00', invetory: 0},
  ],
}

// TODO define reducer
export default ( state = initialState, action) => {

  
  const{ type, payload } = action;

  switch (type) {
    case 'CHANGE':
    console.log('product change', payload);
    return state;

    default:
      return state;
  }
};
