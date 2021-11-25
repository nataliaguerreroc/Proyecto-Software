import React from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import imag1 from "../images/act2.jpg";
import imag3 from "../images/actividades2.jpg";
import './Sabermas.css';

export default function Sabermas(){
  let navigate = useNavigate();
    return(
        <div className = "sabermas_cont">
            <div className = "contenedor-imagen">  
                <img src={imag1} className="img-fluid imagen_sabermas" alt="imag-pensionados"></img>
            </div>
            <hi className = "title"> Actividad 1 </hi>
              <div className = "contenedor-saber">
                  <div className = "img-saber">
                  <img src={imag3} className="img-fluid imagen_sabermas" alt="imag-pensionados"></img>
                  </div>
                  <div className = "cont-text">
                    <h1>Descripción</h1>
                    <p>hola njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn
                      njsndvdksjnvksdn njdsnjksndvjks
                      <p>Fecha: 24-11-21</p>
                      <p>Disponible</p></p>

                    <h1>Organizadores</h1>
                    <p>hola njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn
                      njsndvdksjnvksdn njdsnjksndvjksn</p>

                    <h1>Contacto</h1>
                    <p>hola njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn  njsndvdksjnvksdn njdsnjksndvjksn
                      njsndvdksjnvksdn njdsnjksndvjksn</p>
                      <br></br>
                    <button className = "exp_btn" onClick = {() => {navigate('/experiencias');}}>Experiencias</button>
                  </div>
            </div>
        </div>
    );
}