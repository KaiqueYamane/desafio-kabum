import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { ProductCard, Title, Body, Text } from './styled';

export default function ProductNotFound() {
  const history = useHistory();

  function goToHomePage() {
    history.push('/home');
  }

  return (
    <ProductCard className='text-center'>
      <Body>
        <Text>
          Este produto não foi encontrado! <br />
          Man não deixe de aproveitar milhares de ofertas em nosso site <br />
          Confina nosso catálogo de produtos clicando no link abaixo e aproveite!
        </Text>
        <Button variant='link' onClick={goToHomePage}>Clique aqui e aproveite nossas ofertas</Button>
      </Body>
    </ProductCard >
  );
}