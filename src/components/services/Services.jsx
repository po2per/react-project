import React from 'react'
import './services.css'
import {FiCheck} from 'react-icons/fi'

const Services = () => {
  return (
    <section id="services">
      <h5>Популярные</h5>
      <h2>Курсы</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>С++</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Переменные, типы данных</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Порядок выполнения кода в программе. Ветвления, циклы</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Массивы. Строки. Указатели и ссылки</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Функции</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>ООП</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Управление памятью C/C++</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Шаблоны</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Алгоритмы сортировки</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>STL</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Создание UI для проекта</p>
              </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>C#</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Основы языка C#</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>ООП: наследование, инкапсуляция, полиморфизм</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Классы и объекты</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Чтение файлов и работа с ними</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Реализация интерфейсов</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Обработка исключений</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Коллекции C#</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Основы LINQ</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Разработка в ASP.NET Core</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Создание Web API</p>
              </li>
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Python</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheck className='service__list-icon'/>
              <p>Введение</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Основы работы с Python</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Операторы, выражения</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Циклы</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Функции</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Базовые коллекции. Списки.</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>List: методы работы со списками.</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Работа с файлами.</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>ООП</p>
              </li>
              <li>
              <FiCheck className='service__list-icon'/>
              <p>Библиотеки для работы с данными.</p>
              </li>
              
          </ul>
        </article>

      </div>
    </section>
  )
}

export default Services