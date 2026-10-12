import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>Kami membangun inovasi resiliensi sosial</h1>
                <p>Solusi inovasi kami didesain untuk memperkuat komunitas dan mendorong pertumbuhan yang berkelanjutan</p>
                <button className='btn'>Jelajahi Program Kami <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero