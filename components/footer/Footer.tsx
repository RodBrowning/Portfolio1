import React from 'react'
import footer from '../../styles/Footer.module.css'
import {FaFacebookF} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer id='footer' className={footer.footer}>
      <a href="#" className={footer.logo}>EGATOR</a>
      <ul className={footer.permalinks}>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className={footer.socials}>
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><RiInstagramFill /></a>
        <a href="https://twitter.com"><IoLogoTwitter /></a>
      </div>
      <div className={footer.copyright}>
        <small>&copy; Rodrigo da Silva Moura. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer