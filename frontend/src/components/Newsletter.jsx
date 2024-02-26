import React from 'react'
import { useForm } from 'react-hook-form'

export const Newsletter = () => {

    const {register, handleSubmit} = useForm()
    
    const enviar = (datos) => {
        console.log(datos)
    }

  return (
    <form onSubmit={handleSubmit(enviar)}>
        <label htmlFor="">Nombre</label>
        <input type="text" {...register("nombre")} />
        <label htmlFor="">Email</label>
        <input type="email" {...register("mail")} />
        <label htmlFor="">Telefono</label>
        <input type="phone" {...register("tel")} />
        <button type='submit'>enviar</button>
    </form>
  )
}
