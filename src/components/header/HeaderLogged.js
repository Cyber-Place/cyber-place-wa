import { Link } from 'react-router-dom';
import { accountService } from '../../services/account/accountService';

import {Dropdown} from 'react-bootstrap';

import { ReactComponent as Settings } from '../../assets/icons/sliders.svg';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';

import './Header.scss'

function HeaderLogged() {
  let accServ = accountService();
  const logoutUser = accServ.useLogout();
  
  const handleLogout = (e) =>{
    logoutUser();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link to="/" className="navbar-brand ms-4" >
          <img src={require('../../assets/img/logo_transparent.png')} width='50px' alt='Logo' /> 
          <span className="ms-2 fs-4">CyberPlace</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-4">
            <Link to="/" className="nav-item nav-link" >Home</Link>
            <Link to="/product/buy" className="nav-item nav-link px-3">Productos</Link>
            <Link to="/shopping-cart" className="nav-item nav-link px-3" >Ver Carrito</Link>
          </div>
        </div>
        <form className="d-flex">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Cart/>
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item >Administrador de productos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="btn btn-danger mx-4" onClick={handleLogout}>Cerrar sesión</button>
          <Dropdown className="me-4">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Settings/>
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item>
                  <Link to="/product/manage" className="nav-item px-3 redirect"> Administrador de productos </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/product/manage" className="nav-item px-3 redirect"> Cambiar contraseña </Link>
                </Dropdown.Item>   
            </Dropdown.Menu>
          </Dropdown>
        </form>
      </div>
    </nav>
  )
}

export default HeaderLogged;