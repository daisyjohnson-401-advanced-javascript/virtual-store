
// State should be a list of all products
// Each product should have a category association, name, description, price, inventory count
// Create an action that will trigger the reducer to filter the product list when the active category is changed
// HINT: Different reducers can respond to the same actions
// Create a reducer that will filter the products list based on the active category
// Create an action that will trigger the reducer to reduce the stock counter
// Create a reducer that reduces the # in stock when that action is dispatched

// define initial state
const initialState = {
  products:[
    {category:'firstcategory', name: 'Product One', description: 'product', price:'$1.00', invetory: 1},
    {category:'secondcategory', name: 'Product Two', description: 'product', price:'$1.00', invetory: 1},
    {category:'thirdcateogry', name: 'Product Three', description: 'product', price:'$1.00', invetory: 1},
  ],
  displayProducts: [],
}

// TODO define reducer
export default ( state = initialState, action) => {
  const{ type, payload } = action;

  switch (type) {

    case 'CHANGE':
      console.log('product change', payload);
      let displayProducts = state.products.filter(product => {
        return product.category === payload.name;
        
      });
    
    return {...state, displayProducts};
   
    default:
      return state;
  }
};
