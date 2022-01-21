import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import ProductInfo from '../../components/products/ProductInfo';
import { historyService } from '../../services/history/historyService';
import { productsService } from '../../services/products/productsService';
import './ProductsId.scss'


function InfoProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const prodServ = productsService();
    const histServ = historyService();

    const state = useSelector(state => state);
    const jwt = state.account.jwt;
    const username = state.account.username;


    const { data: productData, error: productError } = prodServ.useGetProductById(id);
    const product = productData?.productsById;

    const [addItemHistory] = histServ.useAddItemHistory();

    useEffect(() => {
        if (productError) navigate("/not-found", { replace: true });

    }, [productError, navigate]);

    useEffect(() => {
        if (jwt && username && product) {
            addItemHistory({variables:{jwt:jwt,productId:product.id}});
        }
    }, [jwt, username, product, addItemHistory]);



    return (
        <div className='info-producto mt-5'>
            {JSON.stringify(product)}
            <div className='info-producto mt-5'>
                <div className='custom-container-75'>
                    {product && <ProductInfo product={product} />}
                </div>
            </div>
        </div>
    )
}

export default InfoProduct
