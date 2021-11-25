import React, { useState } from 'react'
import '../ModalExp.css'

export default function ModalExp(){
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal)
    }
    return(
        <>
        <button onClick = {toggleModal} className = "modal_btn">Open</button>
        </>
    );
}