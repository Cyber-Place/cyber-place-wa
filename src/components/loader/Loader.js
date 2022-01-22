import React from 'react';
import './Loader.scss';

function Loader() {
    return (
        <div className='loader'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className='title-loading'>
                Cargando resultados...
            </div>
        </div>

    );
}

export default Loader;
