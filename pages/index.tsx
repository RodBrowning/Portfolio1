import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import Experience from '../components/experience/Experience'
import Footer from '../components/footer/Footer'
import Head from 'next/head'
import Header from '../components/header/Header'
import Nav from '../components/nav/Nav'
import Portfolio from '../components/portfolio/Portfolio'
import Services from '../components/services/Services'
import Testimonials from '../components/testimonials/Testimonials'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

export default function Home() {
  const [activeNavFromObserver, setActiveNavFromObserver] = useState("#")
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Protfolio</title>
        <meta name="description" content="One page app for portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header setActiveNav={setActiveNavFromObserver} />
        <Nav activeNav={activeNavFromObserver} setActiveNav={setActiveNavFromObserver}/>
        <About setActiveNav={setActiveNavFromObserver} />
        <Experience setActiveNav={setActiveNavFromObserver} />
        <Services setActiveNav={setActiveNavFromObserver} />
        <Portfolio />
        <Testimonials />
        <Contact setActiveNav={setActiveNavFromObserver} />
        <Footer />
      </main>
    </div>
  )
}
