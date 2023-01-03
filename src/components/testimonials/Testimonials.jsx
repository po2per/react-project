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
    name: 'Илья Лапшин',
    review: 'Недавно закончил курс по Python. Преподаватель Павел очень понятно объянил вещи, которые до этого было трудно понять. Все время отвечает в Telegram, на любые вопросы по теме. Написали Telegram бота, решили много задач для подготовки к олимпиаде. Очень доволен.'
  },
  {
    avatar: AVATAR2,
    name: 'Андрей Миронов',
    review: 'Закончил курс по web. До этого год ходил на дополнительные уроки, а все чему меня научили это - база по css и html. В этой школе меня научили писать полноценные сайты и развили мои навыки. Спасбо большое Александру, лучший преподователь)'
  },
  {
    avatar: AVATAR3,
    name: 'Юля Фадейкина',
    review: 'Вчера получила сертификат и была очень довольна. За пол года я прошла 2 курса C++ для новичков и продвинутый. Не уверена, что стану хорошим программистом, но мне все очень понравилось. Буду продолжать учиться. Спасибо за поддержку!'
  },
  {
    avatar: AVATAR4,
    name: 'Наталья Сулакшина',
    review: 'От всей души спасибо за то, что заставили глаза моего сына гореться. Он каждый раз прибегал, хвастаться, что написал все новую и новую программу. Я конечно почти ничего не понимала, но точно запомнила его улыбку, когда он показывал калькулятор. С удовольствием продолжаем учиться!'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Последние отзывы</h5>
      <h2>Рекомендации</h2>

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