import React from 'react'
import { Container } from 'react-bootstrap'
import delta from "../../../images/Metal Gear Solid Delta.jpg"

import './cbNews.css'


const CBnews = () => {
    return (
        <div className='mainCB-container'>
            <div className="news-container">
                <h2 id='h2-margin'>C-B News</h2>
                <hr />
                <div className="top-header">
                    <p>The moment we have all been waiting for...</p>
                    <img src={delta} alt="Metal Gear Solid Delta Naked Snake" />
                </div>
            </div>
            <div className='video-container'>
                    <h3>MGS Delta Reaction</h3>
                <div className="news-video">
                    <div className="cb-news_videos">
                        <iframe id='delta-reaction'  src="https://www.youtube.com/embed/OXR2yuzN09w" title="MGS Delta First Look" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="cb-news_videos">
                        <iframe id='delta-reaction'  src="https://www.youtube.com/embed/NSUbn0GBT_w?si=fZ-XlyK6vV1iONAl" title="MGS Delta Gameplay First Look" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CBnews