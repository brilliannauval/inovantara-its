import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Program' title='Jelajahi Program Kami' />
        <Programs />
        <About />
        <Title subTitle='Galeri Foto' title='Aktivitas Kami' />
        <Campus />
        <Title subTitle='Testimoni' title='Apa Kata Mereka' />
        <Testimonials />
        <Title subTitle='Kontak Kami' title='Hubungi Kami' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App