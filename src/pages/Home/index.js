import React from 'react';

import { Container } from './styled';
import BannerCarousel from '../../components/Home/BannerCarousel';
import ProductList from '../../components/Home/ProductList';

export default function Home() {
  return (
    <Container>
      <BannerCarousel />
      <ProductList />
    </Container>
  );
}