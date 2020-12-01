import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const OrderResumeCard = styled(Card)`
  margin-bottom: 2rem;
`;

export const Title = styled(Card.Header)`
  background-color: #E2DDDC;
  padding: 8px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
`;

export const Body = styled(Card.Body)`
  background-color: #F9F9F9;
  display: block;

  .row {
    display: flex;
    justify-content: space-between;
    padding: 0px 8px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  small {
    width: 106%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
    padding: 0px 8px;
  }
`;

export const Text = styled(Card.Text)`
  margin-bottom: 0.5rem;
`;

export const PriceText = styled(Card.Text)`
  border-top: 2px solid grey;
  padding-top: 1rem;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 0;
  margin-top: 1rem;

  &:nth-child(1) {
    width: 40%;
  }

  &:nth-child(2) {
    width: 60%;
    text-align: right;
  }
`;