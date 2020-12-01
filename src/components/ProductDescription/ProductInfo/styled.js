import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import { primaryColor } from '../../../config/colors';

export const ProductDescriptionCard = styled(Card)``;

export const Title = styled(Card.Header)`
  background-color: #E2DDDC;
  padding: 16px;
  align-items: center;
  display: flex;
  font-weight: bold;
`;

export const Body = styled(Card.Body)`
  .row {
    padding: 0px 16px;
  }

  .installment {
    margin-bottom: 8px;
  }

  button {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Text = styled(Card.Text)`
  margin-bottom: 0.5rem;
`;

export const PriceText = styled(Card.Text)`
  color: ${primaryColor};
  padding-top: 1rem;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 0;

  small {
    height: fit-content;
  }
`;

export const Image = styled.img`
  width: 300px;
  height: 400px;
`;

export const TextDescription = styled(Card.Text)`
  font-size: 24px;
  margin-top: 3rem;
`;