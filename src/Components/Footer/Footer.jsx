import React from 'react'
import './Footer.css'
import footer_logo from '../../assets/logo.png'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                
                <h1><img src={footer_logo} alt="" />vigneshwaran</h1>
                <p>Thank you for visiting. Every great journey begins with a conversation — reach out and let's make something amazing.</p>

            </div>
          
        </div>
        <hr />
        <div className="footer-bottom">
            <p className="footer-bottom-left">&copy; 2025 Vicky. All rights reserved.</p>
            <div className="footer-bottom-right">
                <p>Term of Services</p>
                <p>Private Policy</p>
                <p>Connect with me</p>
            </div>
        </div>
    </div>
  )
}

export default Footer