import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './home.css'
import { dataCusto, EliminarCliente, GetCustomer } from '../../interfaces/customerServices';
import Carga from '../../components/modal/carga';
import EditCustomer from '../../components/modal/editCustomer';

export default function Home() {
    const [show, setShow] = useState(true);
    useEffect(() => {
        GetCustomer();
        setTimeout(()=>{
            console.log('====================================');
            console.log(dataCusto);
            console.log('====================================');
            setShow(false)
        },2000)
    }, [])
    const deleteCli=(id)=> {
        setShow(true)
        EliminarCliente(id)
    }
  return (
    <>
    {
        show?(
            <Carga show={show}/>
        ):(
            <div className="tableHome">
                <h4>Clientes</h4>
                <Button variant="success" className="addRegistro">Crear registro</Button>
                <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Documento</th>
                    <th>Ciudad</th>
                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dataCusto[0].map((x)=>{
                            return(
                                <>
                                <tr>
                                    <td>{x.code}</td>
                                    <td>{x.names}</td>
                                    <td>{x.last_name}</td>
                                    <td>{x.document}</td>
                                    <td>{x.city_id}</td>
                                    <td>
                                        <EditCustomer data={x}/>{" "}
                                        <Button variant="danger" onClick={()=>{deleteCli(x.code)}}>Eliminar</Button>
                                    </td>
                                </tr>
                                </>
                            )
                        })
                    }
                    
                </tbody>
                </Table>
            </div>
        )
    }
    </>
  )
}
