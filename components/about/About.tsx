import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import Image from 'next/image'
import React from 'react'
import about from '../../styles/About.module.css'
import img from '../../public/assets/me-about.jpg'
import { InView } from 'react-intersection-observer'

interface IProps {
  setActiveNav: Function;
}

const About = ({setActiveNav}:IProps) => {
  const handleViewEntry = (inView: boolean)=> {
    if(inView){
      setActiveNav('#about')
    }
  }
  return (
    <InView as="div" onChange={(inView) => handleViewEntry(inView)}>
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className={`container ${about.container}`}>
          <div className={about.me}>
            <div className={about.me_image}>
              <Image src={img} alt='about image'/>
            </div>
          </div>
          <div className={about.content}>
            <div className={about.cards}>
              <article className={about.card}>
                <FaAward className={about.icon} />
                <h5>Experience</h5>
                <small>3+ years working</small>
              </article>
              <article className={about.card}>
                <FiUsers className={about.icon} />
                <h5>Clients</h5>
                <small>200+ Worldwive</small>
              </article>
              <article className={about.card}>
                <VscFolderLibrary className={about.icon} />
                <h5>Projects</h5>
                <small>80+ compleated</small>
              </article>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur nostrum nulla quo, iusto libero consequuntur voluptatibus nihil, magni perferendis cumque placeat doloribus suscipit veniam praesentium dolore architecto beatae quas. Veniam, error.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
        </div>
        
      </section>
    </InView>
  )
}

export default About