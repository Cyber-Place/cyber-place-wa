import React from 'react';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import LoggedHeader from '../components/header/HeaderLogged.component'
import Home from '../components/home/Home.component'
import AddProduct from '../components/products/add-product/add.component';
import ManageProduct from '../components/products/products.component';
import EditProduct from '../components/products/edit-product/edit.component';
import DeleteProduct from '../components/products/delete-product/remove.component';
import BuyProduct from '../components/products/buy-product/buy.component';

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Error404 from '../pages/Error404/Error404';
import Header from '../components/header/Header';

const App = () => (
  <div>
    <LoggedHeader></LoggedHeader>
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



        <Route path="/" element={<Home/>} />
        <Route path="*" element={<Error404/>} />



      </Routes>
    </Router>
  </div>
)

export default App;