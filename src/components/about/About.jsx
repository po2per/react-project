import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Узнать</h5>
      <h2>О Школе</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Опыт</h5>
              <small>2+ года</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Ученики</h5>
              <small>30+ По Всему Миру</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Пректы</h5>
              <small>15+ Завершенных</small>
            </article>
          </div>

          <p>
            The Goody IT School - это онлайн школа, для всех возрастов! Благодаря уникальной учебной программе и индивидуальному подходу к каждому ченику, наши преподователи привьют желание развиваться, стремиться к новым знаниям и никогда не отчаиваться на своем пути. Мы поможем вам выбрать наиболее подходящее и увлекательное направление, ознакомим с самой актуальной информацией и на протяжении всего пути будем поддерживать связь и делиться опытом. Наши ученики получают поддержку и консультации даже после окончания обучения. Ведь нам важно, чтобы вы не останавливались на достигнутом и всегда шли к своей цели. Первое занятие совершенно бесплатное, мы подберем наиболее удобное для вас время, будем рады вас видеть!
          </p>

          <a href="#contact" className='btn btn-primary'>Записаться</a>


        </div>
      </div>
    </section>
  )
}

export default About