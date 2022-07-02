import React from 'react'
import './feature.css'

const Feature = ({title, text}) => {
  return (
    <div className='features-card'>
      <div className='features-container_feature'>
        <div className='features-container_feature-title'>
          <div className='features-conteiner_feature-title-line'/>      
          <h1>{title}</h1>
        </div>
        <div className='features-container_feature-text'>
          <p>{text}</p>
        </div>
      </div>
    </div>

  )
}

export default Feature