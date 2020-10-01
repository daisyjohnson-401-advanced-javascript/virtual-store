// define initial state
const initialState = {
  products:[
    {category:'firstcategory', name: 'Product One', description: 'product', price:'$1.00', invetory: 1},
    {category:'secondcategory', name: 'Product Two', description: 'product', price:'$1.00', invetory: 1},
    {category:'thirdcateogry', name: 'Product Three', description: 'product', price:'$1.00', invetory: 1},
  ],
  displayProducts: []
}

// TODO define reducer
export default ( state = initialState, action) => {

  
  const{ type, payload } = action;

  switch (type) {

    case 'CHANGE':
      let displayProducts = state.products.filter(product => {
        return product.category === payload;
      });
     console.log('Products', displayProducts);
    return {...state, displayProducts};
   
    default:
      return state;
  }
};
