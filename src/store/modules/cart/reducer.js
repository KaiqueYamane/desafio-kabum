import * as types from '../types';

const initialState = {
  cart: []
}

export default function cartReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case types.ADD_PRODUCT_CART: {
      const newState = { ...state };

      newState['cart'].push({
        product: action.product,
        quantity: 1
      });

      return newState;
    }

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