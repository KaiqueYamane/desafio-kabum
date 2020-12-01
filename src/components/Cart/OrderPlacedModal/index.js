import React from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import { Header, Title, Body } from './styled';

export default function OrderPlacedModal(props) {
  const history = useHistory();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Header closeButton>
        <Title>Compra finalizada!</Title>
      </Header>
      <Body>
        Parabéns, Você acaba de comprar os melhores produtos da internet. <br />
        Logo enviaremos um email com todos os dados de sua compra. <br />
        Agradecemos a preferência!
      </Body>
    </Modal>
  );
}