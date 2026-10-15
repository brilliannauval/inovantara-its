import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'


const Programs = () => {
    return (
        <div className='programs' id='program'>
            <div className="program">
                <img src={program_1} alt="Program Produksi Biochar" />
                <div className="caption">
                    <img src={program_icon_1} alt="" />
                    <p>Produksi Biochar</p>
                    <span>Pengolahan limbah batang pisang menjadi biochar menggunakan drum kiln portable dengan SOP terstandar</span>
                </div>
            </div>
            <div className="program">
                <img src={program_2} alt="Program Pemberdayaan Petani" />
                <div className="caption">
                    <img src={program_icon_2} alt="" />
                    <p>Pemberdayaan Petani</p>
                    <span>Pelatihan teknis, pendampingan, dan kaderisasi untuk produksi mandiri oleh kelompok tani</span>
                </div>
            </div>
            <div className="program">
                <img src={program_3} alt="Program Ekonomi Sirkular" />
                <div className="caption">
                    <img src={program_icon_3} alt="" />
                    <p>Ekonomi Sirkular</p>
                    <span>BioBank, marketplace digital, QR traceability, dan kemitraan BUMDes untuk keberlanjutan</span>
                </div>
            </div>
        </div>
    )
}

export default Programs