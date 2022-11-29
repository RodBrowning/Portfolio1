import React from 'react'
import Image from 'next/image'
import testimonial from '../../styles/Testimonials.module.css'
import AVTR1 from '../../public/assets/avatar1.jpg'
import AVTR2 from '../../public/assets/avatar2.jpg'
import AVTR3 from '../../public/assets/avatar3.jpg'
import AVTR4 from '../../public/assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam neque molestiae mollitia. Ipsam blanditiis, deserunt consequatur similique corrupti fugit sed ab quas eos vel aliquam nobis consequuntur? Laboriosam, nostrum.',
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam neque molestiae mollitia. Ipsam blanditiis, deserunt consequatur similique corrupti fugit sed ab quas eos vel aliquam nobis consequuntur? Laboriosam, nostrum.',
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam neque molestiae mollitia. Ipsam blanditiis, deserunt consequatur similique corrupti fugit sed ab quas eos vel aliquam nobis consequuntur? Laboriosam, nostrum.',
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam neque molestiae mollitia. Ipsam blanditiis, deserunt consequatur similique corrupti fugit sed ab quas eos vel aliquam nobis consequuntur? Laboriosam, nostrum.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper
       className={`container ${testimonial.container}`}
       
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}) => {
            return (
              <SwiperSlide className={testimonial.testimonial} key={name}>
                <div className={testimonial.client_avatar}>
                  <Image src={avatar} alt={name} />
                </div>
                <h5 className={testimonial.client_name}>{name}</h5>
                <small className={testimonial.client_review}>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials