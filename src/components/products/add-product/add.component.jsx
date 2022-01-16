import React, { useState } from 'react';
import dataService from '../../../services/product.service';

const AddProduct = () => {

  

  const [baseImage, setBaseImage] = useState("init");

  const [datos, setDatos] = useState({
    name: '',
    price: 0,
    description: '',
    stars: 0,
    image: baseImage
  })

  const [status, setStatus] = useState('  ')


  const uploadImage = async (e) => {
    const file = e.target.files[0];
    let base64 = await convertBase64(file);
    // base64 = base64+'.png'
    setBaseImage(base64);
    datos.image = base64
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    })
  }

  const enviarDatos = (event) => {
    event.preventDefault()
    setStatus('')
    console.log('Esta es la imagen: ',datos.image);
    dataService.createProduct(datos, setStatus)
  }

  return (
    <div>
      <h2>Agregar productos</h2>
      <br />
      <form onSubmit={enviarDatos}>
        <div>
        <input type="file"
          onChange={(e) => {uploadImage(e);}} />
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

export default AddProduct;
