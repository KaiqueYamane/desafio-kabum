import React from 'react';
import { Modal } from 'react-bootstrap';

import './loading.scss'

const Loading = () => {
  return (
    <Modal
      show={true}
      className="modal-container custom-map-modal"
      centered
    >
      {/* <Modal.Body> */}
      <div className="loading">
        <div className="loading__box">
          <div className="loading__animate"></div>
        </div>
      </div>
      {/* </Modal.Body> */}
    </Modal>
  )
}

export default Loading;