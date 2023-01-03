import React from 'react'
import './header.css'
import CTA from './CTA'
import HeadrSocials from './HeadrSocials'
import ME from '../../assets/me.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Вас приветствует</h5>
        <h1>The Goody IT School</h1>
        <h5 className="text-light">
          Онлайн школа программирования
        </h5>
        <CTA />
        <HeadrSocials />
        <div className="me">
          <img src={ME} alt="it" />
        </div>

        <a href="#contact" className='scroll__down'>Листать Вниз</a>
      </div>
    </header>
  )
}

export default Header