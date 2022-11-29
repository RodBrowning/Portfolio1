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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Protfolio</title>
        <meta name="description" content="Pne page app for portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
