import React, { useState } from 'react';
import dataService from '../../../services/product.service';

const DeleteProduct = () => {


  const [datos, setDatos] = useState({
    name: '',
    price: 0,
    description: '',
    stars: 0
  })

  const [status, setStatus] = useState('  ')

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    setStatus('')
    dataService.sendProduct(datos,setStatus)
  }

  return (
    <div>
      <h1>Agregar productos</h1>
      <form onSubmit={enviarDatos}>
        <div>
          <input type="file" placeholder="Imagen" onChange={handleInputChange} name="image"></input>
        </div>
        <input type="text" placeholder="Nombre" onChange={handleInputChange} name="name"></input>
        <div>
          <input type="number" placeholder="Precio" onChange={handleInputChange} name="price"></input>
        </div>
        <div>
          <input type="text" placeholder="Descripcion" onChange={handleInputChange} name="description"></input>
        </div>
        <div>
          <input type="number" placeholder="Calificacion" onChange={handleInputChange} name="stars"></input>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
        <p>{status}</p>
    </div>
  );
}

export default DeleteProduct;
