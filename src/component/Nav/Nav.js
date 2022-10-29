import './Nav.css'
import {Link, NavLink} from 'react-router-dom'
import Logo from './logo.png'

const Nav = () => {
  return (
    <nav>
        <div className='container nav__container'>
            <Link to="/" className='logo'>
                <img src={Logo} alt="nav logo"/>
            </Link>
            <ul className='nav__links'>
              <li>
                <NavLink to='/about' className={({isActive}) => isActive ? 'active-nav':''}>About Me</NavLink>
              </li>
              <li>
                <NavLink to='/experience' className={({isActive}) => isActive ? 'active-nav':''}>Skills</NavLink>
              </li>
              <li>
                <NavLink to='/services' className={({isActive}) => isActive ? 'active-nav':''}>Experience</NavLink>
              </li>
              <li>
                <NavLink to='/portfolio' className={({isActive}) => isActive ? 'active-nav':''}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to='/contact' className={({isActive}) => isActive ? 'active-nav':''}>Contact Me</NavLink>
              </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav