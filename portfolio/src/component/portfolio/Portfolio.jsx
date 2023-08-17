import React from 'react'
import "./portfolio.css"
import Social from "../../assets/social1.png"
import ElevateX from "../../assets/elevateX.png"
import movie from "../../assets/movie.png"
import whatsapp from "../../assets/whatsapp.png"
import aastha from "../../assets/aastha.png"
import blogging from "../../assets/blogging.png"
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={Social} alt="" srcset="" />
          </div>
          <h3>Mismatched-Social Media Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/SocialMediaWebsite" className='btn'  target='_blank'>Github</a>
          <a href="https://mismatchedsocial.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
       
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={ElevateX} alt="" srcset="" />
          </div>
          <h3>ElevateX-A startup investor connecting website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/GFG-project/tree/main" className='btn'  target='_blank'>Github</a>
          <a href="https://elevatexproduct.vercel.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={blogging} alt="" srcset="" />
          </div>
          <h3>Blogging Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/blogging-website" className='btn'  target='_blank'>Github</a>
          <a href="https://github.com/riyagupta2011/blogging-website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={aastha} alt="" srcset="" />
          </div>
          <h3>Aastha Stones-Website for stones and marbles</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/Aastha-Stones" className='btn'  target='_blank'>Github</a>
          <a href="https://aasthastones.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={movie} alt="" srcset="" />
          </div>
          <h3>Movie Recommendation</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/movie_recommendation" className='btn'  target='_blank'>Github</a>
          <a href="https://github.com/riyagupta2011/movie_recommendation" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>


        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={whatsapp} alt="" srcset="" />
          </div>
          <h3>WhatsApp Chat Analysis</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/riyagupta2011/WhatsappChatAnalysis" className='btn'  target='_blank'>Github</a>
          <a href="https://github.com/riyagupta2011/WhatsappChatAnalysis" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio