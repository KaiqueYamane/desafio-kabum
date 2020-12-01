import styled from 'styled-components';
import { Modal } from 'react-bootstrap';

import { primaryColor } from '../../../config/colors';

export const Header = styled(Modal.Header)`
  background-color: #E2DDDC;
  padding: 8px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;

  button {
    color: ${primaryColor};
  }
`;

export const Title = styled(Modal.Title)`
  color: ${primaryColor};
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const Body = styled(Modal.Body)`
  color: Black;
  font-size: 24px;
`;