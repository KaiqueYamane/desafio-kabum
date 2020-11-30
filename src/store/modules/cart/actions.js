import * as types from '../types';

export function addProductToCart(product) {
  return {
    type: types.ADD_PRODUCT_CART,
    product
  };
};