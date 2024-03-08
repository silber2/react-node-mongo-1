import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../CartProvider';
import CartProd from './CartProd';
import CarritoCompra from './CarritoCompra.jsx';

export default function Carrito({hideCart}) {
  
  const {carrito, setCarrito, handleEliminar} = useContext(CartContext);
  // const [ticket, setTicket] = useState()

  // const traerTicket = (ticket) => {
  //   setTicket(ticket)
  //   console.log(ticket)
  // }

  useEffect(() => {
      () => {     
        const storageCart = JSON.parse(localStorage.getItem('cart'))
        setCarrito(storageCart)
      }
  }, []);

  const cartHeader = (
    <div className='cartContainer__cartHeader'>
      <label className='cartContainer__cartHeader--label'>Carrito</label>
      <button className='cartContainer__cartHeader--btn' onClick={hideCart}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </div>
  );

  return (
    <>
      {cartHeader}
      <ul className='cartContainer__ul'>
        {carrito != undefined ? carrito.map((prod) => (
          <CartProd prod={prod} key={prod.name} handleEliminar={handleEliminar} />
        )) : <p className='cartFold'>No hay nada en el carrito</p>}
      </ul>
      <CarritoCompra enviarTicket={traerTicket} /> 
    </>
  );
  }
     