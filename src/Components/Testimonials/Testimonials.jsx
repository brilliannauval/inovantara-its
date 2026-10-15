import React from 'react'
import './Testimonials.css'
import user_1 from '../../assets/user-1.png'

const Testimonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className="testimonial-wrapper">
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
            </div>
        </div>
    )
}

export default Testimonials