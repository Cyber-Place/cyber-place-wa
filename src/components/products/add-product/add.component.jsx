import { useState } from "react";

const AddProduct = () => {
  const [name,setName] = useState('');
  const [price,setprice] = useState(0);
  const [description,setdescription] = useState('');
  const [starts,setstarts] = useState(5);

  function changeName(event) {
    setName(event.target.name);
  }

  function sendProduct(params) {
    console.log(name);
    console.log('Melo', name, price);
  }
  return (
  <div>
    <h3>Ingrese los siguientes datos: </h3>
    <form onSubmit={e => e.preventDefault()}> 
    <label >Nombre</label>
      <input type="text" onChange={changeName} /> <br />  
    <label >Precio</label>
      <input type="number" onChange={setprice} name="precio"/> <br />
    <label >Descripcion</label>
      <input type="text" name="descripcion"/> <br />
    <label >Estrellas</label>
      <input type="text" name="estrellas"/>   
    <br /><br />
      <button onClick={sendProduct}>Guardar</button>
    </form>
  </div>)
}

export default AddProduct