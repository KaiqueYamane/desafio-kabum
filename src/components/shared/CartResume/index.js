import React, { useState, useRef } from 'react';
import { Overlay, Popover, Row, Col, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import { CartIcon, CartResumePopover, SubTitleRow, ProductTitleCol, GoCart } from './styled';
import { formatMoney } from '../../../helpers/CurrencyHelper';

export default function CartResume() {
  const { cartReducer: cart } = useSelector(state => state);
  const history = useHistory();
  const linkElement = useRef(null);
  const [show, setShow] = useState(false);

  function goToCheckout(e) {
    e.preventDefault();

    setShow(false);
    history.push('/cart');
  }

  function handlePrice(price) {
    return formatMoney(price, ".", ",");
  }

  return (
    <>
      <Link to='/cart'
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        ref={linkElement}
      >
        <CartIcon size={24} />
      </Link>

      <Overlay
        show={show}
        onHide={() => setShow(false)}
        placement='bottom'
        target={linkElement}
      >
        <CartResumePopover
          id={`popover-positioned-bottom`}
          onMouseEnter={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
        >
          <Popover.Title as="h2">Seu Carrinho</Popover.Title>
          <Popover.Content>
            {
              cart.cart.products.length
                ?
                <>
                  <SubTitleRow>
                    <Col sm={7}>PRODUTO</Col>
                    <Col sm={5}>QTE*VALOR</Col>
                  </SubTitleRow>

                  {
                    cart.cart.products.map((item, index) =>
                      <Row>
                        <ProductTitleCol sm={7}>{item.product.title}</ProductTitleCol>
                        <Col sm={5}>
                          <strong>{item.quantity}</strong> * R$ {handlePrice(item.product.price)}
                        </Col>
                      </Row>
                    )
                  }

                  <GoCart variant="primary" size="lg" block onClick={goToCheckout}><FaShoppingCart />&nbsp;Finalizar Compra</GoCart>
                </>
                :
                <p>Seu carrinho esta vazio.</p>
            }
          </Popover.Content>
        </CartResumePopover>
      </Overlay>
    </>
  );
}