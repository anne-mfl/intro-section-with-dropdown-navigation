import React from 'react'
import mainImageDesktop from '../images/image-hero-desktop.png'
import mainImageMobile from '../images/image-hero-mobile.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'

function Main() {
  return (
    <div className='grid grid-cols-2 items-center px-24 pt-8 pb-16 main-section'>

      <section className='justify-self-center w-10/12'>

        <h1 className='font-bold text-black text-7xl my-12'>Make<br />remote&nbsp;work</h1>
        <p className='w-9/12 mb-12'>Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.</p>
        <button className='bg-black text-white py-4 px-8 rounded-2xl border-2 border-black hover:bg-white hover:text-black font-bold '>Learn more</button>


        <div className='flex justify-between items-center w-11/12 mt-28'>
          <img src={databiz} alt='databiz logo' className='object-contain' />
          <img src={audiophile} alt='audiophile logo' className='object-contain' />
          <img src={meet} alt='meet logo' className='object-contain' />
          <img src={maker} alt='maker logo' className='object-contain' />
        </div>

      </section>




      <section className='justify-self-center'>
        <img src={mainImageDesktop} alt='man using laptop' className='object-contain' />
      </section>

    </div>
  )
}

export default Main