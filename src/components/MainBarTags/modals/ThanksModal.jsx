import React from 'react'
import thanksVenom from '../../../images/thumbs-up-venom.jpg'

import './thanksModal.css'

const ThanksModal = () => {
    return (
        <div className="main-containerTks">
            <div className="thks-container">
                <h2 id='thks-margin'>Pretty Good</h2>
                <hr />
                <div className="thks-message">
                    <h3 id="signUp-text">Thank you for signing up!</h3>
                    <img id='thks-image' src={thanksVenom} alt="Metal Gear Solid Delta Naked Snake" />
                </div>
            </div>
        </div>
    )
}

export default ThanksModal