import React from 'react'

export default function ContactoRedes() {
  return (
    <section className='crContainer'>
        <div className='crSubContainer contacto'>
        <label>Contacto</label>
            <div>
                <div className='linkContainer'>
                <span className="material-symbols-outlined">mail</span>
                <a>tiendaWeb@gmail.com</a>
                </div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">sms</span>
                    <a>+54 9 11 12345678</a>
                </div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">call</span>
                    <a>+54 9 11 12345678</a>
                </div>
            </div>
        </div>
        <div className='crSubContainer redes'>
            <label>Redes</label>
            <div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">mail</span>
                    <a href="">@tiendaweb123-ig</a>
                </div>
                <div className='linkContainer' >
                    <span className="material-symbols-outlined">mail</span>
                    <a href="">@tiendaweb123.x</a>
                </div>
                <div className='linkContainer'>
                    <span className="material-symbols-outlined">mail</span>
                    <a href="">@tiendaweb123-fb</a>
                </div>
            </div>
        </div>
    </section>
  )
}
