import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styled';
import ProductNotFound from '../../components/ProductDescription/ProductNotFound';
import ProductInfo from '../../components/ProductDescription/ProductInfo';
import Loading from '../../components/shared/Loading';
import axios from '../../services/axios';

export default function ProductDescription(props) {
  const history = useHistory();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { id } = props?.match?.params;
    const _product = props?.location?.state?.product;

    if (_product) {
      setProduct(_product);
    } else {
      if (id)
        fetchData(id);
      else
        history.push('/');
    }
  }, []);

  async function fetchData(id) {
    setLoading(true);
    const { data, status } = await axios.get(`/products/${id}`);
    if (status === 200) {
      setProduct(data);
    } else
      setProduct(null);
    setLoading(false);
  }

  return (
    <Container>
      {
        product
          ? <ProductInfo product={product} />
          : (!loading && <ProductNotFound />)
      }
      { loading && <Loading />}
    </Container >
  );
}