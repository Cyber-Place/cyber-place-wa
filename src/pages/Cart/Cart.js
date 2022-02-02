import React, { useEffect } from 'react';
import List from '@mui/material/List';
import Button from '@mui/material/Button';
import { accountService } from '../../services/account/accountService';
import { cartService } from '../../services/cart/cartService';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from '../../components/cart/CartItem';
import { useSelector } from 'react-redux';

import './Cart.scss';

function calcAmount(cart){
    let amount = 0;
    if(cart){
        for (let element in cart) {
            amount += parseInt(cart[element].product.price) * parseInt(cart[element].quantity);
        }
    }
    return amount;
}

function IntToMoney(price) {
    let value = price || 0;
    value = value >= 0 ? value : 0;
    let currValue = new Intl.NumberFormat('de-DE',
        {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(value);
    currValue = '$ ' + currValue;
    return currValue;
}

function Cart() {
    const navigate = useNavigate();
    const cartServ = cartService();
    const accServ = accountService();

    const state = useSelector(state => state);
    const access = state.account;
    const username = access.username;

    let amount = 0;

    const [updateCart] = cartServ.useUpdateCart();

    useEffect(() => {
        if (!accServ.isLoggedStorage()) navigate("/", { replace: true });
    }, [accServ, navigate])

    const { data: cartData, refetch } = cartServ.useGetCart(username);
    const cart = cartData?.shoppingListById?.product_list;

    amount = calcAmount(cart);    

    function changeQuantity(index, value) {
        let newCart = [];
        for (let element in cart) {
            newCart.push({ product_id: cart[element].product.id, quantity: cart[element].quantity })
        }
        newCart[index].quantity = value;
        newCart = { product_list: newCart };
        updateCart({ variables: { username: username, cart: newCart }, onCompleted: (data) => { refetch() } })
    }

    function deleteProduct(id) {
        let newCart = [];
        for (let element in cart) {
            if (cart[element].product.id !== id) newCart.push({ product_id: cart[element].product.id, quantity: cart[element].quantity })
        }
        newCart = { product_list: newCart }
        updateCart({ variables: { username: username, cart: newCart }, onCompleted: (data) => { refetch() } })
    }


    return (
        <div className="cart">
            <Link to="/" className="volver" >
                <span className="volver">{"< "}Volver a productos</span>
            </Link>
            <div className='row '>
                <div className='col-md-9 cart-list-container'>
                    <h4 className='pt-4'>Carrito de compra de {username && username}</h4>
                    {cart &&
                        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                            {cart.map((el, index) => <CartItem key={index} product={el} index={index} changeQuantity={changeQuantity} deleteProduct={deleteProduct} />)}
                        </List>
                    }
                </div>
                <div className='col-md-3'>
                    <div className='amount-container'>
                        <h2>Subtotal</h2>
                        <br/>
                        <h5>{IntToMoney(amount)}</h5>
                        <br/>

                        <Button variant="contained" align="center" className='mb-5 button-payment'>Proceder al pago</Button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Cart;