import React from 'react'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'
//import {ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={"sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5"}>
        <div className='flex flex-col justify-center itenms-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#e9dfff] '/>
          <div className='w-1 sm:h-80 h-40 white-gradient ml-2'/>
        </div>
        <div className='mt-4'>
          <h1 className={`${styles.heroHeadText}`}>We are </h1>
          <h1 className={`${styles.heroHeadText} text-[#e9dfff]`} >CodeChef | BU</h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>hehe</p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero