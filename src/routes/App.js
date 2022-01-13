import React from 'react';
import {  BrowserRouter as Router,  Route,  Routes} from "react-router-dom";
import LoggedHeader from '../components/header/HeaderLogged.component'
import Home from '../components/home/Home.component'
import AddProduct from '../components/products/add-product/add.component';
import Cart from '../components/cart/cart.component';

const App = () => (
  <div>
    <LoggedHeader></LoggedHeader>
    <Router>
      <Routes>
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/shopping-cart" element={<Cart/>} />
      </Routes>
    </Router>
  </div>
)

export default App;