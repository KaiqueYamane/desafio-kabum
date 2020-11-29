import { createStore } from 'redux';

const initialState = {
  cart: []
}

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case 'ADD_PRODUCT_CART':
      return state;

    case 'REMOVE_PRODUCT_CART':
      return state;

    case 'INCREASE_PRODUCT_AMOUNT':
      return state;

    case 'DECREASE_PRODUCT_AMOUNT':
      return state;

    case 'CLEAN_CART':
      return state;

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;