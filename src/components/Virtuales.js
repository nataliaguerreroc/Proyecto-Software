import React from 'react';
import '../App.css'
import './Virtuales.css';
import imag1 from "../images/act2.jpg";
import imag2 from "../images/ajedrez.jpg";
import imag3 from "../images/domino.jpg";
import imag4 from "../images/solitario.jpg";
import imag5 from "../images/rumi.jpg";

export default function Virtuales(){
    return(
        <div className = "virtuales_cont">
        
        <div className = "contenedor-imagenv">
          <img src={imag1} className="img-fluid imagen_virtuales" alt="imag-pensionados"></img>
        </div>

              <hi className = "title"> Actividades virtuales </hi>
              <div className = "contenedor">
              <Card
              img = {imag2}
              title = "Ajedrez"
              description = "Desafía al ordenador a una partida de Ajedrez online. Puedes jugar contra bots de distintos niveles y estilos." 
              />

              <Card2
              img = {imag3}
              title = "Dominó"
              description = "Puedes jugar al Dominó online con adversarios reales o con amigos. También puedes averiguar si eres experto en el juego en las salas de entrenamiento."
              />

              <Card3
              img = {imag4}
              title = "Solitario"
              description = "Disfruta de juegos de solitario gratuitos como el Klodike, el Solitario Spider y la Carta Blanca."
              />

              <Card4
              img = {imag5}
              title = "Rummikub"
              description = "La combinación de juego táctico, suerte y gran competencia ha hecho de este clásico juego familiar uno de los más exitosos de los últimos 70 años. Mira bien las fichas que has recogido para crear las combinaciones de colores y números más interesantes."
              />
              </div>
      </div>

    );
}

function Card(props){
  return(
    <div className = "card">
      <div className = "card_body">
        <img src = {props.img} className = "card_image" alt="imag-act1"/>
        <h2 className = "card_title">{props.title}</h2>
        <p className = "card_description">{props.description}</p>
      </div>
      <button className = "card_btnv" onClick = {() => window.location.href = "https://www.chess.com/es/play/computer" }> Acceder</button>
    </div>
  );
}

function Card2(props){
    return(
      <div className = "card">
        <div className = "card_body">
          <img src = {props.img} className = "card_image" alt="imag-act1"/>
          <h2 className = "card_title">{props.title}</h2>
          <p className = "card_description">{props.description}</p>
        </div>
        <button className = "card_btnv" onClick = {() => window.location.href = "https://vipgames.com/es/domino/" }> Acceder</button>
      </div>
    );
  }

  function Card3(props){
    return(
      <div className = "card">
        <div className = "card_body">
          <img src = {props.img} className = "card_image" alt="imag-act1"/>
          <h2 className = "card_title">{props.title}</h2>
          <p className = "card_description">{props.description}</p>
        </div>
        <button className = "card_btnv" onClick = {() => window.location.href = "https://www.solitar.io/" }> Acceder</button>
      </div>
    );
  }

  function Card4(props){
    return(
      <div className = "card">
        <div className = "card_body">
          <img src = {props.img} className = "card_image" alt="imag-act1"/>
          <h2 className = "card_title">{props.title}</h2>
          <p className = "card_description">{props.description}</p>
        </div>
        <button className = "card_btnv" onClick = {() => window.location.href = "https://www.minijuegos.com/juego/rummikub" }> Acceder</button>
      </div>
    );
  }
  




