import React from 'react'
import './app.css'

import{Header,  Footer, Blog, Features, Possibility, About} from './containers';
import {CTA, Brand, Nav} from './components';



const App = () => {
  return (
    <div className='App'>
      {/*Header Section*/}
      <div className='gradient__BG'>
        <Nav/>
        <Header/>
      </div>
      <Brand/>
      <About/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App