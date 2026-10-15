import React, { useRef, useState, useEffect } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
    const slider = useRef();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 850);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const maxIndex = isMobile ? 3 : 2;

    const slideForward = () => {
        if (currentIndex < maxIndex) {
            const next = currentIndex + 1;
            setCurrentIndex(next);
            const step = isMobile ? 25 : 25;
            slider.current.style.transform = `translateX(-${next * step}%)`;
        }
    }

    const slideBackward = () => {
        if (currentIndex > 0) {
            const prev = currentIndex - 1;
            setCurrentIndex(prev);
            const step = isMobile ? 25 : 25;
            slider.current.style.transform = `translateX(-${prev * step}%)`;
        }
    }

    return (
        <div className='testimonials' id='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Previous" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="Dr. Anna Zakiyatul Laila" />
                                <div>
                                    <h3>Dr. Anna Zakiyatul Laila</h3>
                                    <span>Dosen Pembimbing Teknik Material ITS</span>
                                </div>
                            </div>
                            <p>
                                "Inisiatif Inovantara membawa pendekatan ilmiah yang aplikatif.
                                Pemanfaatan limbah batang pisang menjadi biochar terbukti secara uji
                                FTIR & SEM memiliki struktur pori dan kapasitas retensi air yang sangat baik untuk tanah kering Galis."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="Ketua Kelompok Tani SHINTA II" />
                                <div>
                                    <h3>Pak Mat Sani</h3>
                                    <span>Ketua Kelompok Tani SHINTA II Galis</span>
                                </div>
                            </div>
                            <p>
                                "Sebelumnya limbah batang pisang hanya dibakar atau dibiarkan membusuk.
                                Dengan pelatihan drum kiln portable dari adik-adik Inovantara, kami bisa memproduksi pupuk biochar mandiri
                                untuk menyuburkan tanah kebun kami."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="Reni Nurdiana" />
                                <div>
                                    <h3>Reni Nurdiana</h3>
                                    <span>Ketua Tim Proyek Inovantara ITS</span>
                                </div>
                            </div>
                            <p>
                                "Melalui integrasi BioBank Desa dan QR traceability, warga mendapatkan insentif Carbon Point
                                dari setiap limbah yang disetor. Ini mewujudkan ekonomi sirkular desa yang mandiri dan berkelanjutan."
                            </p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="Perwakilan BUMDes Galis" />
                                <div>
                                    <h3>BUMDes & Pemdes Galis</h3>
                                    <span>Mitra Kelembagaan & Distribusi</span>
                                </div>
                            </div>
                            <p>
                                "Program PF Muda Inovantara memberikan modal teknologi permanen bagi desa.
                                CAPEX 72,3% langsung terkonversi menjadi alat produksi yang dikelola desa untuk kesejahteraan petani."
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials