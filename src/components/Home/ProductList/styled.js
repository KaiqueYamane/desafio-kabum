import styled from 'styled-components';
import { InputGroup, Row, Col } from 'react-bootstrap';

export const Title = styled.h1`
  color: white;
`;

export const ProductRow = styled(Row)`
  margin-bottom: 2rem;
`;

export const ProductItem = styled(Col)`
  .card {
    height: 30rem;
  }
`;

export const Form = styled(InputGroup)`
  padding: 16px;
`;