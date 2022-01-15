import React, {useState, useEffect } from 'react';
import dataService from '../../../services/product.service'

const BuyProduct = () => {
  
  const [datos, setDatos] = useState({
    name: '',
    price: 0,
    description: '',
    stars: 0
  })
  
  const [status, setStatus] = useState('  ')
  
  useEffect((datos) => {
    dataService.getAllProducts(datos,setStatus);
    console.log(datos);
  }, []); 

  return (
    <>
      <h2>Selecciona tu producto para comprar </h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Calificación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Draconic</td>
            <td>50</td>
            <td>Teclado</td>
            <td>5</td>
          </tr>
        </tbody>
      </table>
    </>

  )
}

export default BuyProduct