import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Ticket from './Ticket';

export default function CarritoCompra({enviarTicket}) {

    const {carrito, setCarrito} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    function calcularTotal() {
        return carrito && carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
      }

      const compra = 
          {
              carrito,
              total
              //user
          }
    async function comprar () {
        try {
            const axiosRes = await axios.post(`https://react-node-mongo-1.onrender.com/api/compras`, compra)
            const ticket = await axiosRes.data
            enviarTicket(ticket)
            setCarrito([])
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

