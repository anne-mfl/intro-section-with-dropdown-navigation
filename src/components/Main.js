import React from 'react'
import mainImageDesktop from '../images/image-hero-desktop.png'
import mainImageMobile from '../images/image-hero-mobile.png'
import audiophile from '../images/client-audiophile.svg'
import databiz from '../images/client-databiz.svg'
import maker from '../images/client-maker.svg'
import meet from '../images/client-meet.svg'

function Main() {


  return (
    <div className='
    lg:grid lg:grid-cols-2 lg:items-center lg:px-24 lg:pt-8 lg:pb-16 main-section'>

      <section className='text-center lg:text-left lg:justify-self-center lg:w-10/12'>

        {/* -----mobile image----- */}
        <section className='flex justify-center lg:hidden'>
          <img src={mainImageMobile} alt='man using laptop' className='object-contain' />
        </section>
        {/* -------------------- */}


        <h1 className='font-bold text-black text-4xl lg:text-6xl xl:text-7xl mt-8 mb-6 lg:my-12'>Make&nbsp;<br className='hidden lg:block'/>remote&nbsp;work</h1>
        <p className='px-4 mb-4 lg:px-0 lg:w-9/12 lg:mb-12'>Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.</p>
        <button className='bg-black text-white py-2 px-6 lg:py-4 lg:px-8 rounded-2xl border-2 border-black hover:bg-white hover:text-black font-bold '>Learn more</button>

        <div className='flex justify-evenly items-center  lg:w-11/12 mt-10 lg:mt-28'>
          <img src={databiz} alt='databiz logo' className='object-contain w-1/5' />
          <img src={audiophile} alt='audiophile logo' className='object-contain w-1/5' />
          <img src={meet} alt='meet logo' className='object-contain w-1/5' />
          <img src={maker} alt='maker logo' className='object-contain w-1/5' />
        </div>

      </section>


      <section className='hidden lg:block lg:justify-self-center'>
        <img src={mainImageDesktop} alt='man using laptop' className='object-contain max-w-lg' />
      </section>

    </div>
  )
}

export default Main