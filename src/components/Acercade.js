import React from 'react';
import '../App.css'
import imag1 from "../images/act2.jpg";
import './Acercade.css';

export default function Acercade(){
    return(
        <div className = "acercade_cont">
        
        <div className = "contenedor-imagen">
          <img src={imag1} className="img-fluid imagen_acerca" alt="imag-pensionados"></img>
        </div>

              <hi className = "title"> Acerca de </hi>
              <div className = "text"> 
                <p>VIDA FELIZ nació con el propósito de hacer más feliz la vida de las personas jubiladas y pensionadas.
              Por esta razón, se creó una página web donde se pudieran encontrar muchas actividades tanto virtuales como presenciales
              para realizar, sin necesidad de buscar por otras partes la descripción, el contanto, los organizadores o el acceso.
              ¡Esperamos que disfrutes esta página tanto como nosotros disfrutamos hacerla!</p> 
              </div>

        </div>
    );
}