import React, { useState } from 'react'
import downArrow from '../images/icon-arrow-down.svg'
import calendar from '../images/icon-calendar.svg'
import planning from '../images/icon-planning.svg'
import reminders from '../images/icon-reminders.svg'
import todo from '../images/icon-todo.svg'


function MobileMenu({ mobileMenu }) {

  const [featuresMenu, setFeaturesMenu] = useState(false)
  const [companyMenu, setCompanyMenu] = useState(false)

  return (
    <div className={mobileMenu
      ? 'fixed bg-black/60 w-full h-screen top-0 left-0 z-20 duration-500 '
      : 'fixed bg-transparent w-full h-screen top-0 left-0 -z-10 duration-500'}>
      <div className={mobileMenu
        ? 'relative w-7/12 h-screen ml-auto  bg-white translate-x-0  duration-500'
        : 'relative w-7/12 h-screen ml-auto  bg-white translate-x-full duration-500'}>
        <ul className='pt-16 pl-8'>

          <li
            className='mb-5 cursor-pointer'
            onClick={() => setFeaturesMenu(!featuresMenu)}
          >Features
            <img src={downArrow}
              alt='down arrow icon'
              className={featuresMenu ? 'rotate-180 inline-block ml-2' : 'inline-block ml-2'} />
          </li>

          <div className={featuresMenu ? 'ml-8 max-h-44 duration-500' : 'ml-8 max-h-0 overflow-hidden duration-500'}>
            <li className='mb-4'><a href=''><img src={todo} alt='todo icon' className='inline-block' />Todo List</a></li>
            <li className='mb-4'><a href=''><img src={calendar} alt='calendar icon' className='inline-block' />Calendar</a></li>
            <li className='mb-4'><a href=''><img src={reminders} alt='reminders icon' className='inline-block' />Reminders</a></li>
            <li className='mb-5'><a href=''><img src={planning} alt='planning icon' className='inline-block' />Planning</a></li>
          </div>

          <li
            className='mb-5 cursor-pointer'
            onClick={() => setCompanyMenu(!companyMenu)}
          >Company
            <img src={downArrow}
              alt='down arrow icon'
              className={companyMenu ? 'rotate-180 inline-block ml-2' : 'inline-block ml-2'} />
          </li>

          <div className={companyMenu ? 'ml-8 max-h-44 duration-500' : 'ml-8 max-h-0 overflow-hidden duration-500'}>
            <li className='mb-4'><a href=''>History</a></li>
            <li className='mb-4'><a href=''>Our Team</a></li>
            <li className='mb-5'><a href=''>Blog</a></li>
          </div>

          <li className='mb-5'><a href=''>Careers</a></li>
          <li className='mb-5'><a href=''>About</a></li>

        </ul>

        <section className='text-center'>
          <a href='' className='block mb-5'><button>Login</button></a>
          <a href=''><button className='border-2 py-2 border-mediumGray px-12 rounded-2xl'>Register</button></a>
        </section>
      </div>
    </div>
  )
}

export default MobileMenu