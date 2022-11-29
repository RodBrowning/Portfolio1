import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/me.png'
import styles from '../../styles/Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={"container " + styles.header__container}>
        <h5>Hello I'm</h5>
        <h1>Hajia Bintu</h1>
        <h5 className="text-light">Full-stack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className={styles.me}>
          <Image src={img} alt='Me'/>
        </div>
        <a href="#contact" className={styles.scroll__down}>Scroll down</a>
      </div>
    </header>
  )
}

export default Header