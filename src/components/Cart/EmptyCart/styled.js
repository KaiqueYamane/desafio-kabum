import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import { primaryColor } from '../../../config/colors'

export const CartCard = styled(Card)`
  margin-bottom: 2rem;
`;

export const Title = styled(Card.Header)`
  color: ${primaryColor};
  background-color: #E2DDDC;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  
  button svg {
    color: black;
  }
`;

export const Body = styled(Card.Body)`
  button {
    font-size: 24px;
  }
`;

export const Text = styled(Card.Text)`
  font-size: 32px;
  margin: 40px 0px;
`;
