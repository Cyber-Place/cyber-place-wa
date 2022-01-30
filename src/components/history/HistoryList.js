import React from 'react';
import HistoryCard from './HistoryCard';

function HistoryList(props) {
  const sortedProducts = props.history.slice().sort((a, b) => b.date - a.date).reverse();
  return (
    <div className='history-list'>
      <ul className="card-wrapper">
        {sortedProducts.map((el) => <HistoryCard key={el.id} item={el} refetch={props.refetch} />)}
      </ul>
    </div>
  );
}

export default HistoryList;

