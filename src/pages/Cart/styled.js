import styled from 'styled-components';
import { Card } from 'react-bootstrap';

import { primaryColor } from '../../config/colors';

export const Container = styled.section`
  padding: 32px 40px;
`;

export const CartCard = styled(Card)``;

export const Title = styled(Card.Header)`
  background-color: #E2DDDC;
  color: ${primaryColor};
  padding: 0px 16px;
  align-items: center;
  display: flex;
`;

export const Body = styled(Card.Body)``;