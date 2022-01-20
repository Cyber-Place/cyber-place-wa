import React from 'react';
import './Slideshow.scss';

const Slideshow = () => {
    return (
        <div className="slideshow">
            
            <div className="slideshow-container">

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={require('../../assets/img/background_login.jpeg')}  alt = "image1"/>
                    <div className="text">Caption Text</div>
                </div>

                <div className="mySlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src={require('../../assets/img/background_login.jpeg')}  alt = "image2"/>
                    <div className="text">Caption Text</div>
                </div>


                <a className="prev" onclick="plusSlides(-1)" href="asd">&#10094;</a>
                <a className="next" onclick="plusSlides(1)" href="asd">&#10095;</a>
            </div>
            
            <br/>

                 
            <div>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
            
        </div>
    )
}

export default Slideshow
