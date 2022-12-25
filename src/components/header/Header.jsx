import React from 'react'
import './header.css'
import CTA from './CTA'
import HeadrSocials from './HeadrSocials'
import ME from '../../assets/me.png'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Paul Khlynovsky</h1>
        <h5 className="text-light">
          Fullstack Developer
        </h5>
        <CTA />
        <HeadrSocials />
        <div className="me">
          <img src={ME} alt="it" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header