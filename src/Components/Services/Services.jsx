import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Services = () => {
  return (
    <div id='services' className='services'>
        <div className="services-title">
            <h1>My Internship Work</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="services-container">
          {Services_Data.map((service,index)=>{
            return <div key={index} className="services-format">   
                <h2>{service.s_project_name}</h2>
                <h3>{service.s_company_name}</h3>
                <h4>{service.s_date}</h4>
                <p>{service.s_desc}</p>
                <div className="services-readmore">
                    {/* <p>Read More</p>
                    <img src={arrow_icon} alt="" /> */}
                </div>
            </div>
          })}
        </div>
    </div>
  )
}

export default Services