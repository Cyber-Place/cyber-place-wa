import React from 'react';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import LoggedHeader from '../components/header/HeaderLogged.component'
import Home from '../components/home/Home.component'
import AddProduct from '../components/products/add-product/add.component';
import Cart from '../components/cart/cart.component';
import ManageProduct from '../components/products/products.component';
import EditProduct from '../components/products/edit-product/edit.component';
import DeleteProduct from '../components/products/delete-product/remove.component';
import BuyProduct from '../components/products/buy-product/buy.component';

const App = () => (
  <div>
    <LoggedHeader></LoggedHeader>
    <Router>
      <Routes>
        <Route path="/product/manage" element={<ManageProduct/>} />
        <Route path="/product/add" element={<AddProduct/>} />
        <Route path="/product/edit" element={<EditProduct/>} />
        <Route path="/product/delete" element={<DeleteProduct/>} />
        <Route path="/product/buy" element={<BuyProduct/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/shopping-cart" element={<Cart/>} />
      </Routes>
    </Router>
  </div>
)

export default App;