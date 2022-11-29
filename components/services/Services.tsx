import React from 'react'
import services from '../../styles/Services.module.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>
        Services
      </h2>
      <div className={`container ${services.container}`}>
        <article className={services.service}>
          <div className={services.head}>
            <h3>
              UI/UX Design
            </h3>
          </div>
          <ul className={services.list}>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
          </ul>
        </article>
        {/* End of UX/UI Design */}

        <article className={services.service}>
          <div className={services.head}>
            <h3>
              Web Development
            </h3>
          </div>
          <ul className={services.list}>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        
        <article className={services.service}>
          <div className={services.head}>
            <h3>
              Content Creation
            </h3>
          </div>
          <ul className={services.list}>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
            <li>
              <BiCheck className={services.icon}/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.  
              </p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  )
}

export default Services