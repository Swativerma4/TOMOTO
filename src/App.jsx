import { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'


import Home from './components/pages/Home/Home'
import Card from './components/pages/Card/Card'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
    <>
       
      <div className='app'>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Card />} />

          
        </Routes>

       

      </div>
      <Footer/>

    </>
  )
}

export default App
