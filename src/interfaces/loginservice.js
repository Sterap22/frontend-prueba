import { urlAPILog } from "../utils/config";
import axios from 'axios'

export function logeo (data) {
    axios.post(`${urlAPILog}/Usuario/loginSesion`,JSON.stringify(data),{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }).then(succ=>{
        if (succ.data.mensaje === "Se inicio sesion exitosamente") {
            localStorage.setItem('token', "Hola")
            window.location.href ='/'
        }
    })
}
export function regitro (data){
    axios.post(`${urlAPILog}/Usuario/RegisterUser`,JSON.stringify(data),{
        headers: {
            "accept": "*/*",
            "Content-Type": "application/json"
        }
    }).then(succ=>{
        console.log(succ.data);
        if (succ.data.mensaje === "Se inicio sesion exitosamente") {
            localStorage.setItem('token', "Hola")
            window.location.href ='/'
        }
    })
}