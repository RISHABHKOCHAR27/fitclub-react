import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import Instragram from '../../assets/instagram.png'
import LinkedIn from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className="Footer">
            <hr />
            <div className="footer">

                <div className="social-logo">
                    <img src={Github} alt="" />
                    <img src={Instragram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>

                <div className="logo-f">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blur-f-1"></div>
            <div className="blur blur-f-2"></div>
        </div>
    )
}

export default Footer