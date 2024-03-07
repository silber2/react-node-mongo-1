import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../CartProvider.jsx';
import Carrusel from './Carrusel.jsx';

export const ProductosDetail = () => {
  const { name } = useParams();
  const { handleAgregar } = useContext(CartContext);
  const [item, setItem] = useState()  

  const fetchItem = async (url) => {
    try {
        const resp = await fetch(url)
        if (!resp.ok) {
         return console.error("error fetch")
        }
        const respJSON = await resp.json()
        
        setItem(respJSON)
    }
    catch (error) {
        console.error('error')
    }
}

  useEffect(() => {

    fetchItem(`https://react-node-mongo-1.onrender.com/api/productos/name/${name}`)

  }, [])

  return (
    <div className='prodsDetailContainer'>
      {item ? (
        <div className='prodsDetail'>
          <Carrusel item={item} />
          <div className='prodsDetail__info'>
            <h2 className='prodsDetail__info--name'>{item.name}</h2>
            <p className='prodsDetail__info--price'>${item.precio}</p>
            <p className='prodsDetail__info--desc'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil illo officiis iusto at voluptatem fugit quam ea fuga illum quia!
            </p>
            <button className="prodsDetail__info--add" onClick={() => { handleAgregar(item) }}>Agregar al carrito</button>
          </div>
        </div>
      ) : (
        <div className='prodsContainer'>
          <p>Producto no encontrado</p>
        </div>
      )}
    </div>
  );
};