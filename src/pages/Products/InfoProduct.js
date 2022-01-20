import { useMutation, useQuery } from '@apollo/client';
import { stringifyForDisplay } from '@apollo/client/utilities';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from '../../components/products/ProductInfo';
import { accountService } from '../../services/account/accountService';
import { GETUSERNAMEJWT } from '../../services/account/graphqlQM';
import { ADDITEMHISTORY } from '../../services/history/graphqlQM';
import { PRODUCTBYID } from '../../services/product/graphqlQM';
import { productService } from '../../services/product/productService';
import './Products.scss'


function InfoProduct() {
    let {id} = useParams();
    let navigate = useNavigate();
    const { data: productData } = useQuery(PRODUCTBYID,{variables: { id }, onError: error => {navigate("/not-found/", { replace: true });}});
    const producto = productData?.productsById;

    const { data: usernameData } = useQuery(GETUSERNAMEJWT, {
        skip: !producto,
        variables: { jwt:window.localStorage.getItem("userToken"), onError: error =>{} }
        }
    )
    const username = usernameData?.getusername;
    console.log(producto)
    const [mutateFunction] = useMutation(ADDITEMHISTORY);

    useEffect(() => {
        mutateFunction({
            skip: !username || !producto,
            variables: { jwt:window.localStorage.getItem("userToken"), productId:9 }});
    }, [producto, username,mutateFunction]);
    
    
    

    console.log(username)

        /*
    let prodServ = productService();
    let accServ = accountService();
    let {id} = useParams();
    const { loading, error, data }  = prodServ.useGetProductById({
        variables:{
            id
        }
    });
    const { loading2, error2, data2 }  = accServ.useGetUsername({
        variables:{
            jwt:window.localStorage.getItem("userToken")
        }
    })
    
    if(error) return null;
    if(error2) return null;
    if (loading) return null;
    if(loading2) return null;

    console.log(data2)
    */

    
    
    
    return (
        <div className='info-producto mt-5'>
            <div className='custom-container-75'>
                
            {producto && <ProductInfo product={producto}/>}
            </div>
       
        </div>
    )
}

export default InfoProduct
