import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Title } from './styled';

export default function Cart() {
  const cart = useSelector(state => state);

  useEffect(() => {
    console.log('cart => ', cart);
  }, []);

  return (
    <>
      <Title>CART</Title>
    </>
  );
}