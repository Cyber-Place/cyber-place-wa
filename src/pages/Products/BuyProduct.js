import React from 'react'
import ProductList from '../../components/products/ProductList';
import { productService } from '../../services/product/productService';

import "./Products.scss"


function BuyProduct() {
    let prodServ = productService();
    const {data} = prodServ.useGetAllProducts();
    
    return (
        <div className='buy-product'>
            <h5 className='custom-container-gray'>Productos más relevantes.</h5>
            <div className='custom-container-gray'>
                {data && <ProductList products={data.allProducts} />}
            </div>
        </div>
    )
}

export default BuyProduct
