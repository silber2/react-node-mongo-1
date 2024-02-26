import React from 'react'

export default function Footer() {
  return (
    <footer>
        <div className='subContainer footerLeft'>
            <div className='footerLeft__logo'>Logo</div>
            <div>
                <span className="material-symbols-outlined">mail</span>
                <span className="material-symbols-outlined">mail</span>
            </div>
        </div>
        <div className='subContainer footerRight'>
            <label className='footerRight__lbl'>suscribite a nuestro newsletter para conocer nuevas ofertas y lanzamientos!</label>
            <form className='footerRight__form'>
                <input className='footerRight__form--inp' type="email" placeholder='Mail'/>
                <button className='footerRight__form--btn' type='submit'>Enviar</button>
            </form>
        </div>
    </footer>
  )
}
