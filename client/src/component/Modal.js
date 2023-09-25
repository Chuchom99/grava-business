import React from 'react'
import "./modal.css"

function Modal({open, onClose}) {
    if(!open) return null
  return (
    <div className='overlay'>
        <div className='modal-container'>
        <p onClick={onClose} className="close-btn" >X</p>
        <div className='modal-content' >
        <h4>suscribe to our email</h4>
        <input className='input' type="email" placeholder='Enter email address' />

        </div>
        </div>
    </div>
  )
}

export default Modal