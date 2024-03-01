import phatomCigar4 from '../../../images/Phantom-cigar4.jpeg'
import MainTop from './MainTop'
import { Container } from 'react-bootstrap'
import youtube from '../../../images/youtube.png'
import spotify from '../../../images/spotify.jpg'
import apple from '../../../images/apple-vec.png'
import google from '../../../images/google-pods.png'
import podchaser from '../../../images/podchaser.png'
import React from 'react'
import { Link } from 'react-router-dom';
import '../mainPage/mainPage.css'

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
const MainPage = () => {




    return (
        <div className="main-container">
            <div className="first-top-width">
                <div className="sub-text">
                    <div className="text-container">
                        <h2>We are UCBP and MGS is our business.</h2>
                        <h3><span><Link reloadDocument id='link-to-connect' to={"/connect"} >Join us</Link></span> under the cardboard box.</h3>
                        <h5>Watch or listen to your favorite episodes, now with the ability to add your comments.</h5>
                    </div>
                    <div className="main-image-container">
                        <img className="fix-image" src={phatomCigar4} alt="big boss cigar" />
                    </div>
                </div>
            </div>
            <div className="top-sub-container">
                <div className="social-media-links">
                    <div className="social-media-cards">
                        <a href="https://www.youtube.com/@UnderTheCardboardBox" target='_blank' rel="noreferrer"><img className='home-image-U' src={youtube} alt="Spotify logo" /></a>
                    </div>
                    <div className="social-media-cards">
                        <a href="https://open.spotify.com/show/2aIiRya7gIuVEQ2MnPi7iY" target='_blank' rel="noreferrer"><img className='home-image' src={spotify} alt="Spotify logo" /></a>
                    </div>
                    <div className="social-media-cards">
                        <a href="https://www.podchaser.com/podcasts/under-the-cardboard-box-a-meta-69852" target='_blank' rel="noreferrer"><img className='home-image' src={podchaser} alt="Podchaser logo" /></a>
                    </div>
                    <div className="social-media-cards">
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly91bmRlcnRoZWNhcmRib2FyZGJveC5wb2RvbWF0aWMuY29tL3JzczIueG1s" target='_blank' rel="noreferrer"><img className='home-image' src={google} alt="Google logo" /></a>
                    </div>
                    <div className="social-media-cards">
                        <a href="https://podcasts.apple.com/us/podcast/under-the-cardboard-box-a-metal-gear-solid-podcast/id1059651069" target='_blank' rel="noreferrer"><img id='apple-img' className='home-image' src={apple} alt="Apple logo" /></a>
                    </div>
                </div>
                <div className="social-media-header">
                    <h4>Choose from one of your favorite<br></br>podcast sites.</h4>
                </div>
            </div>
            <div className="first-mid-width">
                <Container>
                    <h3 className='mid-header'>Here are the top viewed episodes.</h3>
                    <div className="video-flex">
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/-0zVUhJ84cs?si=0C7UBQU7fzIDhBf8" title="Episode 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h4 className='episode-title'>Episode 1</h4>
                        </div>
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/tqG9FIDJdy8?si=UOiX9VLM_cX8ODRM" title="Episode 35" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h4 className='episode-title'>Episode 35</h4>
                        </div>
                        <div className="">
                            <iframe className='fav-episodes' src="https://www.youtube.com/embed/X12vUzWN8c4?si=UThlu9HQ7bF9wKY1" title="Episode 16" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                            <h4 className='episode-title'>Episode 16</h4>
                        </div>
                    </div>
                </Container>
            </div>
            <MainTop></MainTop>
        </div>
    )
}

export default MainPage