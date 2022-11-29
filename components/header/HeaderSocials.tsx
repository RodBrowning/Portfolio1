import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import React from 'react'
import styles from '../../styles/Header.module.css'

const HeaderSocials = () => {
  return (
    <div className={styles.header__socials}>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com" rel="noreferrer" target="_blank"><FaGithub /></a>
        <a href="https://dribble.com" rel="noreferrer" target="_blank"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials