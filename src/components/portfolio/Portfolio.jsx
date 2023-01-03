import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'C++ Начальный',
    github: "#contact",
    demo : "#"
  },
  {
    id: 2,
    image: IMG2,
    title: 'C++ Продвинутый',
    github: "#contact",
    demo : "#"
  },
  {
    id: 3,
    image: IMG3,
    title: 'C# Разработка приложений',
    github: "#contact",
    demo : "#"
  },
  {
    id: 4,
    image: IMG4,
    title: 'Python разработка приложений',
    github: "#contact",
    demo : "#"
  },
  {
    id: 5,
    image: IMG5,
    title: 'Web разработка',
    github: "#contact",
    demo : "#"
  },
  {
    id: 6,
    image: IMG6,
    title: 'Unreal Engine 5 создание 2D платформера',
    github: "#contact",
    demo : "#"
  }

]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Подробнее</h5>
      <h2>О курсе</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>
                {title}
              </h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' >Записаться</a>
                <a href={demo} className='btn btn-primary' target='_blank'>О курсе</a>
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