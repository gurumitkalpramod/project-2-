import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './components/Home/Homepage'
import { Route, Routes } from 'react-router-dom'
import { Footer } from 'flowbite-react'
import Layout from './components/Layout/Layout'
import About from './components/About/about'
import Contact from './components/Contact/Contact'
import Footerbar from './components/footer/Footer'
import Header from './components/commons/Header'

 
function App() {

  return (
      <div>
        <Header />
      <Routes>
     
        
        <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About/>} />
<Route path="/contact" element={<Contact />} />


      
</Routes>
 <Footerbar />
        </div>
   
  )
}

export default App
