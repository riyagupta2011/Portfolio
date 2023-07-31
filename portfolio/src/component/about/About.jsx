import React from 'react'
import "./about.css"
import ME from "../../assets/me.jpg"
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about_container">
       <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="About Image" srcset="" />
        </div>
       </div>
       <div className="about__content">
      <p>As a full-stack developer, I have a passion for creating innovative and efficient solutions to complex problems. With a strong foundation in both front-end and back-end development, I take pride in crafting seamless user experiences that leverage cutting-edge technologies.</p>
      <p>Throughout my journey as a developer, I have successfully delivered robust web applications and scalable APIs, demonstrating my proficiency in languages such as JavaScript, Python, and SQL. Collaborating with cross-functional teams, I have honed my communication and teamwork skills, allowing me to thrive in dynamic and fast-paced environments.</p>
       <a href="#contact " className='btn btn-primary' >Let's Talk</a>
       </div>
      </div>
    </section>
  )
}

export default About