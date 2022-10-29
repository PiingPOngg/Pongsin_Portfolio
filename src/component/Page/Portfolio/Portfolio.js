import './Portfolio.css'
import IMG1 from './demo1.PNG'

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio-box">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="demo1" />
          </div>

          <h3>Expenses Report</h3>

          <div className='portfolio_button'>
            <a href="https://github.com/PiingPOngg/react-basic" className="btn" target="_blank" rel="noreferrer">Github</a>
            <> </>
            <a href="https://react-expense-report-pongsin.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio