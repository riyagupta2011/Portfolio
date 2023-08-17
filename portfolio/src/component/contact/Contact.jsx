import React,{useRef} from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import { BsWhatsapp } from 'react-icons/bs'
import { LuInstagram } from 'react-icons/lu'

import emailjs from '@emailjs/browser';
const Contact = () => {
  const form=useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s5mm41e', 'template_lws19r6', form.current, 'z4Ts5ch1-8Ph7wQiE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <artice className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>riyagupta75751@gmail.com</h5>
          <a href="mailto:riyagupta75751@gmail.com" target="_blank">Send a Message</a>
        </artice>

        <artice className="contact__option">
          <LuInstagram className='contact__option-icon'/>
          <h4>Instagram</h4>
          <h5>riyagupta_rg20</h5>
          <a href="https://www.instagram.com/riyagupta_rg20/" target="_blank">Send a Message</a>
        </artice>

        <artice className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>9887475751</h5>
          <a href="https://api.whatsapp.com/send?phone=919887475751" target="_blank">Send a Message</a>
        </artice>
        </div>
        {/* end of contact options */}
        <form ref={form} onSubmit={sendEmail}>
           <input type="text" name="name" id="" placeholder="Your Full Name" required />
           <input type="email" name="email" placeholder="Your email" />
           <textarea name="message" id=""  rows="7" placeholder='Your message' required></textarea>
           <button type="submit" className='btn btn-primary'>Submit</button>
         </form>
      </div>
      </section>
  )
}

export default Contact