import './About.css'
import {NavLink} from 'react-router-dom'
import Image from './proFace.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import CV from './cv.pdf'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image'>
            <img src={Image} alt="me" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Entry Level</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Client</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>1 Completed</small>
            </article>
          </div>
          <p>Hello, I am Pongsin Lertchawalit (Pong). I am a fresh graduate from University of Wollongong (Bachelor's of Computer Science in Digital System Security). 
            I am looking for companies that are in need of a frontend developer or a software engineer. 
            I express great interest in coding and I’m keen to explore more coding related projects.</p>
          <div className='button-container'>
            <a href={CV} download className='btn lg'>Download CV</a>
            <> </>
            <NavLink to='/contact' className='btn lg'>Contact Me</NavLink>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default About