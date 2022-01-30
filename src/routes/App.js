import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from '../components/header/Header';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Products from '../pages/Products/Products';
import ProductsId from '../pages/ProductsId/ProductsId';
import Error404 from '../pages/Error404/Error404';


import AddProduct from '../components/products/add-product/add.component';
import Cart from '../components/cart/cart.component';
import EditProduct from '../components/products/edit-product/edit.component';
import DeleteProduct from '../components/products/delete-product/remove.component';





import ProductManagement from '../pages/ProductManagement/ProductManagement';



import { accountService } from '../services/account/accountService';

import { History } from '../pages/History/History';
import Footer from '../components/footer/Footer';





const App = () => {
  const accServ = accountService();
  const checkJWT = accServ.useCheckJWT();
  useEffect(() => {
    document.body.style.backgroundColor = "#e7e7e7";
  }, []);



  useEffect(() => {
    checkJWT();
  }, [checkJWT]);

  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductsId />} />
          <Route path="/history" element={<History />} />


          <Route path="/productmanagement" element={<ProductManagement />} />


          <Route path="/productmanagement/add" element={<AddProduct />} />
          <Route path="/productmanagement/edit" element={<EditProduct />} />
          <Route path="/productmanagement/delete" element={<DeleteProduct />} />




          <Route path="/shopping-cart" element={<Cart />} />






          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </Router>
    </div>

  )
}




export default App;