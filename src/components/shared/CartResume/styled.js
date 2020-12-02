import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { Popover, Row, Col, Button } from 'react-bootstrap';

export const CartResumePopover = styled(Popover)`
  width: 500px !important;
`;

export const CartIcon = styled(FaShoppingCart)`
  color: black;
  margin: 0px 6px 0px 6px;
`;

export const SubTitleRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-Bottom: 1rem;
  font-weight: bold;
`;

export const ProductTitleCol = styled(Col)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 60%;
`;

export const GoCart = styled(Button)`
  margin-top: 2rem;
`;