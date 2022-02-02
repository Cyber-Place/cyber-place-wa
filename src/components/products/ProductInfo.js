import React, { useState } from 'react'
import ProductSelector from './ProductSelector';
import { useSelector } from 'react-redux';
import { cartService } from '../../services/cart/cartService';
import { useNavigate } from 'react-router-dom';
import "./Products.scss";
import Stars from '../stars/Stars';

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

const ProductInfo = (props) => {
    const cartServ = cartService();
    const [updateCart] = cartServ.useUpdateCart();
    let navigate = useNavigate();

    const id = props.product.id;

    const state = useSelector(state => state);
    const username = state.account.username;
    const isLogged = state.account.isLogged;

    const [msgState, setMsgState] = useState(0);
    const [nProduct, setNProduct] = useState(1);

    const { data: cartData } = cartServ.useGetCart(username);
    const cart = cartData?.shoppingListById;



    const handleAddProductCar = (e) => {
        if (!isLogged) {
            setMsgState(1);
            console.log("Debes iniciar sesión para añadir productos al carrito");
        }
        else {
            let toSendList = [];
            let isPresent = false;
            for (let product in cart.product_list) {
                let nProd = cart.product_list[product].quantity;
                if (cart.product_list[product].product.id === id) {
                    isPresent = true;
                    toSendList.push({ product_id: cart.product_list[product].product.id, quantity: parseInt(nProd) + parseInt(nProduct) });
                } else toSendList.push({ product_id: cart.product_list[product].product.id, quantity: nProd });
            }
            if (!isPresent) toSendList.push({ product_id: id, quantity: nProduct });

            toSendList = { product_list: toSendList };
            console.log(toSendList);
            updateCart({ variables: { username: username, cart: toSendList }, onCompleted: (data) => { setMsgState(2); } })
        }
    };

    const handleRedLogin = (e) => {
        navigate("/login", { replace: true });
    };
    
    const handleBuy = (e) => {
        if(isLogged){
            handleAddProductCar(e);
            navigate("/shopping-cart", { replace: true });
        }
        else navigate("/login", { replace: true });
    };

    return (
        <div className='product-info-container'>
            <div className="row g-0 py-4 px-3">
                <div className="col-md-8 img-container">
                    <img src={props.product.img_url} alt={"imgProd_" + props.product.id} />
                </div>
                <div className="col-md-4 ps-4 pe-3 info-container">
                    <div className="card-body mt-4 pt-4 basic-info-container">
                        <p className="title ">{props.product.name.toUpperCase()}</p>
                        <Stars className="stars" stars={props.product.stars} />
                        <p className="price">{IntToMoney(props.product.price)}</p>
                        <p className="disponible">Disponible</p>
                        <p>Cantidad:</p>
                        <ProductSelector setNProduct={setNProduct} />
                        <button className="add_cart" onClick={handleAddProductCar}>Añadir al carrito</button>
                        <button className="buy_product" onClick={handleBuy}>Comprar</button>
                        {
                            msgState === 1 &&
                            <div className='login-required'>
                                <p>Para añadir al carrito debes iniciar sesión.</p>
                                <button onClick={handleRedLogin}>Iniciar sesión</button>
                            </div>
                        }
                        {
                            msgState === 2 &&
                            <div className='cart-success'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                </svg>
                                <span className='ms-4 mt-2'>Producto añadido.</span>
                            </div>
                        }
                        <hr />
                        <p className="desc-title">Descripción</p>
                        <p className="desc">{props.product.description} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
