import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import { accountService } from '../../services/account/accountService';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';

import { GETCART, UPDATECART } from '../../services/cart/graphqlQM';
import { useState } from 'react';


function Cart() {

  const [updateCart,{data}]=useMutation(UPDATECART)
  
  //let [cart,setCart]=useState([])
  let cart=[]

  let accountSer=accountService();
  if(!accountSer.isLoggedStorage()){
    window.location.reload()
  }
  const username=window.localStorage.getItem('username')
  const { loading:cartLoading,data:cartData} = useQuery(GETCART,{variables:{username:username}})
  
  let quantity=[]
  function handleChangeQuantity(event,numero){
    quantity[numero]=event.target.value
    let newCart=[]
    for(let element in cartData.shoppingListById.product_list){
      newCart.push({product_id:cartData.shoppingListById.product_list[element].product.id,quantity:quantity[element]})
    }
    newCart={product_list:newCart}   
    updateCart({variables:{username:window.localStorage.getItem('username'),cart:newCart}})
    window.location.reload()
  }

  function handleChangeDelete(event,numero){
    console.log(numero)
    let newCart=[]
    for(let element in cartData.shoppingListById.product_list){
      console.log(numero)
      if(cartData.shoppingListById.product_list[element].product.id!=numero)newCart.push({product_id:cartData.shoppingListById.product_list[element].product.id,quantity:quantity[element]})
    }
    newCart={product_list:newCart}
    updateCart({variables:{username:window.localStorage.getItem('username'),cart:newCart}})
    window.location.reload()
  }
  
  if(!cartLoading){
    cart=cartData.shoppingListById.product_list
  }
  function renderProducts(){
    let list=[]

    
      for(let product in cart){
        quantity.push(cart[product].quantity)
        list.push(
          <div>
          <ListItem>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} md={4} lg={2}>
              <div align="center">
                <img src={cart[product].product.img_url} width="180" height="180"/>
              </div>
            </Grid>
  
            <Grid item xs={12} sm={8} md={8} lg={10}>
              <Grid container spacing={2}>
                <Grid item xs={10} sm={10} md={10} lg={11}>
                  <div>
                    <ListItemText primary= {cart[product].product.name} secondary={cart[product].product.description} />
                  </div>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={1}>
                  <h2>${cart[product].product.price}</h2>
                </Grid>
  
                <Grid item xs={5} sm={3} md={2} lg={1}>
                  <div align="center">
                    <Box sx={{ minWidth: 80 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-quantity">Cantidad</InputLabel>
                          <Select
                            labelId="quantity"
                            id={product}
                            value={quantity[product]}
                            label="Cantidad"
                            onChange={event => handleChangeQuantity(event,product)}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                          </Select>
                      </FormControl>
                    </Box>
                  </div>
                </Grid>
  
                <Grid item xs={5} sm={3} md={2} lg={1}>
                  <div align="center">
                    <ButtonGroup variant="text" aria-label="text button group">
                      <Button onClick={event=>handleChangeDelete(event,cart[product].product.id)}>Eliminar</Button>
                    </ButtonGroup>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
  
        </ListItem>
        <Divider variant="middle" />
        </div>
        )
      }
    
    return list
  }
  

    return (
      <div className="App">
        <header className="App-header">
          <h2>
            {username && "Carrito de "+username }
          </h2>
        </header>
      <Divider></Divider>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {renderProducts()}
      
      </List>
      <div align="center">
      <Button variant="contained" align="center">Proceder al pago</Button>
      </div>
      
      </div>
    );
  }
  
  export default Cart;