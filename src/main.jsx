import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import API from './Components/API.jsx'
import Header from './Components/Header.jsx'
import HeroSection from './Components/HeroSection.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-black'>
    <Header />
    <HeroSection />
    <API />
  </div>
)
