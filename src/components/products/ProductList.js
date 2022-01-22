import React from 'react'
import ProductCard from './ProductCard'
import './Products.scss';

function ProductList(props) {
    return (
        <div className='product-list'>
            <ul className="card-wrapper">
                {props.products.map((el) => <ProductCard key={el.id} product={el} />)}
            </ul>
        </div>
    )
}

export default ProductList
