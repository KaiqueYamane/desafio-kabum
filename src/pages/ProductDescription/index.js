import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { addProductToCart } from '../../store/modules/cart/actions';

export default function ProductDescription() {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ProductDescription');
  }, []);

  function addProduct(e) {
    e.preventDefault();

    dispatch(addProductToCart());
  }

  return (
    <>
      <Title>PRODUCT-DESCRIPTION</Title>
      <button type='button' onClick={addProduct}>ADD PRODUTO</button>
    </>
  );
}