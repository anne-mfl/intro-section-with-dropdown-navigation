import React from 'react'
import logo from '../images/logo.svg'
import downArrow from '../images/icon-arrow-down.svg'
import upArrow from '../images/icon-arrow-up.svg'

import calendar from '../images/icon-calendar.svg'
import closeMenu from '../images/icon-close-menu.svg'
import menu from '../images/icon-menu.svg'
import planning from '../images/icon-planning.svg'
import reminders from '../images/icon-reminders.svg'
import todo from '../images/icon-todo.svg'

function Header() {

  return (
    <div>
      <header className='flex justify-between items-center py-7 px-12'>

        <nav className='flex items-center'>
          <img src={logo} alt='snap logo' className='mr-24' />

          <ul className='flex'>

            <div className='dropdown'>
              <li
                className='flex items-center mr-8 hover:text-black cursor-pointer dropbtn'
              >
                Features
                <img src={downArrow} alt='down arrow icon'
                  className='ml-2 rotate-0  arrow' />
              </li>
              <div className='dropdown-content'>
                <a href='' ><img src={todo} alt='todo icon' className='inline mr-2'/>Todo&nbsp;List</a>
                <a href=''><img src={calendar} alt='calendar icon' className='inline mr-2'/>Calendar</a>
                <a href=''><img src={reminders} alt='reminders icon' className='inline mr-2'/>Reminders</a>
                <a href=''><img src={planning} alt='planning icon' className='inline mr-2'/>Planning</a>
              </div>
            </div>

            <div className='dropdown'>
              <li
                className='flex items-center mr-8 hover:text-black cursor-pointer dropbtn'
              >
                Company
                <img src={downArrow} alt='down arrow icon'
                  className='ml-2 rotate-0  arrow' />
              </li>
              <div className='dropdown-content'>
                <a href=''>History</a>
                <a href=''>Our&nbsp;Team</a>
                <a href=''>Blog</a>
              </div>
            </div>


            <li className='flex items-center mr-8 hover:text-black'><a href=''>Careers</a></li>

            <li className='flex items-center mr-8 hover:text-black'><a href=''>About</a></li>
          </ul>

        </nav>

        <section>
          <button className='mr-12'>Login</button>
          <button className='border-2 border-mediumGray rounded-2xl py-3 px-5'>Register</button>
        </section>

      </header>





    </div>
  )
}

export default Header