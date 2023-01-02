import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'


/// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";


const data = [
  {
    avatar: AVATAR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid natus odio quae! Laudantium facilis nulla veniam dolorem beatae excepturi rerum nostrum possimus ipsam, debitis, sequi fugiat nam, labore tempore!'
  },
  {
    avatar: AVATAR2,
    name: 'Noname Blank',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid natus odio quae! Laudantium facilis nulla veniam dolorem beatae excepturi rerum nostrum possimus ipsam, debitis, sequi fugiat nam, labore tempore!'
  },
  {
    avatar: AVATAR3,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid natus odio quae! Laudantium facilis nulla veniam dolorem beatae excepturi rerum nostrum possimus ipsam, debitis, sequi fugiat nam, labore tempore!'
  },
  {
    avatar: AVATAR4,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique aliquid natus odio quae! Laudantium facilis nulla veniam dolorem beatae excepturi rerum nostrum possimus ipsam, debitis, sequi fugiat nam, labore tempore!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container container__testimonials" 
      // install Swiper modules
      pagination={true} modules={[Pagination]}>
      {
        data.map(({avatar, name, review}, index) =>{
          return (
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={avatar}/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className="client__review">
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