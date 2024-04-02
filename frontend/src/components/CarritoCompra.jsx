import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../CartProvider';
import axios from 'axios'
import YourComponent from './mp.jsx';

export default function CarritoCompra() {

    const {carrito} = useContext(CartContext);
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
            const response = await axios.post(`https://6149-190-57-192-16.ngrok-free.app/api/mp/crearOrden`, orderData)
            const preferenceId = await response.data
            setPreferenceId(preferenceId)
        } catch (error) {
            console.error("error en crear orden")
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

