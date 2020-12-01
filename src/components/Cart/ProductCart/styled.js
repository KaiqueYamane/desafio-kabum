import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import { primaryColor } from '../../../config/colors'

export const ProductCard = styled(Card)`
  margin-bottom: 2rem;
`;

export const Title = styled(Card.Header)`
  background-color: #E2DDDC;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  button svg {
    color: black;
  }
`;

export const Body = styled(Card.Body)`
  .cursor-pointer {
    cursor: pointer;
  } 
`;

export const Box = styled.div`
  background: rgb(245, 245, 245);
  border: 0.5px solid rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 2px;
  border-radius: 2px;
  min-height: 36px;
  margin-bottom: 18px;

  .amount-title {
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: ${primaryColor};
    font-weight: bold;
  }
`;

export const Image = styled.img`
  width: 25%;
  height: 160px;
`;

export const ProductInfo = styled.div``;

export const ProductName = styled.p`
  padding: 16px;
  height: 150px;
  font-size: 24px;
  align-items: center;
  font-weight: bold;
  margin-bottom: .75rem;
  position: relative;
  display: inline-block;
  word-wrap: break-word;
  overflow: hidden;
  height: 2.7em;
  line-height: 1em;
`;

export const ProductUnitPrice = styled.p`
  padding: 16px;
`;

export const ProductQuantity = styled.div`
  height: 100%;
  font-size: 24px;
  width: 32%;
  font-weight: 700;
  padding: 0;
  text-align: center;

  ${Box} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductQuantityInput = styled.input`
  border-radius: 0;
  outline: 0;
  color: #000;
  background: rgb(245, 245, 245);
  border: 0;
  padding: 0;
  text-align: center;
  width: 40%;
  font-size: 24px;
  height: 3rem;
  display: table-cell;
  vertical-align: bottom;
`;

export const ProductAmount = styled.div`
  height: 100%;
  width: 45%;
  text-align: center;

  p {
    margin-bottom: 0.25rem
  }

  ${Box} {
    .amount-title {
      font-size: 16px;
    }

    .amount-description {
      color: rgb(121, 121, 121);
      font-size: 12px;
      font-weight: normal;
    }

    .amount {
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${primaryColor};
      font-size: 18px;
      line-height: 20px;
      width: 100%;
      padding: 0px 16px;
      min-height: 36px;
    }
  }
`;
