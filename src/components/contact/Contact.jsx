import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import userEvent from '@testing-library/user-event'



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ya1xli6', 'template_04z94n7', form.current, 'F_XBn5aGgpw0GKPt1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Форма Связи</h5>
      <h2>Контакты</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>po2per@gmail.com</h5>
            <a href="mailto:po2per@gmail.com" target="_blank">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>@po2per</h5>
            <a href="https://t.me/po2per" target="_blank">Отправить сообщение</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+79831755962</h5>
            <a href="https://api.whatsapp.com/send?phone=79831755962" target="_blank">Отправить сообщение</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Ваше Полное Имя' required/>
          <input type="email" name='email' placeholder='Ваша Почта' required/>
          <textarea name="message" rows="8" placeholder='Сообщение' required></textarea>
          <button type='submit' className='btn btn-primary'>Отправить сообщение</button>
        </form>
      </div>
    </section>
  )
}

export default Contact