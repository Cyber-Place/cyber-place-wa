import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function HeaderLogged(params) {
  //Esto es solo para ejemplo
  const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img src={require('./logo.png')} width='50px' alt='Logo' />
        | Cyber Place</a>
      
      <div style={{width:'60%'}}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => 
        <TextField {...params} label="" variant="outlined" InputLabelProps={{shrink: false}}
        sx={{
          backgroundColor:'white',
          borderRadius:'4px',
   
        }}
        
        />}
      />
      
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link" href="/product/manage"> Gestion </a>
          <a className="nav-item nav-link" href="/product/buy">Comprar</a>
          <a className="nav-item nav-link" href="/shopping-cart">Ver Carrito</a>
          <a className="nav-item nav-link" href="logout">Salir</a>
        </div>
      </div>
    </nav>
  )
}

export default HeaderLogged;
