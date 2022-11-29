import React from 'react'
import portfolio from '../../styles/Portfolio.module.css'
import Image from 'next/image'
import IMG1 from '../../public/assets/portfolio1.jpg'
import IMG2 from '../../public/assets/portfolio2.jpg'
import IMG3 from '../../public/assets/portfolio3.jpg'
import IMG4 from '../../public/assets/portfolio4.jpg'
import IMG5 from '../../public/assets/portfolio5.png'
import IMG6 from '../../public/assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/17290917-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Charts templates & infographics in Figma',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'charts templates & infographics in Figma',
    github: 'https://github.com/RodBrowning',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className={`container ${portfolio.container}`}>
          {
            data.map(({image, title, github, demo})=>{
              return (
                <article className={portfolio.item} key={demo}>
                  <div className={portfolio.item_image}>
                    <Image src={image} alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className={portfolio.item_cta}>
                    <a href={github} target="_blank" className='btn'  rel="noreferrer">Github</a>
                    <a href={demo} target="_blank"  className='btn btn-primary' rel="noreferrer">Live Demo</a>
                  </div>
                </article>
              )
            })
          }
      </div>
    </section>
  )
}

export default Portfolio