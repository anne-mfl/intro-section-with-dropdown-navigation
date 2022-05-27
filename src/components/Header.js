import React, { useState } from 'react'
import logo from '../images/logo.svg'
import downArrow from '../images/icon-arrow-down.svg'
import calendar from '../images/icon-calendar.svg'
import closeMenu from '../images/icon-close-menu.svg'
import menu from '../images/icon-menu.svg'
import planning from '../images/icon-planning.svg'
import reminders from '../images/icon-reminders.svg'
import todo from '../images/icon-todo.svg'
import MobileMenu from './MobileMenu'

function Header() {

  const [featuresMenu, setFeaturesMenu] = useState(false)
  const [companyMenu, setCompanyMenu] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <header className='
    flex justify-between lg:justify-start items-center py-5 px-4 lg:py-7 lg:px-12 '>

      <img
        src={logo}
        alt='snap logo'
        className=' 
        lg:mr-24 lg:px-12 lg:p-0 cursor-pointer'
      />


      {/* ---for mobile menu--- */}
      <img
        src={mobileMenu ? closeMenu : menu}
        alt='menu icon'
        className='lg:hidden cursor-pointer z-50'
        onClick={() => setMobileMenu(!mobileMenu)}
      />
      <MobileMenu mobileMenu={mobileMenu} />
      {/* ---------------------------- */}

      <nav className=' hidden
      lg:flex lg:justify-between lg:items-center lg:w-full
      '>

        <ul className='flex'>

          <div className='relative inline-block'>
            <li
              className={featuresMenu ? 'text-black flex items-center mr-10 cursor-pointer hover:text-black' : 'flex items-center mr-10 cursor-pointer hover:text-black'}
              onClick={() => setFeaturesMenu(!featuresMenu)}
            >
              Features
              <img src={downArrow} alt='down arrow icon'
                className={featuresMenu ? 'ml-2 rotate-180' : 'ml-2 rotate-0'} />
            </li>
            <div className={featuresMenu ? 'absolute right-9 shadow-xl rounded-2xl bg-white p-3 min-w-max' : 'hidden'}>
              <a href='' className='block px-4 py-1'><img src={todo} alt='todo icon' className='inline mr-4' />Todo&nbsp;List</a>
              <a href='' className='block px-4 py-1'><img src={calendar} alt='calendar icon' className='inline mr-4' />Calendar</a>
              <a href='' className='block px-4 py-1'><img src={reminders} alt='reminders icon' className='inline mr-4' />Reminders</a>
              <a href='' className='block px-4 py-1'><img src={planning} alt='planning icon' className='inline mr-4' />Planning</a>
            </div>
          </div>

          <div className='relative inline-block'>
            <li
              className={companyMenu ? 'text-black flex items-center mr-10 hover:text-black cursor-pointer' : 'flex items-center mr-10 hover:text-black cursor-pointer'}
              onClick={() => setCompanyMenu(!companyMenu)}
            >
              Company
              <img src={downArrow} alt='down arrow icon'
                className={companyMenu ? 'ml-2 rotate-180' : 'ml-2 rotate-0'} />
            </li>
            <div className={companyMenu ? 'absolute shadow-xl rounded-2xl bg-white p-3 min-w-max' : 'hidden'}>
              <a href='' className='block px-4 py-1' >History</a>
              <a href='' className='block px-4 py-1'>Our&nbsp;Team</a>
              <a href='' className='block px-4 py-1'>Blog</a>
            </div>
          </div>

          <li className='flex items-center mr-10 hover:text-black'><a href=''>Careers</a></li>
          <li className='flex items-center mr-10 hover:text-black'><a href=''>About</a></li>
        </ul>

        <section className=''>
          <button className='mr-12'>Login</button>
          <button className='border-2 border-mediumGray rounded-2xl py-3 px-5'>Register</button>
        </section>

      </nav>

    </header>





  )
}

export default Header