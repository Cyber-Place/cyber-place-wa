import React from 'react'
import Loader from '../../components/loader/Loader';
import ProductList from '../../components/products/ProductList';
import { productsService } from '../../services/products/productsService';

import "./Products.scss"


function BuyProduct() {
    let prodServ = productsService();
    const { data, loading } = prodServ.useGetAllProducts();


    return (
        <div className='products'>
            <div className='custom-container-gray'>
                <h4>Productos más relevantes.</h4>
                {loading &&
                    <div className='loader'>
                        <Loader />
                    </div>
                }
                {data && <ProductList products={data.allProducts} />}
            </div>
        </div>
    )
}

export default BuyProduct
