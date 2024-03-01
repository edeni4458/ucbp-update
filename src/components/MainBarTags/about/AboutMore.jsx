import React from 'react'
import motherBase from '../../../images/support-mother-base.jpg'
import '../about/aboutMore.css'


const AboutMore = () => {
    return (
        <div className="mid-about-div">
            <div className="container-subText">
                <div className="subText">
                    <p>We want to bring you all the great content on our favorite game Metal Gear but we can't do it without your help. </p>
                    <p>Join us and become part of this growing force as we explore an discuss the epic game that has brought us great story telling and amazing memories.</p>
                    <p> We are UCBP, Under the Card Board Box Podcast and MGS is our business.</p>
                </div>
            </div>
            <div className="support-text-container">
                <img id='img-size' src={motherBase} alt="Metal Gear Solid Delta mother base" />
                <h6>Enter the link below to join and support our Mother Base</h6>
                <a className='btn btn-outline-danger ' href="https://www.patreon.com/UCBPodcast/membership" target='_blank' rel="noreferrer">Deploy Here</a>
            </div>
        </div>
    )
}

export default AboutMore