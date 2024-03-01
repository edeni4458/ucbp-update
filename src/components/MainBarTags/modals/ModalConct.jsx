import React from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from 'emailjs-com'

import './modalConct.css'


const ModalConct = ({ closeModal }) => {
    const navigate = useNavigate()

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("ucbp-email_01", "template_u66g93f", e.target, "wzzKVrdZYqUxw693V")
            .then(res => {
                navigate("/thankyou")
                console.log(res);
            }).catch(err => console.log(err))

    }

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button className="x-btn" onClick={() => closeModal(false)}>x</button>
                </div>
                <div className="title">
                    <form onSubmit={sendEmail} action="" method="post">
                        <div className="modal-labels">
                            <label className="font-sizeUp">code-name</label>
                            <input className="font-sizeUp" type="text" name="code-name" />
                            <label className="font-sizeUp" >email</label>
                            <input className="font-sizeUp" type="email" name="email" />
                            <label className="font-sizeUp">leave us a note</label>
                            <input className="font-sizeUp" type="textarea" rows="4" name="message"></input>
                        </div>
                        <div className="action-btns">
                            <button className="cancel-btn" onClick={() => closeModal(false)}>cancel</button>
                            <input type='submit' className="signUp-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ModalConct