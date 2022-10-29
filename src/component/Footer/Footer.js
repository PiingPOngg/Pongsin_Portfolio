import './Footer.css'
import { NavLink } from 'react-router-dom'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
    <a href="/" className='footer__logo'>PiingPOng.React</a>

    <ul className='permalink'>
        <li>
            <NavLink to='/about'>About Me</NavLink>
        </li>
        <li>
            <NavLink to='/experience'>Skills</NavLink>
        </li>
        <li>
            <NavLink to='/services'>Experience</NavLink>
        </li>
        <li>
            <NavLink to='/portfolio'>Portfolio</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact Me</NavLink>
        </li>
    </ul>

    <div className='footer__socials'>
        <a href="https://facebook.com/pongsin.l" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https://instagram.com/pingpong.pl" target="_blank" rel="noreferrer"><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/pongsin-lertchawalit/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/PiingPOngg" target="_blank" rel="noreferrer"><AiFillGithub/></a>
    </div>

    <div className='footer__copyright'>
        <small>&copy; PiingPong React. All rights reserved.</small>
    </div>
    </footer>
    
  )
}

export default Footer