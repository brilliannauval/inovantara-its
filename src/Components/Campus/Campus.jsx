import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'

const Campus = () => {
    return (
        <div className='campus' id='campus'>
            <div className="gallery">
                <div className="gallery-item">
                    <img src={gallery_1} alt="Limbah Pisang Desa Galis" />
                    <div className="overlay">
                        <span>Bahan Baku Limbah Batang Pisang</span>
                    </div>
                </div>
                <div className="gallery-item">
                    <img src={gallery_2} alt="Produksi Biochar Ramah Lingkungan" />
                    <div className="overlay">
                        <span>Pirolisis Biochar Ramah Lingkungan</span>
                    </div>
                </div>
                <div className="gallery-item">
                    <img src={gallery_3} alt="Aplikasi Biochar pada Lahan Pertanian" />
                    <div className="overlay">
                        <span>Aplikasi Pembenah Tanah & Retensi Air</span>
                    </div>
                </div>
                <div className="gallery-item">
                    <img src={gallery_4} alt="Pelatihan Kelompok Tani SHINTA II" />
                    <div className="overlay">
                        <span>Pemberdayaan Kelompok Tani Desa Galis</span>
                    </div>
                </div>
            </div>
            <Link to='contact' smooth={true} offset={-260} duration={500}>
                <button className='btn dark-btn'>Dukung & Kolaborasi <img src={white_arrow} alt="" /></button>
            </Link>
        </div>
    )
}

export default Campus