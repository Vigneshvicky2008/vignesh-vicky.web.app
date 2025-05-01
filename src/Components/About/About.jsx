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
                    <p>I am an enthusiastic and dedicated full stack developer who recently completed a Bachelor's degree in Computer Science and Engineering. I have been learning and working on both frontend and backend technologies, developing projects that combine functionality with modern, user-friendly design. My skills include HTML, CSS, JavaScript, React.js, and Next.js on the frontend, as well as Node.js, Express.js, and Django with Python on the backend. I’ve worked with databases like MongoDB using Mongoose and SQLite. As part of my college project, I built a GST flow management system using Django, which gave me hands-on experience in developing practical applications. I also have knowledge of programming languages such as Python, C, and C++.</p>
                    <p>I’ve also developed several other projects, such as a real-time chat application using the MERN stack and a 3D portfolio using React Three Fiber and Tailwind CSS. In addition to coding, I enjoy working on UI/UX design and have used tools like Figma, Photoshop, and Canva to create engaging and intuitive interfaces. I am currently seeking a full-time opportunity as a full stack developer where I can apply my skills, continue learning, and contribute to real-world projects.</p>
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