import React from 'react';
import HistoryCard from './HistoryCard';

function HistoryList(props) {
  return(
    <div className='history-list'>
        <ul className="card-wrapper">
            {props.history.map((el) => <HistoryCard key={el.id} item={el} /> ) }
        </ul>
        
    </div>
  );
}

export default HistoryList;
