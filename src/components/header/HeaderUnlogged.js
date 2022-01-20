import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from './SearchBar';

const HeaderUnlogged = () => {
  
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link to="/" className="navbar-brand ms-4" >
              <img src={require('../../assets/img/logo_transparent.png')} width='50px' alt='Logo' /> 
              <span className="ms-2 fs-4">CyberPlace</span>
            </Link>
            <SearchBar/>
              <div className="navbar-nav">
                <Link to="/shopping-cart" className="nav-item nav-link px-3" ><ShoppingCartIcon/></Link>
              </div>
            <form className="d-flex" >
              <div className="navbar-nav me-4" align="center">
                <Link to="/login" className="nav-item nav-link px-3" >
                    Iniciar sesión
                </Link>
                <Link to="/register" className="nav-item nav-link px-3" >
                    Registrarse
                </Link>
              </div>
            </form>
          </div>
        </nav>
    )
}

export default HeaderUnlogged
