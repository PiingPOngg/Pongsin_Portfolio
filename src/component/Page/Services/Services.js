import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section id="services" className='services_box'>
      <h2 className='services_box-h2'>Experience</h2>
      
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Denso Wave Singapore</h3>
            <h5>September 2019 - February 2020</h5>
          </div>
          <ul className='service__list'>
            <li>
              <p>Interning at Denso Wave Singapore for over 6 months, has thought that there is no shortcut to success and the 
                professional skills are the key factor to achieve the success. Therefore, I constantly work hard to improve and 
                achieve my best in academics. Which led me to expertise in many skills such as coding skill, soldering skills and many more.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services