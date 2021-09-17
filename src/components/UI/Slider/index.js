import React, { useState, useEffect } from 'react'
import "./style.css"
import slide1 from "./slide1.jpg"
import slide2 from "./slide2.jpg"
import slide3 from "./slide3.jpg"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
/**
* @author
* @function Slider
**/

const Slider = (props) => {
    // console.log(window.document.getElementsByClassName("slides"));

    const [img, setImg] = useState([slide1, slide2, slide3]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const length = img.length
    const interval = 3000


    useEffect(() => {
        const loop = setInterval(() => {
            setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
        },interval);
        return () => clearInterval(loop);

    }, [ currentSlide, interval])
    
    
    const arrowLeft = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    const arrowRight = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="slides">
            <div className="slide__content">
                <h1>FRESH MARKET</h1>
                <span>WE'LL DELIVER EVERYTHING YOU NEED</span>
                <button className="btn"><a href="#">SHOP ONLINE</a></button>
            </div>
            <div className="slide__imgs">
                <ul className="imgs__list">
                    {img.map((value, key) =>
                        <li className={currentSlide === key ? "active__slide" : ""} key={key}><img src={value} alt="" /></li>

                    )}


                </ul>
                <FaChevronLeft id="slide__img-left" onClick={arrowLeft} />
                <FaChevronRight id="slide__img-right" onClick={arrowRight} />
                {/* <i className="fas fa-angle-left" />
                <i className="fas fa-angle-right" /> */}
            </div>
        </div>
    )

}

export default Slider