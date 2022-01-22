import React from 'react';
import './Stars.scss';
function Stars(props) {
    let stars = parseInt(props.stars) || 1;
    stars = stars > 0 ? stars : 1;
    stars = stars <= 5 ? stars : 5;
    const fields: JSX.Element[] = [];
    for (let i = 1; i <= stars; i++) {
        fields.push(<span className="fa fa-star checked" key={i}></span>);
    }
    for (let i = stars + 1; i <= 5; i++) {
        fields.push(<span className="fa fa-star" key={i}></span>);
    }
    return (
        <div className='stars'>
            {fields}
        </div>
    );
}

export default Stars;
