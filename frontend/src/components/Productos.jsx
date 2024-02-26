import React, { useEffect, useState } from 'react'
import '../estilos.css'
import Producto from './Producto.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Productos() {

  const {categoria} = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
      axios.get(categoria ? `http://localhost:4000/api/productos/category/${categoria}` : "http://localhost:4000/api/productos")
      .then(response => {
        const resultado = response.data;
        if (resultado.length <= 0) {
          return console.error('its empty')
        }
        setProductos(resultado)
      })
      .catch(err => console.error(err + 'fetch error'))
  
  }, [categoria])

    return (
      <section className='productos-container'>
          {/* <label className='productos-container__label'>{productos.category ? productos.category : "Todos los Productos"}</label> */}
          <div className='prodsContainer'>
                {productos.map((prod, index) => (
                <Producto 
                  producto={prod}
                  key={index}
                />
                ))}
          </div>
      </section>
    )}