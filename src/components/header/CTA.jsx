import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Скачать PDF</a>
        <a href="#contact" className='btn btn-primary'>Связаться</a>
    </div>
  )
}

export default CTA