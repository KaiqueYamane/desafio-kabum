import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';

import axios from '../../../services/axios';
import Product from '../Product';
import { Title, ProductRow, ProductItem } from './styled';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data, status } = await axios.get('/products');
    if (status === 200) {
      const _arraySliced = arraySliced(data, 4);
      setProducts([..._arraySliced]);
    } else
      setProducts([]);
  }

  function arraySliced(base, maximo) {
    let resultado = [[]];
    let grupo = 0;

    for (let indice = 0; indice < base.length; indice++) {
      if (resultado[grupo] === undefined)
        resultado[grupo] = [];

      resultado[grupo].push(base[indice]);

      if ((indice + 1) % maximo === 0)
        grupo = grupo + 1;
    }

    return resultado;
  }

  return (
    <Container>
      <Row>
        <Title>Lançamentos</Title>
      </Row>

      {
        products.map(group =>
          <ProductRow key={Math.random()}>
            {
              group.map(item =>
                <ProductItem key={item.id}>
                  <Product product={item} />
                </ProductItem>
              )
            }
          </ProductRow>
        )
      }

    </Container>
  );
}