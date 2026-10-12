import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' />
            </div>
            <div className="about-right">
                <h3>Tentang Kami</h3>
                <h2>Lebih dari Sekadar Komunitas</h2>
                <p>Di Inovantara, kami percaya bahwa perubahan terbesar datang dari pemberdayaan komunitas.
                    Sejak didirikan pada tahun 2026, kami telah berdedikasi untuk menciptakan
                    platform inovasi yang inklusif, di mana ide-ide hebat dapat tumbuh dan berkembang
                </p>
                <p>
                    Kami tidak hanya menyediakan sumber daya dan mentorship, tetapi juga membangun ekosistem
                    yang kolaboratif di mana para inovator dapat saling menginspirasi dan mendukung
                    perjalanan satu sama lain. Dari startup tahap awal hingga proyek berskala besar,
                    kami hadir untuk membantu mewujudkan visi Anda.
                </p>
                <p>
                    Bergabunglah dengan kami dan menjadi bagian dari gerakan yang mengubah ide menjadi
                    dampak nyata!
                </p>
            </div>
        </div>
    )
}

export default About