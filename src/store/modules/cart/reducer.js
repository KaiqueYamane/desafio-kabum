import * as types from '../types';

const initialState = {
  cart: {
    products: [],
    orderAmount: 0,
    orderSubAmount: 0,
    orderItemsAmount: 0,
    orderShippingAmount: 0,
  }
}

export default function cartReducer(state = initialState, action) {
  const { type } = action;

  switch (type) {
    case types.ADD_PRODUCT_CART: {
      const newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.product.id);
      if (index >= 0) {
        newState.cart.products[index] = {
          product: action.product,
          amount: newState.cart.products[index].amount + parseFloat(action.product.price),
          quantity: newState.cart.products[index].quantity + 1
        };
        newState.cart.orderSubAmount = newState.cart.orderSubAmount + action.product.price;
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount + 1;
        newState.cart.orderShippingAmount = newState.cart.orderShippingAmount + 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      } else {
        newState.cart = {
          products: [...newState.cart.products, {
            product: action.product,
            amount: parseFloat(action.product.price),
            quantity: 1
          }],
          orderSubAmount: newState.cart.orderSubAmount + action.product.price,
          orderItemsAmount: newState.cart.orderItemsAmount + 1,
          orderShippingAmount: newState.cart.orderShippingAmount + 0,
          orderAmount: (newState.cart.orderSubAmount + action.product.price) + (newState.cart.orderShippingAmount + 0)
        }
      }

      return newState;
    }

    case types.REMOVE_PRODUCT_CART: {
      let newState = { ...state };

      const _product = newState.cart.products.find(item => item.product.id === action.product.id);
      const _productIndex = newState.cart.products.findIndex(item => item.product.id === action.product.id);
      if (_product) {
        newState.cart.products.splice(_productIndex, 1);
        newState.cart.orderSubAmount = newState.cart.orderSubAmount - _product.amount;
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount - _product.quantity;
        newState.cart.orderShippingAmount = newState.cart.orderShippingAmount - 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }

    case types.INCREASE_PRODUCT_QTY: {
      let newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.product.id);
      if (index >= 0) {
        newState.cart.products[index] = {
          product: action.product,
          amount: newState.cart.products[index].amount + parseFloat(action.product.price),
          quantity: newState.cart.products[index].quantity + 1
        };
        newState.cart.orderSubAmount = newState.cart.orderSubAmount + action.product.price;
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount + 1;
        newState.cart.orderShippingAmount = newState.cart.orderShippingAmount + 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }

    case types.DECREASE_PRODUCT_QTY: {
      let newState = { ...state };

      const index = newState.cart.products.findIndex(item => item.product.id === action.product.id);
      if (index >= 0 && newState.cart.products[index].quantity > 1) {
        newState.cart.products[index] = {
          product: action.product,
          amount: newState.cart.products[index].amount - parseFloat(action.product.price),
          quantity: newState.cart.products[index].quantity - 1
        };
        newState.cart.orderSubAmount = newState.cart.orderSubAmount - action.product.price;
        newState.cart.orderItemsAmount = newState.cart.orderItemsAmount - 1;
        newState.cart.orderShippingAmount = newState.cart.orderShippingAmount - 0;
        newState.cart.orderAmount = newState.cart.orderSubAmount + newState.cart.orderShippingAmount;
      }

      return newState;
    }

    case types.CLEAN_CART: {
      let newState = { ...state };

      newState.cart = {
        products: [],
        orderAmount: 0,
        orderSubAmount: 0,
        orderItemsAmount: 0,
        orderShippingAmount: 0,
      };

      return newState;
    }

    default:
      return state;
  }
};