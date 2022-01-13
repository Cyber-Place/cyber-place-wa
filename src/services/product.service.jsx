import Axios from 'axios';

const dataService = {
  getAllProducts: function (selectedTeam, updateMembers) {
    if (selectedTeam) {
      Axios({
        url: `http://127.0.0.1:3333/api/control-tower/team/${selectedTeam}`,
      })
        .then(response => {
          updateMembers(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },

  sendProduct: function (productDescription:Object,setStatus:Function) {

    Axios.post('http://localhost:3333/products/',productDescription)
    .then(response => {
        if (response.status===200) {
          setStatus('Producto agregado correctamente')
        }else{
          setStatus(`Ocurrió un error al agregar el producto. Error ${response.status}`)
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
};

export default dataService ;
