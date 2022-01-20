import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Products.scss';

function ProductCard(props) {
    let navigate = useNavigate();

    const handleVerInfo = e =>{
        navigate("/product/"+props.product.id, { replace: true });
    }
    
    return (
        
        <div className="card product-card">
            <div className="row g-0">
                <div className="col-md-4">
                    <div className="row g-0">
                        <div className="col-md-1 bg-dark">
                        </div>
                        <div className="col-md-11">
                            <img src={props.product.img_url} className="img-fluid rounded-start" alt={"imgProd_"+props.product.id}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 info-col">
                    <div className="card-body">
                        <p className="card-title">{props.product.name.toUpperCase()}</p>
                        <p className="card-title">{props.product.price}</p>
                        <p className="card-text">{props.product.stars} Estrellas</p>
                        <button className='mt-1' onClick={handleVerInfo}>Ver información completa</button>
                    </div>
                </div>
            </div>


            
        </div>
     
    )
}

export default ProductCard
