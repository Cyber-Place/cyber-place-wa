import React from 'react';
import { productsService } from '../../services/products/productsService';
import Stars from '../stars/Stars';
import './History.scss';

const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };

function HistoryCard(props) {
    const prodServ = productsService();
    const prodId = props.item.productId;
    const date = new Date(props.item.searchTime).toLocaleDateString('es-ES', options)
    const { data: productData, error: productError } = prodServ.useGetProductById(prodId);
    if (productError) return null;
    const product = productData?.productsById;

    let value = product ? product.price : 0;
    value = value >= 0 ? value : 0;
    let currValue = new Intl.NumberFormat('de-DE',
        {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(value);
    currValue = '$ ' + currValue;
    return (
        <div className="history-card">
            <li className="card">
                <img src={ product && product.img_url} alt={'product#'} />
                <span className='name'>{product && product.name} </span>
                <span className='price'>{currValue}</span>
                <Stars stars={product && product.stars} />
                <span className='date mt-2 mb-3'>{date}</span>
                <button className='delete-item'>Eliminar de la lista</button>
            </li>
        </div>
    )
}

export default HistoryCard
