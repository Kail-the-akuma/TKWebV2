import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserCircle} from 'react-icons/fa'
import {ImBooks} from 'react-icons/im'
import {FiPenTool} from 'react-icons/fi'
import {GiConsoleController} from 'react-icons/gi'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className='FullScreenNav'>
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}>
        <FaHome/>
      </a>
      <a href="#About" onClick={() => setActiveNav('#About')}
      className={activeNav === '#About' ? 'active' : ''}>
        <FaUserCircle/>
        </a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')}
      className={activeNav === '#Experience' ? 'active' : ''}>
        <ImBooks/>
      </a>
      <a href="#Services" onClick={() => setActiveNav('#Services')}
      className={activeNav === '#Services' ? 'active' : ''}>
        <FiPenTool/>
      </a>
      <a href="#Portfolio"onClick={() => setActiveNav('#Portfolio')}
      className={activeNav === '#Portfolio' ? 'active' : ''}>
        <GiConsoleController/>
        </a>
      <a href="#Contacts" onClick={() => setActiveNav('#Contacts')}
      className={activeNav === '#Contacts' ? 'active' : ''}>
        <BiMessageDetail/>
      </a>
    </nav>
    </div>

  )
}

export default Nav