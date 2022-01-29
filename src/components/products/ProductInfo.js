import React from 'react'
import "./Products.scss";
import { Link } from 'react-router-dom'
import { GETCART } from '../../services/cart/graphqlQM';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import Button from '@mui/material/Button';

const ProductInfo = (props) => {
    const username=window.sessionStorage.getItem("user")
    const { loading:cartLoading,data:cartData} = useQuery(GETCART,{variables:{username:username}})
    var cart=[]
    var phantom=[]
    console.log(cart)
    if(!cartLoading){

        let phantom=cartData.shoppingListById.product_list
        cart=[...phantom]
    }
    function handleAddCart(){
        cart.push({"product_id":props.product.id,"quantity":1})
        console.log("nuevo cart",cart)
    }
        

    
    return (
        <div className='product-info'>
            <h5>Información del producto</h5>
            <Link to="/" className="nav-item nav-link px-3" >
                    Volver
                </Link>
            <div className="row g-0 py-4 ps-4 pe-3 contenedor-info">
                <div className="col-md-8">
                    <img src={"https://acf.geeknetic.es/imgri/imagenes/tutoriales/1520/1520-asus-tuf-fx504gm-00.jpg?f=webp"} className="img-fluid rounded-start" alt={"imgProd_"+props.product.id}/>
                    <hr className='my-3' />
                    <div>
                        <p>Descripción</p>
                        <p>{props.product.description}</p> 
                    </div>
                </div>
                <div className="col-md-1 "></div>
                <div className="col-md-3">
                    <div className="card-body  info-col pb-5 pt-3">
                        <p className="card-title">{props.product.name.toUpperCase()}</p>
                        <p className="card-title">{props.product.price}</p>
                        <p className="card-text">{props.product.stars} Estrellas</p>
                        <Button onClick={()=>{handleAddCart()}}>Añadir al carrito</Button>
                        <Button>Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
