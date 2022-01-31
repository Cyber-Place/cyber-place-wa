import React from 'react'
import "./Products.scss";
import { Link } from 'react-router-dom'
import { GETCART , UPDATECART} from '../../services/cart/graphqlQM';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import Button from '@mui/material/Button';
import { accountService } from '../../services/account/accountService';

const ProductInfo = (props) => {
    let accountSer=accountService();
    let isLogged=accountSer.isLoggedStorage()

    const username=window.localStorage.getItem('username')
    //const { loading:cartLoading,data:cartData} = useQuery(GETCART,{variables:{username:username}})
    const [getCart,{loading:cartLoading,data:cartData}]=useLazyQuery(GETCART,{variables:{username:username}})
    const [updateCart,{data}]=useMutation(UPDATECART)
    async function handleAddCart(event,id){
        if(username!=null){
            let toSendList=[]
            let result=await getCart()
            for(let product in result.data.shoppingListById.product_list){
                if(result.data.shoppingListById.product_list[product].product.id==id){
                    console.log("ya esta")
                    return 
                }
                toSendList.push({product_id:result.data.shoppingListById.product_list[product].product.id,quantity:result.data.shoppingListById.product_list[product].quantity})
            }
            toSendList.push({product_id:id,quantity:1})
            toSendList={product_list:toSendList}   
            console.log(toSendList)
            updateCart({variables:{username:window.localStorage.getItem('username'),cart:toSendList}}).then(result=>{
                window.location.reload()
            })
            
        }
    }
    return (
        <div className='product-info'>
            <h5>Información del producto</h5>
            <Link to="/" className="nav-item nav-link px-3" >
                    Volver
                </Link>
            <div className="row g-0 py-4 ps-4 pe-3 contenedor-info">
                <div className="col-md-8">
                    <img src={props.product.img_url} className="img-fluid rounded-start" alt={"imgProd_"+props.product.id}/>
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
                        <Button onClick={event=>handleAddCart(event,props.product.id)}>{isLogged && "Añadir al carrito"}</Button>
                        <Button>Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo
