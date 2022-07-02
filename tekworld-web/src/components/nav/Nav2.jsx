import React from 'react'
import { useState } from 'react'

import './nav.css'

import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'
import {BsFacebook} from 'react-icons/bs'

import {FaLinkedin} from 'react-icons/fa'
import {FaFacebookMessenger} from 'react-icons/fa'

import Logo from '../../assets/Logo.png'

/*============== RETURN MENU LINKS ===============*/
const Menu = () =>(
  <>
  <p><a href='Home'> Home</a></p>
  <p><a href='About'> Quem Somos</a></p>
  <p><a href='Projects'> Os Nossos Projetos</a></p>
  <p><a href='Blog'> Blog</a></p>
  <p><a href='Contacts'> Contactos</a></p>
  </>
)

const Socials = () =>(
  <>
    <p><a href='https://www.facebook.com/tktekworld' target='_blank'><BsFacebook/></a></p>
    <p><a href='https://www.linkedin.com/company/tk-tekworld' target='_blank'><FaLinkedin/></a></p>
    <p><a href='https://m.me/tktekworld/'  target='_blank'><FaFacebookMessenger/></a></p>
  </>
)

const Nav = () => {
  const[toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <img src={Logo} alt='logo'/>
        </div>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='navbar-socials'>
        <Socials/>
      </div>
     
      {/*======================MOBILE MENU=======================*/}
      {/*==Activate/Deactivate==*/}
      <div className='navbar-menu'>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
        }
        {/*==Display Content==*/}
        {toggleMenu &&(
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='navbar-menu_container-socials'>
              <Socials/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Nav