import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-left">
                <img src={about_img} alt="Pemberdayaan Petani Pisang Inovantara" className='about-img' />
                <img src={play_icon} alt="Putar Video Dokumentasi" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>Tentang Inovantara</h3>
                <h2>Inovasi Nusantara untuk Resiliensi Sosial & Pertanian</h2>
                <p>
                    INOVANTARA membangun ekosistem biochar berbasis limbah batang pisang sebagai pembenah tanah
                    untuk meningkatkan retensi air, struktur tanah, dan efisiensi hara pada lahan kering
                    dan miskin bahan organik di Desa Galis, Pamekasan, Jawa Timur.
                </p>
                <p>
                    Dengan konsep <em>waste-to-value</em>, kami mengintegrasikan pemberdayaan petani, teknologi tepat guna drum kiln portable,
                    standardisasi mutu, BioBank desa dengan Carbon Point, hingga pemasaran digital dengan QR traceability.
                </p>
            </div>
        </div>
    )
}

export default About