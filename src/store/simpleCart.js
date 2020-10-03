const initialState = {
  items: [],

}

export default (state = initialState, action) => {
  const{ type, payload } = action;

    switch (type) {

      case 'Add': 
      let items = state.items;
      items.push(payload)
      return { items };
    default:
      return state;
    }
}