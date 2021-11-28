import React from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import './Presenciales.css';
import imag1 from "../images/act2.jpg";
import imag2 from "../images/festival.png";
import imag3 from "../images/mills.jpeg";
import imag4 from "../images/popfes.jpg";
import imag5 from "../images/superc.jpg";


export default function Recomendadas(){
    return(
        <div className = "inicio_cont">
        
        <div className = "contenedor-imagen">
          <img src={imag1} className="img-fluid imagen_presencial" alt="imag-pensionados"></img>
        </div>

              <hi className = "title"> Actividades recomendadas</hi>
              <div className = "contenedor">
              <Card
              img = {imag2}
              title = "Festival Brújula al Sur"
              description = "Festival liderado por el Teatro La Concha, que articula cada año a instituciones culturales, colectivos y artistas para fortalecer desde la formación, creación y circulación, el campo de las artes escénicas en Cali."
              />

              <Card
              img = {imag3}
              title = "The Mills"
              description = "La banda de rock colombiano 'The Mills' interpretará en Cali sus mayores éxitos el próximo sábado 4 de diciembre. En medio de su gira 'Volver a Empezar', Bako, Dizee, Geogy, Ray y Cadavid harán su presentación en el Norte de Cali."
              />

              <Card
              img = {imag5}
              title = "Actividad 4"
              description = "La Feria de Cali con fecha en el calendario para el 25, 26, 27, 28, 29 y 30 de Diciembre, trae consigo el ‘Súper Mega Concierto’ en el estadio Pascual Guerrero, un show que estará lleno de sorpresas, incluyendo la presencia de J Balvin."
              />

              <Card
              img = {imag4}
              title = "POP FESTIVAL"
              description = "Vuelve a los grandes escenarios de Cali el género esperado por todos, el Pop Festival, el concierto para los amantes de la música que llega directamente al corazón. “Compadres Tour” de Cepeda y Fonseca, con Santiago Cruz."
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
      <button className = "card_btnp" onClick = {() => {navigate('/sabermas');}}> Saber más</button>
      <button className = "card_btnp" onClick = {() => {navigate('/experiencias');}}> Experiencias</button>
    </div>
  );
}