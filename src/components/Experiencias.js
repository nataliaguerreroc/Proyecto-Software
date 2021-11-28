import React, { useState } from 'react'
import '../App.css'
import imag1 from "../images/act2.jpg";
import imag2 from "../images/festival.png";
import './Experiencias.css';
import { useNavigate } from 'react-router-dom';

export default function Experiencias(){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal){
        document.body.classList.add('active_modal')
    } else{
        document.body.classList.remove('active_modal')
    }

    let navigate = useNavigate();
    return(
        <div className = "exp_cont">
            <div className = "contenedor-imagen">  
                <img src={imag1} className="img-fluid imagen_sabermas" alt="imag-pensionados"></img>
            </div>

            <h1 className = "title"> Experiencias </h1>
            <div className = "exp_container">
                <div className = "img-saber">
                  <img src={imag2} className="img-fluid imagen_sabermasexp" alt="imag-festival"></img>
                  <p>Fecha: del 30-11-21 al 4-12-21</p>
                  <p>Disponible</p>
                  <button className = "saber_btn" onClick = {() => {navigate('/sabermas');}}> Saber más</button>
                  <button onClick = {toggleModal} className = "saber_btn">Compartir experiencia</button>                
                </div>
            
                <div className ="testimonial-container">
                    <h2 className ="quote">
                        Las anteriores versiones del festival han sido íncreibles. ¡No espero menos!
                    </h2>
                    <div className ="signature">
                        <p className ="name">Patricia Simone</p>
                        <p className ="company">Estudiante</p>
                    </div>
                 </div>
                 
                <div className ="testimonial-container">
                    <h2 className ="quote">
                        Transmitiremos por nuestra estación digital la obra en vivo, por si no alcanzas a ir a la función presencial. ¡Los esperamos!
                    </h2>
                    <div className ="signature">
                        <p className ="name">Tercera Órbita</p>
                        <p className ="company">Tercera Órbita</p>
                    </div>
                </div>

                {modal && (
                <div className ="modal">
                    <div onClick = {toggleModal} className = "overlay"></div>
                        <div className = "modal_content">
                            <h2 className = "title_modal">Comparte tu experiencia</h2>
                                <p className = "parr_modal"> Utiliza este espacio para escribir tu experiencia en la actividad.</p>
                                <div class="form_group">
                                <input type="text" id="descr" className ="form_input" placeholder=" " autocomplete="off"/>
                                <label for="descr" className ="form_label">Descripción</label>
                                </div>

                            <button className = "close_modal"> Compartir experiencia </button>

                            <button className = "close_modal" onClick = {toggleModal}> Cerrar </button>
                        </div>
                </div>
                )}
            </div>
            
        </div>
        
    );

}