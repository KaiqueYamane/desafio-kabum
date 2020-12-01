import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { ProductCard, ProductTitle, ProductPrice, ProductInfo, ImageDiv, ImageCard } from './styled';
import { addProductToCart } from '../../../store/modules/cart/actions';
import { formatMoney } from '../../../helpers/CurrencyHelper';

export default function Product({ product }) {
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    history.push({
      pathname: `product/${product.id}`,
      state: { product }
    });
  }

  function handleBuyProduct(e) {
    e.preventDefault();

    dispatch(addProductToCart(product));
    history.push(`/cart`);
  }

  function handlePrice(price) {
    return formatMoney(price, ".", ",");
  }

  return (
    <>
      {
        product &&
        <ProductCard>
          <ImageDiv onClick={handleClick}>
            <ImageCard variant="top" src={product.image} />
          </ImageDiv>
          <ProductInfo>
            <ProductTitle onClick={handleClick}>{product.title}</ProductTitle>
            <ProductPrice>
              <span>R$ {handlePrice(product.price)}</span>
              <small> à vista no boleto</small>
            </ProductPrice>
            <Button variant="secondary" size="lg" block onClick={handleBuyProduct}>COMPRAR</Button>
          </ProductInfo>
        </ProductCard>
      }
    </>
  );
}