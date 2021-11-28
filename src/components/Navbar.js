import React, { useState } from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'

function Navbar() {
    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

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

                    <li className = 'nav-item'>
                        <Link to = '/ingresar' className = 'nav-links-mobile' onClick = {closeMobileMenu}>
                            Ingresar
                        </Link>
                    </li>

                </ul>
                <Button />

        </nav>
            
        </>
    )
}

export default Navbar;
