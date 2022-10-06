import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { regitro } from '../../interfaces/loginservice';

export default function Register() {
  const [dataLogin, sedataLogin] = useState(formLogin)

    function formLogin() {
        return {
            nombre:'',
            apellido:'',
            correo:'',
            clave:''
        }

    }
    const handleFormContact = (e) => {
      sedataLogin({ ...dataLogin, [e.target.name]: e.target.value });
  }
  const handleChange =(event) => {
        event.preventDefault();
        if (dataLogin.apellido !=='' && dataLogin.nombre !== '' 
          && dataLogin.correo !== '' && dataLogin.clave !== '') {
            regitro(dataLogin)
        }
  }
  return (
    <Form className="FormFlot" onSubmit={(e)=>{handleChange(e)}}>
      <h4 className="text-center">Registro</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="nombre" onChange={(e) => { handleFormContact(e) }} value={dataLogin.nombre}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Apellido</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" name="apellido" onChange={(e) => { handleFormContact(e) }} value={dataLogin.apellido}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="correo" onChange={(e) => { handleFormContact(e) }} value={dataLogin.correo} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="clave" onChange={(e) => { handleFormContact(e) }} value={dataLogin.clave}/>
      </Form.Group>
      <Button variant="primary" type="submit" className="Loginbuttom">
        Registrate
      </Button>
    </Form>
  )
}
