import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import Montly from './components/Cards/Montly'
import SubMain from './components/Main/SubMain'
import Products from './components/Cards/Products'
import Side from './components/Side/Side'
import Instagram from './components/Instagram/Instagram'

const App = () => {
  return (
    <>
    <div className='mx-100'>
      <Navbar/>
      <Main/>
      <SubMain/>
      <Montly/>
      <Side/>
      <Products/>
      <Instagram/>
    </div>    
    </>
  )
}

export default App
