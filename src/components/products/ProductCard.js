import React from 'react'

function ProductCard() {
    return (
        <div className="card flex-row flex-wrap mb-2">
            <div className="card-header border-0">
                <img src="https://ih1.redbubble.net/image.634258733.5761/st,small,507x507-pad,600x600,f8f8f8.u8.jpg" alt="asdasd"/>
            </div>
            <div className="card-block px-2">
                <h4 className="card-title">Title</h4>
                <p className="card-text">Description</p>
                <a href="#" className="btn btn-primary">BUTTON</a>
            </div>
            <div className="w-100"></div>
        </div>
    )
}

export default ProductCard
