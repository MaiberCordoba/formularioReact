import React from "react";

const Calculadora =(props)=>{
    let resultado = 0
    if (props.op == '+'){
        resultado = parseInt(props.n1) + parseInt(props.n2)
    }
    if (props.op == '-'){
        resultado = parseInt(props.n1) - parseInt(props.n2)
    }
    if (props.op == '*'){
        resultado = parseInt(props.n1) * parseInt(props.n2)
    }
   
    if (props.op == '/'){
        if (props.n1 == '0' || props.n2 == '0'){
            resultado = 'error no es posible dividir a 0'
        }
        else {
            resultado = parseInt(props.n1) / parseInt(props.n2)
        }
       
    }
    return(
        <h5> el resultado es: {resultado} </h5>
    )  
    
}
export default Calculadora