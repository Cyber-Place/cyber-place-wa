import React from 'react'
import { useNavigate } from 'react-router-dom';
import Stars from '../stars/Stars';
import './Products.scss';

const cities = ["Bogotá", "Medellín", "Barranquilla", "Bogotá", "Bucaramanga", "Medellín", "Bogotá", "Bogotá", "Bogotá", "nivel nacional"];

function ProductCard(props) {
    let navigate = useNavigate();

    const handleVerInfo = e => {
        navigate("/products/" + props.product.id, { replace: true });
    }

    const rcity = Math.floor(Math.random() * cities.length);

    let value = props.product?.price || 0;
    value = value >= 0 ? value : 0;
    let currValue = new Intl.NumberFormat('de-DE',
        {
            maximumFractionDigits: 0,
            minimumFractionDigits: 0,
        }).format(value);
    currValue = '$ ' + currValue;

    return (

        <div className="product-card" onClick={handleVerInfo}>
            <li className="card">
                <img src={props.product.img_url} alt={'product#' + props.product.id} />
                <span className='name'>{props.product.name} </span>
                <Stars stars={props.product.stars} />
                <span className='price'>{currValue}</span>
                <span className='envio mt-2 mb-3'><b>Envío GRATIS</b> a {cities[rcity]}</span>
            </li>
        </div>

    )
}

export default ProductCard
