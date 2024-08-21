import React from 'react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {styles} from '../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  return (
   <nav className={`sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary/40`}>
    <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
      <Link to="/"
      className='flex items-center gap-2'
      onClick={()=>{
        setActive("");
        windows.scrollTo(0,0)
      }}>
        <img src={logo} alt="logo" className='w-16 h-16 object-contain' />
        <p className=' text-white font-bold text-[18px] cursor-pointer tracking-wider hover:tracking-widest  duration-200 ease-in-out delay-150'>CodeChef | Bennett University</p>
      </Link>
      <ul className='list-none hidden sm:flex flex-row gap-6 p-5'>
        {navLinks.map((Link)=>(
         <li onClick={()=> setActive(Link.title)} key={Link.id}
          className={`${active=== Link.title? "text-white" :"text-secondary"} text-secondary hover:text-white hover:tracking-wider duration-200`}>
           <a href={`#${Link.id}`}>{Link.title}</a>
         </li>
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img src={toggle? close: menu} alt="Menu" onClick={()=> setToggle(!toggle)} className='w-[28px] h-[28px] object-contain' />
        <div className={`${!toggle ? "hidden":"flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`} >
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((Link)=>(
         <li onClick={()=> {
          setToggle(!toggle);setActive(Link.title);}} key={Link.id}
          className={`${active=== Link.title? "text-white" :"text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}>
           <a href={'#${Link.id}'}>{Link.title}</a>
         </li>
        ))}
      </ul>
        </div>
      </div>
    </div>
   </nav>
  )
}

export default Navbar