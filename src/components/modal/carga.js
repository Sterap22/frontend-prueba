import React from 'react'
import Modal from 'react-bootstrap/Modal';

export default function Carga(props) {
    
  return (
    <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Loading...</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor espere!</Modal.Body>
    </Modal>
  )
}
