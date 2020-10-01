import reducer, { changeCategory } from '../store/categories';

it('should have initial state', () => {

  const state = reducer(undefined, {});

  expect(state.activeCategory).toEqual('Category 1');
})