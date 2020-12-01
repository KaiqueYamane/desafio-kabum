import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { FaTrashAlt, FaPlus, FaMinus } from 'react-icons/fa';

import { ProductCard, Title, Body, Image, ProductInfo, ProductName, ProductUnitPrice, ProductQuantity, ProductQuantityInput, ProductAmount, Box } from './styled';
import { increaseProductQty, decreaseProductQty, removeProductFromCart } from '../../../store/modules/cart/actions';
import { formatMoney } from '../../../helpers/CurrencyHelper';

export default function ProductCart({ item, index }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleProductIndex() {
    const number = index + 1;
    return `Produto ${number.toString().length === 1
      ? `0${number}`
      : number}`;
  }

  function removeProduct(e) {
    e.preventDefault();

    dispatch(removeProductFromCart(item.product));
  }

  function increaseProductQuantity(e) {
    e.preventDefault();

    dispatch(increaseProductQty(item.product));
  }

  function decreaseProductQuantity(e) {
    e.preventDefault();

    dispatch(decreaseProductQty(item.product));
  }

  function goToProductDescription(e) {
    e.preventDefault();

    history.push(`/product/${item?.product?.id}`);
  }

  function handlePrice(price) {
    return formatMoney(price, ".", ",");
  }

  return (
    <ProductCard>
      <Title as='h4'>
        {handleProductIndex()}
        <Button variant="link" onClick={removeProduct}>
          <FaTrashAlt />
        </Button>
      </Title>
      <Body>
        <Row>
          <Col>
            <Box className='d-flex align-items-center cursor-pointer' onClick={goToProductDescription}>
              <Image src={item?.product?.image} />
              <ProductInfo>
                <ProductName>{item?.product?.title}</ProductName>
                <ProductUnitPrice>
                  R$&nbsp;{handlePrice(item.product.price)}
                  <small> à vista no boleto</small>
                </ProductUnitPrice>
              </ProductInfo>
            </Box>
          </Col>
          <Col className='d-flex align-items-center justify-content-around'>
            <ProductQuantity>
              <Box>
                <div className="amount-title">
                  <p>Quantidade</p>
                </div>
              </Box>
              <Box>
                <Button variant="primary" className="quantity-minus" onClick={decreaseProductQuantity} disabled={item.quantity === 1}><FaMinus /></Button>
                <ProductQuantityInput className="quantity qt-items-cart" type="text" disabled value={item.quantity}></ProductQuantityInput>
                <Button variant="primary" className="mais-quant" onClick={increaseProductQuantity}><FaPlus /></Button>
              </Box>
            </ProductQuantity>
            <ProductAmount>
              <Box>
                <div className="amount-title">
                  <p>Total</p>
                  <p className="amount-description">(à vista no boleto)</p>
                </div>
              </Box>
              <Box>
                <div className="amount">
                  <span>R$&nbsp;{handlePrice(item.amount)}</span>
                </div>
              </Box>
            </ProductAmount>
          </Col>
        </Row>
      </Body>
    </ProductCard>
  );
}