import React, {useEffect} from 'react'
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";

import AddProduct from '../components/products/add-product/add.component';
import Cart from '../components/cart/cart.component';
import EditProduct from '../components/products/edit-product/edit.component';
import DeleteProduct from '../components/products/delete-product/remove.component';


import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Error404 from '../pages/Error404/Error404';
import Header from '../components/header/Header';
import ManageProduct from '../pages/Products/Products';
import Home from '../pages/Home/Home';
import BuyProduct from '../pages/Products/BuyProduct';


import { accountService } from '../services/account/accountService';





const App = () => {
  let accServ = accountService();
  const checkJWT = accServ.useCheckJWT();
  useEffect(() => {
    document.body.style.backgroundColor = "#f5f5f5";
  }, []);
  
  useEffect(() => {
    checkJWT();
  }, [checkJWT]);
  
  return(
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/product/manage" element={<ManageProduct/>} />
          <Route path="/product/add" element={<AddProduct/>} />
          <Route path="/product/edit" element={<EditProduct/>} />
          <Route path="/product/delete" element={<DeleteProduct/>} />

          <Route path="/product/buy" element={<BuyProduct/>} />
          
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/shopping-cart" element={<Cart/>} />


          <Route path="/" element={<Home/>} />
          <Route path="*" element={<Error404/>} />          
        </Routes>
      </Router>
    </div>
    
  )
}
  
  


export default App;