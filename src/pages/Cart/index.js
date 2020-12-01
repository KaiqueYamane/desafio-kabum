import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

import { Container, CartCard, Title, Body } from './styled';
import ProductCart from '../../components/Cart/ProductCart';
import EmptyCart from '../../components/Cart/EmptyCart';
import OrderPlacedModal from '../../components/Cart/OrderPlacedModal';
import OrderResume from '../../components/Cart/OrderResume';
import { cleanCart } from '../../store/modules/cart/actions';

export default function Cart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { cartReducer: cart } = useSelector(state => state);
  const [show, setShow] = useState(false);


  function goToCheckout(e) {
    e.preventDefault();

    setShow(true);
  };

  function handleModalClose() {
    setShow(false);
    dispatch(cleanCart());
    history.push('/home');
  }

  return (
    <Container>
      {
        cart.cart.products.length
          ?
          <CartCard>
            <Title as='h1'><FaShoppingCart size={32} />&nbsp;Produtos adicionados ao carrinho</Title>
            <Body>
              <Row>
                <Col sm={9}>
                  {cart.cart.products.map((item, index) => <ProductCart item={item} index={index} />)}
                </Col>
                <Col sm={3}>
                  <OrderResume cart={cart.cart} goToCheckout={goToCheckout} />
                </Col>
              </Row>
              <OrderPlacedModal show={show} onHide={() => handleModalClose()} />
              <Button variant='link'>Continuar comprando</Button>
            </Body>
          </CartCard>
          :
          <EmptyCart />
      }
    </Container>
  );
}