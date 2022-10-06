import axios from 'axios'
import { urlAPICliente } from '../utils/config'

export const  dataCusto =[]

export function GetCustomer () {
    axios.get(`${urlAPICliente}/Seller/TraerClientes`,{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }).then(succ=>{
        console.log(succ.data.length);
        if (succ.data.length > 0 && dataCusto.length === 0) {
            dataCusto.push(succ.data)
        }
    })
}
export function ActualizarCliente (data) {
    axios.put(`${urlAPICliente}/Seller/ActualizarCliente`,JSON.stringify(data),{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }).then(succ=>{

        setTimeout(()=>{
            window.location.href ='/'
        },1000)
    })
}
export function EliminarCliente (data) {
    axios.delete(`${urlAPICliente}/Seller/EliminarCliente/${data}`,{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }).then(succ=>{
        console.log(succ.data.length);
        setTimeout(()=>{
            window.location.href ='/'
        },1000)
    })
}
