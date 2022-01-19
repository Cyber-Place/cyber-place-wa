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
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav ms-4" align="center">
                <Link to="/product/buy" className="nav-item nav-link px-3">Productos</Link>
                <Link to="/shopping-cart" className="nav-item nav-link px-3" ><ShoppingCartIcon/></Link>
              </div>
            </div>
            <form className="d-flex">
              <div className="navbar-nav mx-4" align="center">
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
