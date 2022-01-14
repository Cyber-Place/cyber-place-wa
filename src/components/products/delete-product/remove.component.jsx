import React, { useState } from 'react';
import swal from 'sweetalert';
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

  const enviarAlerta = (event) =>{
    event.preventDefault()
    swal({
      title: 'Cuidado',
      text: 'Desea eliminar este dato?',
      icon: 'warning',
      buttons: ['No','Si']
    }).then(response =>{
      if(response){
        setStatus('')
        dataService.deleteProduct(datos.id,setStatus)
      }
    })
  }

  return (
    <div>
      <h2>Borrar producto</h2>
      <br />  
      <form onSubmit={enviarAlerta}>
        <div>
        <div><p>Introduzca el id que desea eliminar</p></div>
          <input type="number" placeholder="Id" onChange={handleInputChange} name="id"></input>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
        <p>{status}</p>
    </div>
  );
}

export default DeleteProduct;
