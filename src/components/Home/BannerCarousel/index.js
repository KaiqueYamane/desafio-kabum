import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import { BannerCarouselContainer, Image } from './styled';
import bannerFreteGratis from '../../../assets/imgs/banner-frete-gratis.jpg';
import bannerBlackFriday from '../../../assets/imgs/banner-black-friday.png';
import bannerLojaVirtual from '../../../assets/imgs/banner-loja-virtual.png';

export default function BannerCarousel() {
  return (
    <BannerCarouselContainer>
      <Carousel>
        <Carousel.Item interval={5000}>
          <Image className="d-block w-100" src={bannerBlackFriday} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image className="d-block w-100" src={bannerFreteGratis} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image className="d-block w-100" src={bannerLojaVirtual} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </BannerCarouselContainer>
  );
}