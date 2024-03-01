import React from 'react'
import { Container } from 'react-bootstrap'
import AboutMore from './AboutMore'

import '../about/about.css'

const About = () => {
    return (
        <div className="container-About-main">
            <div className="middle-container">
                <h2 className='h4-margin'>What we are about</h2>
                <hr />
                <Container>
                    <div>
                        <iframe className="container-about" src="https://www.youtube.com/embed/fT6m_Hi-vNE" title="About UCBP" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </Container>
            </div>
            <AboutMore></AboutMore>
        </div>
    )
}

export default About