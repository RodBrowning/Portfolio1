import React, { useRef } from 'react'
import contact from '../../styles/Contact.module.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm('service_pu97eqn', 'template_zezb2xf', formRef.current!, 'QAlycMCEUd6KSl0Q5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.currentTarget.reset()
  }
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className={`container ${contact.container}`}>
        <div className={contact.options}>
        <article className={contact.option}>
          <MdOutlineEmail className={contact.option_icon} />
          <h4>Email</h4>
          <h5>rodrigo.browning@gmail.com</h5>
          <a href="mailto:rodrigo.browning@gmail.com" target='_blank' rel="noreferrer" >Send a message</a>

        </article>
        <article className={contact.option}>
          <RiMessengerLine className={contact.option_icon} />
          <h4>Messenger</h4>
          <h5>Rodrigo moura</h5>
          <a href="http://m.me" target='_blank' rel="noreferrer" >Send a message</a>
        </article>
        <article className={contact.option}>
          <BsWhatsapp className={contact.option_icon} />
          <h4>Whatsapp</h4>
          <h5>+55 11 9 4948 5112</h5>
          <a href="https://wa.me/5511949485112" target='_blank' rel="noreferrer" >Send a message</a>
        </article>
        </div>
        <form action="" ref={formRef} onSubmit={(e) => sendEmail(e)} className={contact.form}>
          <input type="text" name="name" placeholder="Your full name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows={7} placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact