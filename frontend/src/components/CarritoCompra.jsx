import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider';
import axios from 'axios'
import YourComponent from './mp.jsx';

export default function CarritoCompra({enviarTicket, setCartComprado}) {

    const {carrito, setCarrito} = useContext(CartContext);
    const [total, setTotal] = useState(0);
    const [preferenceId, setPreferenceId] = useState(null)

    function calcularTotal() {
        return carrito && carrito.reduce((acc, producto) => acc + producto.precio * producto.cantidad, 0);
      }
  
    const orderData = {
            carrito,
            total
    }

    async function createOrder () {
        try {
            console.log(orderData)
            const response = await axios.post(`http://localhost:4003/api/mp/crearOrden`, orderData)
            const preferenceId = await response.data
            console.log(orderData)
            setPreferenceId(preferenceId)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        setTotal(calcularTotal());
    }, [carrito])

  return (
    <>
    {preferenceId
        ? <YourComponent preferenceID={preferenceId} />
        : <div className='cartTotal'>
             <p className='cartTotal__p'>Total: ${total}</p>
            <button className='cartTotal__btn' onClick={createOrder}>Ir a pagar</button>
          </div> }
    </>
  )
}

