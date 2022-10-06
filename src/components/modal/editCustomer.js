import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ActualizarCliente } from '../../interfaces/customerServices';

export default function EditCustomer(props) {
    const [dataLogin, sedataLogin] = useState(props.data)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleFormContact = (e) => {
        sedataLogin({ ...dataLogin, [e.target.name]: e.target.value });
    }
    const handleChange =(event) => {
          event.preventDefault();
          if (dataLogin !== '' || dataLogin !== null) {
            ActualizarCliente(dataLogin);
            handleClose();
          }
    }
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Editar
      </Button>

          <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                  <Modal.Title>Editar informacón</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Form onSubmit={(e) => { handleChange(e) }}>
                      <h4 className="text-center">Cliente</h4>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Nombre</Form.Label>
                          <Form.Control type="text" placeholder="Enter name" name="names" onChange={(e) => { handleFormContact(e) }} value={dataLogin.names} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Apellido</Form.Label>
                          <Form.Control type="text" placeholder="Enter last name" name="last_name" onChange={(e) => { handleFormContact(e) }} value={dataLogin.last_name} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Documento</Form.Label>
                          <Form.Control type="number" placeholder="Password" name="document" onChange={(e) => { handleFormContact(e) }} value={dataLogin.document} />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicPassword">
                          <Form.Label>Ciudad</Form.Label>
                          <Form.Control type="select" placeholder="Password" name="city_id" onChange={(e) => { handleFormContact(e) }} value={dataLogin.city_id} />
                      </Form.Group>
                      <Button variant="primary" type="submit" className="Loginbuttom">
                          Actualizar
                      </Button>
                  </Form>
              </Modal.Body>
              <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
              </Modal.Footer>
          </Modal>
    </>
  )
}
