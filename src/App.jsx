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
        <Title subTitle='Pilar Inovasi' title='Ekosistem Biochar Berkelanjutan' />
        <Programs />
        <About />
        <Title subTitle='Dokumentasi Kegiatan' title='Aktivitas Pemberdayaan Petani' />
        <Campus />
        <Title subTitle='Dampak & Kolaborasi' title='Suara Mitra & Pembimbing' />
        <Testimonials />
        <Title subTitle='Hubungi Kami' title='Mari Bersinergi Membangun Desa' />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App