import React from 'react';
import { Row, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

import { OrderResumeCard, Title, Body, Text, PriceText } from './styled';
import { formatMoney } from '../../../helpers/CurrencyHelper';

export default function OrderResume({ cart, goToCheckout }) {

  function handlePrice(price) {
    return formatMoney(price, ".", ",");
  }

  console.log('cart => ', cart);

  return (
    <OrderResumeCard>
      <Title as='h4'>Resumo do Pedido</Title>
      <Body>
        <Row>
          <Text>Qte. de Produtos </Text>
          <Text>{cart.orderItemsAmount}</Text>
        </Row >
        <Row>
          <Text>SubTotal </Text>
          <Text>R$ {handlePrice(cart.orderSubAmount)}</Text>
        </Row>
        <Row>
          <Text>Frete </Text>
          <Text>R$ {handlePrice(cart.orderShippingAmount)}</Text>
        </Row>
        <Row>
          <PriceText>Total </PriceText>
          <PriceText>R$ {handlePrice(cart.orderAmount)}</PriceText>
        </Row>
        <small> à vista no boleto</small>

        <Button className="ml-1" variant="primary" size="lg" block onClick={goToCheckout}><FaShoppingCart />&nbsp;Finalizar Compra</Button>
      </Body >
    </OrderResumeCard >
  );
}