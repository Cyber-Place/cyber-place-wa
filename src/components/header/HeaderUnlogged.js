import React from 'react'
import { Link } from 'react-router-dom'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const HeaderUnlogged = () => {
    //Esto es solo para ejemplo
    const top100Films = [
      { title: 'The Shawshank Redemption', year: 1994 },
      { title: 'The Godfather', year: 1972 },
      { title: 'The Godfather: Part II', year: 1974 }];
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
    
            <Link to="/" className="navbar-brand ms-4" >
              <img src={require('../../assets/img/logo_transparent.png')} width='50px' alt='Logo' /> 
              <span className="ms-2 fs-4">CyberPlace</span>
            </Link>
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
              <div className="navbar-nav ms-4">
                <Link to="/product/buy" className="nav-item nav-link px-3">Productos</Link>
                <Link to="/shopping-cart" className="nav-item nav-link px-3" >Ver Carrito</Link>
              </div>
            </div>
            <form className="d-flex">
                <Link to="/login" className="btn btn-light me-3" >
                    Iniciar sesión
                </Link>
                <Link to="/register" className="btn btn-light me-5" >
                    Registrarse
                </Link>
            </form>
          </div>
        </nav>
    )
}

export default HeaderUnlogged
