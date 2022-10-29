import './Home.css'
import { Link } from 'react-router-dom'
import Image from './me.JPG'
import { GiHand } from 'react-icons/gi'

const Home = () => {
  return (
    <header className='main__home'>
      <div className='container main__home-container'>
        <div className='main__home-left'>
          <h3>Hello There, <GiHand/> I am</h3>
          <h2>Pongsin Lertchawalit.</h2>
          <h3 className='home_h3'>I have a strong passion for building Web Application.</h3>
          <Link to="/about" className='btn lg about-btn'>About Me</Link>
        </div>
        <div className='main__home-right'>
          <div className='main__home-circle'></div>
            <div className='main__home-home'>
              <div className='main__home-img'>
                <img src={Image} alt="logo"/>
              </div>
            </div>
        </div>
      </div>
    </header>
  )
}

export default Home