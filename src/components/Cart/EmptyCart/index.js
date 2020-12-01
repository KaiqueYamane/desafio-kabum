import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FaRegSadTear } from 'react-icons/fa';

import { CartCard, Title, Body, Text } from './styled';

export default function EmptyCart() {
  const history = useHistory();

  function goToHomePage() {
    history.push('/home');
  }

  return (
    <CartCard className='text-center'>
      <Title as='h1'><FaRegSadTear />&nbsp;Que Pena! Parece que seu carrinho esta vazio!</Title>
      <Body>
        <Text>Que tal aproveitar milhares de ofertas sem sair de casa? <br /> Confina nosso catálogo de produtos clicando no link abaixo e aproveite!</Text>
        <Button variant='link' onClick={goToHomePage}>Clique aqui e aproveite nossas ofertas</Button>
      </Body>
    </CartCard >
  );
}