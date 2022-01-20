import React from 'react'
import ProductCard from './ProductCard'
import './Products.scss';

function ProductList(props) {
    return (
        <div className='product-list'>
            {props.products.map((el) => <ProductCard  key={el.id} product={el}/>)}
        </div>
    )
}

export default ProductList
