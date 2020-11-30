import styled from 'styled-components';

import { Card } from 'react-bootstrap';

export const ProductCard = styled(Card)`
  cursor: pointer;
`;

export const ImageCard = styled(Card.Img)`
  width: 200px;
  height: 250px;
  padding: 1rem;
`;

export const ProductTitle = styled(Card.Title)`
  margin-bottom: .75rem;
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  height: 3.6em;
  line-height: 1.2em;
`;

export const ProductPrice = styled(Card.Text)`
  cursor: default;

  font: 700 12px "Open Sans",Arial,Helvetica,sans-serif;
  margin: 0 0 3px;

  span {
    font: 800 24px/16px "Open Sans",Arial,Helvetica,sans-serif;
    letter-spacing: -1px;
  }

  small {
    font-size: 12px;
  }
`;

export const ProductInfo = styled(Card.Body)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageDiv = styled.div`
  text-align: center;
`;
