import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbbleSquare} from 'react-icons/fa'

const HeadrSocials = () => {
  return (
    <div className="header__socials">
        <a href="#" target="_blank"><BsLinkedin size={'1.5em'}/></a>
        <a href="#" target="_blank"><BsGithub size={'1.5em'}/></a>
        <a href="#" target="_blank"><FaDribbbleSquare size={'1.5em'}/></a>
    </div>
  )
}

export default HeadrSocials