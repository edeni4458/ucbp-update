import React from 'react'
import { Link } from 'react-router-dom';


import bigBoss from '../../../images/big-boss.jpg'
import metalDelta from '../../../images/Metal Gear Solid Delta.jpg'
import oldSnake from '../../../images/old-snake.jpg'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../mainPage/mainTop.css'

const MainTop = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
    };

    return (

        <div className="first-bot-width">
            <h2 className='slider-title'>There's more to UCBP...</h2>
            <div className="slider-container">
                <Slider {...settings} className='slider-set-main'>
                    <div className='slider-set'>
                        <img className='mid-pic' src={bigBoss} alt=" 1" />
                        <h4> <Link reloadDocument to={"/create"} className='slider-link'>Share your favorite Snake tales.</Link></h4>
                    </div>
                    <div className='slider-set'>
                        <img className='mid-picB' src={metalDelta} alt=" 2" />
                        <h4><Link reloadDocument to={"/news"} className='slider-link'>What's new with Metal Gear.</Link></h4>
                    </div>
                    <div className='slider-set'>
                        <img className='mid-pic' src={oldSnake} alt=" 3" />
                        <h4><Link reloadDocument to={"/about"} className='slider-link'>Learn more about who we are.</Link></h4>
                    </div>
                    {/* Add more slides as needed */}
                </Slider>
            </div>
        </div>

    );
}

export default MainTop