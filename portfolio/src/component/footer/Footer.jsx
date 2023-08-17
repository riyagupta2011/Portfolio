import React from 'react'
import "./footer.css"
import { BsLinkedin } from 'react-icons/bs'
import { LuInstagram } from 'react-icons/lu'
import { AiFillGithub } from 'react-icons/ai'
const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer__logo'>RIYA</a>
        <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
          
        </ul>
        <div className="footer__socials">
          <a href="https://www.linkedin.com/in/riya-gupta-aa94511bb/"><BsLinkedin/></a>
          <a href="https://www.instagram.com/riyagupta_rg20/" ><LuInstagram/></a>
          <a href="https://github.com/riyagupta2011" ><AiFillGithub/></a>
        </div>

        <div className="footer__copyright">
          <small>
            &copy; Riya .All rights reserved
          </small>
        </div>
      </footer>
    </div>
  )
}

export default Footer