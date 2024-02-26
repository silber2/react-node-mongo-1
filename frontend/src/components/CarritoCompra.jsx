import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Ticket from './Ticket';

export default function CarritoCompra({enviarTicket}) {

    const {carrito} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    function calcularTotal() {
        return carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
      }

      const compra = 
          {
              carrito,
              total
              //user
          }
    async function comprar () {
        try {
            const axiosRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/compras`, compra)
            const ticket = axiosRes.data
            enviarTicket(ticket)
        } catch (error) {
            console.error(`error: ${error}`)
        }
    } 

    useEffect(() => {
        setTotal(calcularTotal());
    }, [carrito])

  return (
    <div className='cartTotal'>
        <p className='cartTotal__p'>Total: ${total}</p>
        <button className='cartTotal__btn' onClick={comprar}>Iniciar Compra</button>
    </div>
  )
}
