import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Login from './pages/Login'
import About from './pages/About'
import Footer from './pages/Footer'
import ScrollToTop from './components/ScrollToTop'

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
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </>
  )
}

export default App
