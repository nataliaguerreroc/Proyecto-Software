
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Inicio from './components/Inicio'
import Presenciales from './components/Presenciales'
import Virtuales from './components/Virtuales'
import Recomendadas from './components/Recomendadas'
import Ingresar from './components/Ingresar'
import Acercade from './components/Acercade'
import Calendario from './components/Calendario'
import Sabermas from './components/Sabermas'
import Experiencias from './components/Experiencias'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/inicio' element={<Inicio/>} />
        <Route path='/presenciales' element={<Presenciales/>} />
        <Route path='/virtuales' element={<Virtuales/>} />
        <Route path='/recomendadas' element={<Recomendadas/>} />
        <Route path='/ingresar' element={<Ingresar/>} />
        <Route path='/acercade' element={<Acercade/>} />
        <Route path='/calendario' element={<Calendario/>} />
        <Route path='/sabermas' element={<Sabermas/>} />
        <Route path='/experiencias' element={<Experiencias/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
