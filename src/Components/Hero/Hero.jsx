import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi,I'm Vigneshwaran,</span><br /> Aspiring Technical Support Engineer with a passion for solving technical issues and helping users succeed.</h1>
       
        <p> Passionate aspiring Technical Support Engineer with a strong focus on modern web technologies, <br />
        UI/UX, and full-stack development.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
            {/* <div className="hero-resume">My resume</div> */}
            <a
               href="/my_resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               className="hero-resume"
               style={{ textDecoration: 'none' }}
              >
               My resume
            </a>
        </div>
    </div>
  )
}

export default Hero