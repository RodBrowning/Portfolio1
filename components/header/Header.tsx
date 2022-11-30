import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import Image from 'next/image'
import React from 'react'
import img from '../../public/assets/me.png'
import styles from '../../styles/Header.module.css'
import { InView } from 'react-intersection-observer'

interface IProps {
  setActiveNav: Function;
}

const Header = ({setActiveNav}:IProps) => {
  const handleViewEntry = (inView: boolean)=> {
    if(inView){
      setActiveNav('#')
    }
  }
  return (
    <InView as="div" onChange={(inView) => handleViewEntry(inView)}>
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
    </InView>
  )
}

export default Header