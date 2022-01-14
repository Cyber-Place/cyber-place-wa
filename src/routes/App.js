import React from 'react';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import LoggedHeader from '../components/header/HeaderLogged.component'
import Home from '../components/home/Home.component'
import AddProduct from '../components/products/add-product/add.component';
import ManageProduct from '../components/products/products.component';
import EditProduct from '../components/products/edit-product/edit.component';
import DeleteProduct from '../components/products/delete-product/remove.component';

const App = () => (
  <div>
    <LoggedHeader></LoggedHeader>
    <Router>
      <Routes>
        <Route path="/product/manage" element={<ManageProduct/>} />
        <Route path="/product/add" element={<AddProduct/>} />
        <Route path="/product/edit" element={<EditProduct/>} />
        <Route path="/product/delete" element={<DeleteProduct/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </Router>
  </div>
)

export default App;