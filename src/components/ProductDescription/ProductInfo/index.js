import React from 'react';
import { useHistory } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';
import { FaRegCreditCard, FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { ProductDescriptionCard, Title, Body, Text, TextDescription, PriceText, Image } from './styled';
import { addProductToCart } from '../../../store/modules/cart/actions';
import { formatMoney } from '../../../helpers/CurrencyHelper';

const URL = 'https://static.kabum.com.br/conteudo/temas/001/imagens/descricao/bandeiras-parcelamento.gif';

export default function ProductInfo({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function addProduct(e) {
    e.preventDefault();

    dispatch(addProductToCart(product));
    history.push(`/cart`);
  }

  function handlePrice(price) {
    return formatMoney(price, ".", ",");
  }

  return (
    <Row>
      <Col sm={9}>
        <ProductDescriptionCard>
          <Title as='h2'>{product.title}</Title>
          <Body>
            <Row>
              <Col sm={4}>
                <Image alt='image' src={product.image} />
              </Col>
              <Col sm={8}>
                <Text>{product.category}</Text>
                <TextDescription>{product.description}</TextDescription>
              </Col>
            </Row>
          </Body>
        </ProductDescriptionCard>
      </Col>
      <Col sm={3}>
        <ProductDescriptionCard>
          <Body>
            <Row className='d-flex align-items-baseline'>
              <PriceText>R$ {handlePrice(product.price)}</PriceText>
              <small>&nbsp;à vista no boleto</small>
            </Row >
            <Row className='installment'>
              <Text><FaRegCreditCard />&nbsp;PARCELAMENTO</Text>
            </Row>
            <Row>
              <img height="25" alt="cards" src={URL} width="90%" />
            </Row>
            <Button variant="primary" size="lg" block onClick={addProduct}><FaCartPlus />&nbsp;Adicionar ao carrinho</Button>
          </Body>
        </ProductDescriptionCard>
      </Col>
    </Row>
  );
}