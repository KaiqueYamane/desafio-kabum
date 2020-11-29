import React, { useEffect } from 'react';

import { Title } from './styled';

export default function ProductDescription() {
  useEffect(() => {
    console.log('ProductDescription')
  }, []);

  return (
    <>
      <Title>PRODUCT-DESCRIPTION</Title>
    </>
  );
}