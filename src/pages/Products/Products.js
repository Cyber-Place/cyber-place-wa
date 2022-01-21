import React from 'react'
import { useSelector } from 'react-redux';
import ProductList from '../../components/products/ProductList';
import { productsService } from '../../services/products/productsService';

import "./Products.scss"


function BuyProduct() {
    const state = useSelector(state => state);
    const access = state;
    let prodServ = productsService();
    const {data} = prodServ.useGetAllProducts();
    

    
    return (
        <div className='buy-product'>
            {JSON.stringify(access.account)}
            <h5 className='custom-container-gray'>Productos más relevantes.</h5>
            <div className='custom-container-gray'>
                {data && <ProductList products={data.allProducts} />}
            </div>
        </div>
    )
}

export default BuyProduct
