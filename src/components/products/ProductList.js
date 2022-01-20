import { stringifyForDisplay } from '@apollo/client/utilities'
import React from 'react'
import ProductCard from './ProductCard'

function ProductList(props) {
    return (
        <div className='product-card'>
            <h1>Lista</h1>
            {stringifyForDisplay(props.products)}
            <div className="container">
                <ProductCard/>
            </div>
        </div>
    )
}

export default ProductList
