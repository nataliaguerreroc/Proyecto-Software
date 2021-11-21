import React from 'react';
import '../App.css';
import './inicio.css';
import imag1 from "../images/act2.jpg";


export default function Inicio(){
    return(
        <div className= "contenedor-imagen">  
        <img src={imag1} className="img-fluid imagen_inicio" alt="imag-pensionados"></img>
        </div>
    );
}