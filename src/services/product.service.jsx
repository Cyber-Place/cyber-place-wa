import Axios from 'axios';

const dataService = {

  createProduct: function (productDescription, setStatus) {

    Axios.post('http://localhost:3333/products/', productDescription)
      .then(response => {
        if (response.status === 200) {
          setStatus('Producto agregado correctamente')
        } else {
          setStatus(`Ocurrió un error al agregar el producto. Error ${response.status}`)
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  updateProduct: function (productDescription, setStatus) {

    Axios.put(`http://localhost:3333/products/${productDescription.id}`, productDescription)
      .then(response => {
        if (response.status === 200) {
          setStatus('Producto actualizado correctamente')
        } else {
          setStatus(`Ocurrió un error al actualizar el producto. Error ${response.status}`)
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  getProduct: function (id, setDatos, setStatus) {

    Axios.get(`http://localhost:3333/products/${id}`)
      .then(response => {
        if (response.status === 200) {
          setDatos(response.data)
        } else {
          setStatus('Error al traer producto, posiblemente no existe el id')
        }
      })
      .catch(error => {
        console.log(error);
      });
  },

  deleteProduct: function (id, setStatus) {
    Axios.delete(`http://localhost:3333/products/${id}`)
    .then(response => {
      if (response.status === 200) {
        setStatus('Producto eliminado correctamente')
      } else {
        setStatus(`Ocurrió un error al borrar el producto. Error ${response.status}`)
      }
    })
    .catch(error => {
      setStatus('Ocurrió un error al borrar el producto')
      console.log(error);
    });
  },

  getAllProducts: function (selectedTeam, updateMembers) {
    if (selectedTeam) {
      Axios({
        url: `http://127.0.0.1:3333/products/`,
      })
        .then(response => {
          updateMembers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
};

export default dataService;
