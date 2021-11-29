import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import { Modal, TextField, Button as MButton } from '@material-ui/core';
import { makeStyles} from '@material-ui/core/styles';

function Navbar() {

    const useStyles = makeStyles((theme)=>({
        modal: {
            position: 'absolute',
            width: 400,
            backgroundColor: 'white',
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2,4,3),
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        textField:{
            width:'100%',
        },
        button:{
            color: "white",
            borderRadius: "100px",
            marginLeft: "1%"
    
            }
    }))

    const styles = useStyles();

    const [currentModal, setModal] = useState('none');

    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const openModalLogin= ()=>{
        setModal('Login')
    }

    const login = ()=>{
        document.getElementById("loginB").style.visibility = "hidden"
        document.getElementById("logged").style.visibility = "visible"
        closeAnyModal()
    }

    const closeAnyModal=()=>{
        setModal('none')
    }

    const modalLogin = (
           
        <div className={styles.modal}>
        <div align='center'>
            <h2>Iniciar sesión</h2>
        </div>
        <TextField id="userFieldL" label="Usuario" className={styles.textField} />
        <br/>
        <TextField id="passwordFieldL" label="Contraseña" className={styles.textField} type="password" />
        <br/> <br/>
        <div align='right'>
        <MButton color="primary" onClick={login}>Autenticar</MButton>
        <MButton onClick={()=>closeAnyModal()}>Cancelar</MButton>
        </div>
     </div>)

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)       
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false)       
        } else {
            setDropdown(false)
        }
    };


    return (
        <>     
        <nav className="navbar">
        <Modal
        open={currentModal==='Login'}
        onClose={openModalLogin}>
        {modalLogin}
        </Modal>

                <Link to = "/" className = "navbar-logo">
                    VIDA FELIZ <i className="far fa-grin-beam"></i>
                </Link>
                <div className = 'menu-icon' onClick = {handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    
                    
                    <li className = 'nav-item'>
                        <Link to = '/inicio' className = 'nav-links' onClick = {closeMobileMenu}>
                            Inicio
                        </Link>
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/calendario' className = 'nav-links' onClick = {closeMobileMenu}>
                            Calendario
                        </Link>
                    </li>
                    
                    {/* Dropdown */}
                    <li className = 'nav-item'
                        onMouseEnter = {onMouseEnter}
                        onMouseLeave = {onMouseLeave}
                        >
                        <Link  to = {window.location.pathname} className = 'nav-links' onClick = {closeMobileMenu}>
                            Actividades <i className = 'fas fa-caret-down'/>
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    <li className = 'nav-item'>
                        <Link to = '/acercade' className = 'nav-links' onClick = {closeMobileMenu}>
                            Acerca de
                        </Link>
                    </li>

                    <li id = 'userCurrent' className = 'nav-item'>
                    <h1  style = {{visibility:'hidden'}} id="logged" className = 'nav-links'>
                           Bienvenido, User
                    </h1>
                    </li>

                    <li id = 'loginB' className = 'nav-item'>
                        <MButton style = {{color: "white", fontFamily: 'Dosis, sans-serif'}} className = 'nav-links-mobile' onClick = {openModalLogin}>
                            Iniciar Sesión
                        </MButton>
                    </li>

                </ul>

        </nav>
            
        </>
    )
}

export default Navbar;
