import React from 'react';
import '../App.css';
import imag1 from "../images/act2.jpg";
import './Calendario.css';
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 

export default function Calendario(){
  return(
    <div className = "acercade_cont">
    
    <div className = "contenedor-imagenac">
      <img src={imag1} className="img-fluid imagen_acerca" alt="imag-pensionados"  width = "100%"></img>
    </div>

          <h1 className = "title"> Calendario </h1>
          <div className = "text"> 
          <FullCalendar
            plugins={[ dayGridPlugin ]}
            initialView="dayGridMonth"
            events={[
              { title: 'Festival Brújula al Sur', date: '2021-11-30' },
              { title: 'Festival Brújula al Sur', date: '2021-12-01' },
              { title: 'Festival Brújula al Sur', date: '2021-12-02' },
              { title: 'Festival Brújula al Sur', date: '2021-12-03' },
              { title: 'Festival Brújula al Sur', date: '2021-12-04' },
              { title: 'The Mills', date: '2021-12-04' },
              { title: 'Actividad 4', date: '2021-12-25' },
              { title: 'Actividad 4', date: '2021-12-26' },
              { title: 'Actividad 4', date: '2021-12-27' },
              { title: 'Actividad 4', date: '2021-12-28' },
              { title: 'Actividad 4', date: '2021-12-29' },
              { title: 'Actividad 4', date: '2021-12-30' },
              { title: 'POP FESTIVAL', date: '2021-12-15' }
            ]}
          />
      </div>

    </div>
);
}