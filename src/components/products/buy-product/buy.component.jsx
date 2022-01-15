import React, { useState, useEffect } from 'react';
import dataService from '../../../services/product.service'

const BuyProduct = () => {

  const [datos, setDatos] = useState([])

  useEffect(() => {
    dataService.getAllProducts(setDatos);
  },[]);

  const data = datos.map((datos) => <tr>
  <td><img src={datos.img_url} alt="imagen" height={150}  /></td>
  <td>{datos.name}</td>
  <td>{datos.price}</td>
  <td>{datos.description}</td>
  <td>{datos.stars}</td>
  </tr>);

  return (
    <>
      <h2>Selecciona tu producto para comprar </h2>
      <table className="table" >
        <thead>
          <tr>
            <th scope="col">Imagen</th>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Descripción</th>
            <th scope="col">Calificación</th>
          </tr>
        </thead>
        <tbody>
            {data}
        </tbody>
      </table>
    </>

  )
}

export default BuyProduct