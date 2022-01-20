import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from '../../components/products/ProductInfo';
import { GETUSERNAMEJWT } from '../../services/account/graphqlQM';
import { ADDITEMHISTORY } from '../../services/history/graphqlQM';
import { PRODUCTBYID } from '../../services/product/graphqlQM';
import './Products.scss'


function InfoProduct() {
    let {id} = useParams();
    let navigate = useNavigate();
    const { data: productData } = useQuery(PRODUCTBYID,{variables: { id }, onError: error => {navigate("/not-found/", { replace: true });}});
    const producto = productData?.productsById;
    const token = window.localStorage.getItem("userToken");
    const { data: usernameData } = useQuery(GETUSERNAMEJWT, {
        skip: !producto || !token,
        variables: { jwt:token}, onError: error =>{}
        }
    )
    const username = usernameData?.getusername;
    const [mutateFunction] = useMutation(ADDITEMHISTORY);

    useEffect(() => {
        if(username && producto){
            mutateFunction({
                skip: !username || !producto,
                variables: { jwt:window.localStorage.getItem("userToken"), productId:producto.id},onError: error =>{}});
        }
        
    }, [username]);
        
    
    return (
        <div className='info-producto mt-5'>
            <div className='custom-container-75'>
            {producto && <ProductInfo product={producto}/>}
            </div>
        </div>
    )
}

export default InfoProduct
