import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import imag1 from "../images/act2.jpg";
import imag2 from "../images/festival.png";
import './Sabermas.css';

export default function Sabermas(){
  let navigate = useNavigate();
    return(
        <div className = "sabermas_cont">
            <div className = "contenedor-imagen">  
                <img src={imag1} className="img-fluid imagen_sabermas" alt="imag-pensionados"></img>
            </div>
            <hi className = "title"> Festival Brújula al Sur </hi>
              <div className = "contenedor-saber">
                  <div className = "img-saber">
                  <img src={imag2} className="img-fluid imagen_sabermasfest" alt="imag-fest"></img>
                  </div>
                  <div className = "cont-text">
                    <h1>Descripción</h1>
                    <p>El Festival Brújula al Sur llega a su décima versión del 30 de noviembre al 4 de diciembre de 2021 en la ciudad de Cali, Colombia. Una fiesta de las artes escénicas, celebrada en diversos escenarios culturales de la ciudad.
                      <p>Fecha: del 30-11-21 al 4-12-21</p>
                      <p>Disponible</p></p>

                    <h1>Organizadores</h1>
                    <p> - Franciso Sierra </p>
                    <p> Director de comunicaciones</p>
                    <p> festivalbrujulalsur@gmail.com; +57 (317) 464 7870 </p>
                    <br></br>
                    <p> - Teatro la Concha </p>
                    <p> Organizadores </p>
                    <p> teatrolaconcha@gmail.com; +57 (02)8938606</p>

                    <h1>Contacto</h1>
                    <p> Ya está a la venta toda la boletería del Festival Brújula al Sur, puedes obtener tus entradas en la taquilla del Teatro la Concha (calle 4 No.10-48 / San Antonio) de lunes a sábado de 10:00 a.m. a 6:00 p.m. También por la web de COLBOLETOS pagando virtualmente con tarjeta Visa, Mastercard, American Express y cuenta corriente o de ahorros o en los puntos autorizados por COLBOLETOS.</p>
                      <br></br>
                    <button className = "exp_btn" onClick = {() => {navigate('/experiencias');}}>Experiencias</button>
                  </div>
            </div>
        </div>
    );
}