import React from 'react';
import './History.scss';


function HistoryNoItems() {
    return (
        <div className='history-no-items'>
            <span className='message-items'>No tienes artículos en tu historial.</span>
        </div>
    );
}

export default HistoryNoItems;
