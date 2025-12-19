import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import About from './pages/About'
import Footer from './pages/Footer'
import ScrollToTop from './components/ScrollToTop'
import Privacypolicy from './components/Privacypolicy'
import Refundpolicy from './components/Refundpolicy'
import Shippingpolicy from './components/Shippingpolicy'
import Termsofservice from './components/Termsofservice'
import Contact from './pages/Contact'

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <div>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/privacy-policy' element={<Privacypolicy />} />
            <Route path='/Refund-policy' element={<Refundpolicy />} />
            <Route path='/Shipping-policy' element={<Shippingpolicy />} />
            <Route path='/Termsofservice-policy' element={<Termsofservice />} />
            <Route path='/contact' element={<Contact />} />

            
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  )
}

export default App
