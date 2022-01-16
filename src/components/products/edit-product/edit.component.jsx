import React, { useState } from 'react';
import dataService from '../../../services/product.service';
import FileBase64 from 'react-file-base64';


const EditProduct = () => {


  const [datos, setDatos] = useState({
    id: 0,
    name: '',
    price: 0,
    description: '',
    stars: 0,
    img_url: []
  })


  const [img_url, setImg_url] = useState([]);


  const [status, setStatus] = useState('')

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const buscarData = (event) => {
    event.preventDefault()
    setStatus('')
    setDatos({
      name: '',
      price: 0,
      description: '',
      stars: 0,
      img_url:''
    })
    dataService.getProduct(datos.id, setDatos, setStatus)
  }
  const enviarDatos = (event) => {
    event.preventDefault()
    setStatus('')
    console.log(datos);
    dataService.updateProduct(datos, setStatus)
  }

  return (
    <div>
      <h2>Editar producto</h2>
      <br />
      <form onSubmit={buscarData}>
        <div>
          <input type="number" placeholder="Id" onChange={handleInputChange} name="id"></input>
        </div>
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>

      <form onSubmit={enviarDatos}>
        <div>
          <div>Nombre</div>
          <input type="text" onChange={handleInputChange} name="name" value={datos.name}></input>
        </div>
        <div>
          <div>Precio</div>
          <input type="number" onChange={handleInputChange} name="price" value={datos.price}></input>
        </div>
        <div>
          <div>Descripción</div>
          <input type="text" onChange={handleInputChange} name="description" value={datos.description}></input>
        </div>
        <div>
          <div>Calificación (En estrellas 0-5)</div>
          <input type="text" onChange={handleInputChange} name="stars" value={datos.stars}></input>
        </div>
        <div>
          <div>Imagen</div>
          <FileBase64
            onDone={setImg_url}
            name='image'
            />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      <div> <br /><p>{status}</p> </div>

    </div>
  );
}

export default EditProduct;
