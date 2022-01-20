import { Link, useNavigate } from 'react-router-dom';
import { accountService } from '../../services/account/accountService';

import {Dropdown} from 'react-bootstrap';

import { ReactComponent as Settings } from '../../assets/icons/sliders.svg';
import { ReactComponent as Account } from '../../assets/icons/account.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Header.scss'
import SearchBar from './SearchBar';

function HeaderLogged() {
  let accServ = accountService();
  let navigate = useNavigate();
  const logoutUser = accServ.useLogout();
  
  const handleLogout = (e) =>{
    logoutUser();
    navigate("/", { replace: true });
  }


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ms-4" >
          <img src={require('../../assets/img/logo_transparent.png')} width='50px' alt='Logo' /> 
          <span className="ms-2 fs-4">CyberPlace</span>
        </Link>
        <SearchBar/>
        <div className="navbar-nav ms-4">
          <Link to="/shopping-cart" className="nav-item nav-link px-3" ><ShoppingCartIcon/></Link>
        </div>
        <form className="d-flex">
          <div className="navbar-nav mx-5" align="center">
            <Link to="/shopping-cart" className="nav-item nav-link" >
              <Account className='account-icon' />
            </Link>
          </div>
          
          <Dropdown className="me-4">
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <Settings/>
            </Dropdown.Toggle>
            <Dropdown.Menu >
                <Dropdown.Item>
                  <Link to="/product/manage" className="nav-item px-3 redirect"> Administrador de productos </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link to="/account/changepassword" className="nav-item px-3 redirect"> Cambiar contraseña </Link>
                </Dropdown.Item>   
                <Dropdown.Item onClick={handleLogout} className="dropdown-item">
                  <span className="nav-item px-3 redirect">Cerrar sesión</span>
                </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </form>
      </div>
    </nav>
  )
}

export default HeaderLogged;
