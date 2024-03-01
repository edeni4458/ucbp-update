import podchaser from '../../..//images/podchaser.png'
import instagram from '../../..//images/instagram.png'
import google from '../../..//images/google-pods.png'
import facebook from '../../..//images/fb-icon.png'
import twitter from '../../..//images/twitter.png'
import youtube from '../../..//images/youtube.png'
import spotify from '../../..//images/spotify.jpg'
import apple from '../../..//images/apple-vec.png'
import ModalConct from '../modals/ModalConct'

import React, { useState } from 'react'
import '../connect/connect.css'



const Connect = () => {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="main-connect-con">
            {openModal && <ModalConct closeModal={setOpenModal} />}
            <div className="main-connect">
                <h2>Sign up here to receive updates.</h2>
                <button className='openModalBtn' onClick={() => { setOpenModal(true) }}>sign up</button>
                <div className="contact">
                    <h2>Contact</h2>
                    <h5>email</h5>
                    <a id='underline' href="mailto:underthecardboardbox@gmail.com"><h5>underthecardboardbox@gmail.com</h5></a>
                </div>
                <div className="connect-container">
                    <h3>Follow us on</h3>
                    <div className="social-media">
                        <a href="https://twitter.com/UCBPodcast" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={twitter} alt='Facebook Logo' /></a>
                        <a href="https://www.facebook.com/groups/UnderTheCardBoardBox/?fref=nf" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={facebook} alt='Facebook Logo' /></a>
                        <a href="https://www.instagram.com/ucbpodcast/" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={instagram} alt='Instagram Logo' /></a>
                    </div>
                </div>
                <div className="codec-container">
                    <h3>Choose your codec frequencey below</h3>
                    <div className="socialMedia-links">
                        <a href="https://www.youtube.com/@UnderTheCardboardBox" target='_blank' rel="noreferrer"><img className='socialMedia-image-U' src={youtube} alt="Youtube logo" /></a>
                        <a href="https://open.spotify.com/show/2aIiRya7gIuVEQ2MnPi7iY" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={spotify} alt="Spotify logo" /></a>
                        <a href="https://www.podchaser.com/podcasts/under-the-cardboard-box-a-meta-69852" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={podchaser} alt="Podchaser logo" /></a>
                        <a href="https://podcasts.google.com/feed/aHR0cHM6Ly91bmRlcnRoZWNhcmRib2FyZGJveC5wb2RvbWF0aWMuY29tL3JzczIueG1s" target='_blank' rel="noreferrer"><img className='socialMedia-image' src={google} alt="Google logo" /></a>
                        <a href="https://podcasts.apple.com/us/podcast/under-the-cardboard-box-a-metal-gear-solid-podcast/id1059651069" target='_blank' rel="noreferrer"><img id='apple-img' className='socialMedia-image' src={apple} alt="Apple logo" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect