import React from 'react'
import { Container } from 'react-bootstrap'

import './ucbpEpisodes.css'

const UCBPepisodes = () => {


    return (
        <div className='main-episode-container'>
            <div className="ucbp-container">
                <h2>Most recent episodes</h2>
                <hr />
                <div className="embeded-container1">
                    <Container>
                        <iframe src="https://open.spotify.com/embed/episode/4UhoPvZOAVQs3Wr08al1t1?utm_source=generator" width="85%" height="152" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>                </Container>
                    <Container>
                        <iframe src="https://open.spotify.com/embed/episode/2WBrfMgsHh2QVhQAXwtf7P?utm_source=generator" width="85%" height="152" allowFullScreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                </div>
                <div className="embeded-container2">
                    <Container>
                        <iframe src="https://open.spotify.com/embed/episode/3doNZgQmChRyEtCALzVwkN?utm_source=generator" width="85%" height="152" allowFullScreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                    <Container>
                        <iframe src="https://open.spotify.com/embed/episode/1vaJXg3jl9FuaILUOfxYI3?utm_source=generator" width="85%" height="152" allowFullScreen="allow" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </Container>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default UCBPepisodes