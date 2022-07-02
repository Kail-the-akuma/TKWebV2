import React from 'react'
import { Feature } from '../../components'
import './about.css'

const About = () => {
  return (
    <div className='about section_margin' id="About">
      <div className='about-feature'>
      <Feature 
        title="Quem Somos" 
        text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium atque voluptate amet? '/> 
      </div>

      <div className='about-heading'>
      <h1 className='gradient_text'>Lorem ipsum dolor sit amet.</h1>
      <p>Lorem, ipsum dolor.</p>
      </div>

      <div className='about-container'>
        <Feature
         title="Quem Somos" 
         text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium atque voluptate amet? '/>
        <Feature      
          title="Quem Somos" 
          text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium atque voluptate amet? '/> 
        <Feature      
          title="Quem Somos" 
          text= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laudantium atque voluptate amet? '/> 
      </div>

    </div>
  )
}

export default About