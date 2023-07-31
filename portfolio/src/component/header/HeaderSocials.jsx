import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://www.linkedin.com/in/riya-gupta-aa94511bb" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/riyagupta2011" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/riyagupta_rg20/" target="_blank"><BsInstagram/></a>

    </div>
  )
}

export default HeaderSocials