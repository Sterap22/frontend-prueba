import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logeo } from '../../interfaces/loginservice';
import './login.css'

export default function Login() {
    const [dataLogin, sedataLogin] = useState(formLogin)

    function formLogin() {
        return {
            correo:'',
            clave:''
        }

    }
   const handleChange =(event) => {
    event.preventDefault();
    dataLogin.correo = document.getElementById('correo').value
    dataLogin.clave = document.getElementById('clave').value
    if (dataLogin.correo !== null && dataLogin.clave !== null) {
        logeo(dataLogin)
    }
   }
  return (
    <Form className="FormFlot" onSubmit={(e)=>{handleChange(e)}}>
      <h4 className="text-center">Iniciar sesión</h4>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" id="correo"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" id="clave"/>
      </Form.Group>
      <Button variant="primary" type="submit" className="Loginbuttom">
        Iniciar sesión
      </Button>
    </Form>
  )
}
