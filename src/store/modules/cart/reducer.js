import * as types from '../types';

const initialState = {
  cart: []
}

export default function cartReducer(state = initialState, action) {
  console.log(action);

  const { type } = action;

  switch (type) {
    case types.ADD_PRODUCT_CART:
      return state;

    case types.REMOVE_PRODUCT_CART:
      return state;

    case types.INCREASE_PRODUCT_AMOUNT:
      return state;

    case types.DECREASE_PRODUCT_AMOUNT:
      return state;

    case types.CLEAN_CART:
      return state;

    default:
      return state;
  }
};