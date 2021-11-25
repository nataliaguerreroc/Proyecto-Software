import React, { useState } from 'react'
import '../App.css'
import imag1 from "../images/act2.jpg";
import imag3 from "../images/actividades2.jpg";
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

            <hi className = "title"> Experiencias </hi>
            <div className = "exp_container">
                <div className = "img-saber">
                  <img src={imag3} className="img-fluid imagen_sabermasexp" alt="imag-pensionados"></img>
                  <p>Fecha: 24-11-21</p>
                  <p>Disponible</p>
                  <button className = "saber_btn" onClick = {() => {navigate('/sabermas');}}> Saber más</button>
                  <button onClick = {toggleModal} className = "saber_btn">Compartir experiencia</button>                
                </div>
            
                <div className ="testimonial-container">
                    <h2 className ="quote">
                        All I can say is thank you! Design Co. has completely changed my business.
                    </h2>
                    <div className ="signature">
                        <p className ="name">Jane Fisher</p>
                        <p className ="company">Center Data</p>
                    </div>
                 </div>
                 
                <div className ="testimonial-container">
                    <h2 className ="quote">
                        Design Co. has increased business sales by over 400%. Thank you for everything Design Co!
                    </h2>
                    <div className ="signature">
                        <p className ="name">Jorge Miles</p>
                        <p className ="company">Diamond Company</p>
                    </div>
                </div>

                {modal && (
                <div className ="modal">
                    <div onClick = {toggleModal} className = "overlay"></div>
                        <div className = "modal_content">
                            <h2 className = "title_modal">Comparte tu experiencia</h2>
                                <p className = "parr_modal"> Utiliza este espacio para escribir tu experiencia en la actividad.</p>
                                <div class="form_group">
                                <input type="text" id="email" class="form_input" placeholder=" " autocomplete="off"/>
                                <label for="email" class="form_label">Descripción</label>
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