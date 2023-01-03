import React from 'react'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const HeadrSocials = () => {
  return (
    <div className="header__socials">
        <a href="mailto:po2per@gmail.com" target="_blank"><MdOutlineEmail size={'1.5em'}/></a>
        <a href="https://t.me/po2per" target="_blank"><FaTelegramPlane size={'1.5em'}/></a>
        <a href="https://api.whatsapp.com/send?phone=79831755962" target="_blank"><FaWhatsapp size={'1.5em'}/></a>
    </div>
  )
}

export default HeadrSocials