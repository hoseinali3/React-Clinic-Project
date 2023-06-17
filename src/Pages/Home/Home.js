import React from 'react'
import SwiperGallery from '../../Components/SwiperGallery/SwiperGallery'
import Section1 from '../../Components/Home/Section1/Section1'
import Section2 from '../../Components/Home/Section2/Section2'
import Section3 from '../../Components/Home/Section3/Section3'

import GoToTop from '../../Components/GoToTop/GoTo-Top'
import Section4 from '../../Components/Home/Section4/Section4'

export default function Home() {
  return (
    <>
      <SwiperGallery />
      <div className='background-body'>
        <div className='container'>
          <Section1 />
        </div>
      </div>
      <div className='background-body2'>
        <div className='container'>
          <Section2 />
        </div>
      </div>
      <div className='background-body'>
        <div className='container'>
          <Section3 />
        </div>
      </div>
      <div className='background-body2'>
        <div className='container'>
          <Section4 />
        </div>
      </div>
     
      <GoToTop />
    </>
  )
}
