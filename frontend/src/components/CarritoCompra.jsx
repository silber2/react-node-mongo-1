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

      const compra = 
          {
              carrito,
              total
          }
    async function comprar () {
        try {
            const axiosRes = await axios.post(`${import.meta.env.VITE_BACK_URI}/api/compras`, compra)
            const ticket = await axiosRes.data
            enviarTicket(ticket)
            setCarrito([])
            localStorage.setItem('cart', []);
            setCartComprado(true)
        } catch (error) {
            console.error(`error: ${error}`)
        }
    } 
  
    const orderData = {
        title: carrito.map(prod => `${prod.name},`),
        cantidad: carrito.length,
        precio: total
    }
    async function createOrder () {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACK_URI}/api/createOrder`, orderData)
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

