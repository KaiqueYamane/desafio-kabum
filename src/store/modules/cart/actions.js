import * as types from '../types';

export function addProductToCart(product) {
  return {
    type: types.ADD_PRODUCT_CART,
    product
  };
};

export function increaseProductQty(product) {
  return {
    type: types.INCREASE_PRODUCT_QTY,
    product
  };
};

export function decreaseProductQty(product) {
  return {
    type: types.DECREASE_PRODUCT_QTY,
    product
  };
};

export function removeProductFromCart(product) {
  return {
    type: types.REMOVE_PRODUCT_CART,
    product
  };
};

export function cleanCart() {
  return {
    type: types.CLEAN_CART
  };
};