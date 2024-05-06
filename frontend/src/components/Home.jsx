import React from 'react'
import Productos from './Productos'

export const Home = () => {

  return (
    <>
       <section className='home-container'>
        <div className='home-container__2back'>
          <h4 className='home-container__2back--frase'>Calidad al mejor precio.</h4>
        </div>
        </section>
        <section>
          <Productos />
        </section>
    </>
  )
}
