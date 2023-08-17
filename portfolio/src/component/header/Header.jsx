import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from "../../assets/Me1 .png"
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div className="i">
    <div className="i-left">
      <div className="i-left-wrapper">
        <h2 classname="i-intro">Hello My name is</h2>
        <h1 className='i-name'>Riya Gupta</h1>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Content Writing</div>
            <div className="i-title-item">C++ programmer</div>
          </div>
        </div>
        <p className="i-desc">
          I design and devlop services for customer all sizes,specializing in creating stylish,morden websites,online stores.
        </p>
        <CTA/>
      </div>
      
    </div>
    <div className="i-right">
      <div className="i-bg"></div>
      <img src={ME} alt="" className="i-img" />
    </div>
  </div>
  )
}

export default Header