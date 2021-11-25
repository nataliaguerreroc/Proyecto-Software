import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import './Inicio.css';
import imag1 from "../images/act2.jpg";
import imag2 from "../images/prueba.jpg";



export default function Inicio(){
    return(
      <div className = "inicio_cont">
        <div className = "contenedor-imagen">  
        <img src={imag1} className="img-fluid imagen_inicio" alt="imag-pensionados"></img>
        </div>
              <hi className = "title"> Actividades recientes </hi>
              <div className = "contenedor">
              <Card
              img = {imag2}
              title = "Actividad 1"
              description = "jdafjnjks njdsn jsdn jkas nj sjadn"
              />

              <Card
              img = {imag2}
              title = "Actividad 2"
              description = "jdafjnjks njdsn jsdn jkas nj sjadn"
              />

              <Card
              img = {imag2}
              title = "Actividad 3"
              description = "jdafjnjks njdsn jsdn jkas nj sjadn"
              />

              <Card
              img = {imag2}
              title = "Actividad 4"
              description = "jdafjnjks njdsn jsdn jkas nj sjadn"
              />
              </div>
      </div>

    );
}

function Card(props){
  let navigate = useNavigate();
  return(
    <div className = "card">
      <div className = "card_body">
        <img src = {props.img} className = "card_image" alt="imag-act1"/>
        <h2 className = "card_title">{props.title}</h2>
        <p className = "card_description">{props.description}</p>
      </div>
      <button className = "card_btn" onClick = {() => {navigate('/sabermas');}}> Saber más</button>
      <button className = "card_btn" onClick = {() => {navigate('/experiencias');}}> Experiencias</button>
    </div>
  );
}




