import React from 'react'
import HistoryCard from './HistoryCard'
import '../../pages/History/History.scss'

function HistoryComponent(props) {
    return (
        <div className='container history-component'>
            Historial de búsqueda
            <div className="row">
                {props.myHistory && props.myHistory.items.map((el) => <HistoryCard  key={el.id} item={el}/>)}
            </div>
            
        </div>
    )
}

export default HistoryComponent
