import React, { useEffect, useState } from 'react';
import { Container, Row, InputGroup, FormControl, Button } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { Title, ProductRow, ProductItem, Form } from './styled';
import Loading from '../../../components/shared/Loading';
import axios from '../../../services/axios';
import Product from '../Product';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [productByParams, setProductByParams] = useState([]);
  const [productName, setProductName] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setProducts([]);
    setLoading(true);
    const { data, status } = await axios.get('/products');
    if (status === 200)
      setProducts(data);
    else
      setProducts([]);

    getProductsByParams(data);
    setLoading(false);
  }

  function getProductsByParams(data) {
    let _products = data || products;
    _products = _products.filter(item => item.title.includes(productName));

    setProductByParams(arraySliced(_products, 4));
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

  function handleSearchButton(e) {
    e.preventDefault();

    getProductsByParams(null);
  }

  return (
    <Container>
      <Row className="mt-3">
        <Title>Lançamentos</Title>
      </Row>

      <Row>
        <Form className="mb-3 search">
          <FormControl
            aria-describedby="basic-addon2"
            placeholder="Digite o nome do Produto"
            value={productName}
            onChange={e => {
              e.preventDefault();
              setProductName(e.target.value)
            }}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={handleSearchButton}><FaSearch />&nbsp;Buscar</Button>
          </InputGroup.Append>
        </Form>
      </Row>

      {
        productByParams.map(group =>
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
      { loading && <Loading />}
    </Container>
  );
}