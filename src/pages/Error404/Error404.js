import React from 'react'
import './Error404.scss';
import astronaut from '../../assets/img/astronaut.png';

const Error404 = () => {
    return (
        <div className='error404'>
            <div className='custom-container'>
                <div className="row">
                    <div className='col-6 message-container'>
                        <div className='message-number'>
                            <span className="number-four">4</span>
                            <span className="number-zero">0</span>
                            <span className="number-four">4</span>
                        </div>
                        <div className='message-item'>Página no encontrada</div>
                    </div>
                    <div className='col-6 image-container'>
                        <img src={astronaut} alt='No resultados historial' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Error404
