import React from 'react'
import './footer.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Its Goody IT School</a>

      <ul className='permalinks'>
        <li><a href="#">Главная</a></li>
        <li><a href="#about">О нас</a></li>
        <li><a href="#experience">Web технологии</a></li>
        <li><a href="#services">Популярные курсы</a></li>
        <li><a href="#portfolio">О курсах</a></li>
        <li><a href="#testimonials">Отзывы</a></li>
        <li><a href="#contact">Связь</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="#"><MdOutlineEmail /></a>
        <a href="#"><FaTelegramPlane /></a>
        <a href="#"><FaWhatsapp /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; The Goody IT School. Все права защищены.</small>
      </div>
    </footer>
  )
}

export default Footer