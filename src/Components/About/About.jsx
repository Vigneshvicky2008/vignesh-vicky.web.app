import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'


const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I have a strong interest in technology and a passion for solving technical issues efficiently. I’m skilled in handling computer systems, basic networking, and troubleshooting both hardware and software problems. I enjoy helping users understand and resolve their issues clearly and patiently. I am a fast learner, a good communicator, and always ready to take on new challenges to grow and contribute effectively in a technical support role.</p>
                </div>
                <div className="about-skills">
                    <h1>Languages </h1>
                    <div className="about-skill"><p>Python</p><hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>C</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>C++</p><hr style={{width:"60%"}} /></div>
                    <h1>Frontend </h1>
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"85%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                    <h1>Backend </h1>
                    <div className="about-skill"><p>Node.js</p><hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>Express.js</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Mongoose</p><hr style={{width:"75%"}} /></div>
                    <h1>Databases </h1>
                    <div className="about-skill"><p> MongoDB</p><hr style={{width:"70%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>7.65 <span>CGPA</span></h1>
                <p>ACADEMIC EXCELLENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>80.49% <span>+2</span></h1>
                <p>STRIVING FOR EXCELLENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>69% <span>10th</span></h1>
                <p>STRONG BEGINNING</p>
            </div>

        </div>
    </div>
  )
}

export default About