import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div className='hero container' id='hero'>
            <div className="hero-text">
                <p className="hero-subtitle">Proyek Sosial PF Muda 2026 · Resiliensi Sosial</p>
                <h1>Pemberdayaan Petani Pisang Desa Galis Melalui Biochar</h1>
                <p>Mengubah limbah batang pisang menjadi biochar bernilai tambah untuk meningkatkan kesuburan tanah dan kesejahteraan petani melalui ekosistem ekonomi sirkular desa.</p>
                <div className="hero-stats">
                    <div className="stat">
                        <strong>31</strong>
                        <span>Petani Mitra</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <strong>≥70%</strong>
                        <span>Limbah Termanfaatkan</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat">
                        <strong>10-20 kg</strong>
                        <span>Biochar / Siklus</span>
                    </div>
                </div>
                <div className="hero-btn-wrapper">
                    <Link to='program' smooth={true} offset={-260} duration={500}>
                        <button className='btn'>Jelajahi Program Kami <img src={dark_arrow} alt="" /></button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero