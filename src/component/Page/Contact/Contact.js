import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_2ze91zk', 'template_dy0y8mk', form.current, 'U8QKKRfZZ9MVY2QHk')
      
      e.target.reset();
      alert("Message has been send");
    };

  return (
    <section className='contact-box'>
      <div className="container contact__container">
        <h2> </h2>
        <h2>Contact Me</h2>
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>pongsinlertchawalit@gmail.com</h5>
            <a href="mailto:pongsinlertchawalit@gmail.com" target="_blank" rel="noreferrer">Send an Email</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Pongsin Lertchawalit</h5>
            <a href="https://m.me/pongsin.l" target="_blank" rel="noreferrer">Send a Message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+65 88154624</h5>
            <a href="https://api.whatsapp.com/send?phone=+6588154624" target="_blank" rel="noreferrer">Send a Message</a>
          </article>
          
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name="message" row="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn lg'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
