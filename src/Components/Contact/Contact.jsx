import React, { useState } from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Mengirim pesan...");
        const formData = new FormData(event.target);

        formData.append("access_key", "0bf584f9-78bc-4e60-bdda-778b7ce4331f");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("✓ Pesan Anda berhasil terkirim. Terima kasih atas dukungan Anda!");
                event.target.reset();
            } else {
                console.log("Error", data);
                setResult("Gagal mengirim pesan. Silakan coba kembali.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setResult("Terjadi kesalahan koneksi. Silakan coba lagi.");
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-col">
                <h3>Kirim Pesan <img src={msg_icon} alt="" /></h3>
                <p>
                    Tertarik berkolaborasi, menjadi mitra pembeli biochar, atau mendukung program
                    pemberdayaan petani di Desa Galis? Hubungi tim Inovantara.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="Email" />inovantara.its@gmail.com</li>
                    <li><img src={phone_icon} alt="Telepon" />+62 812-3456-7890</li>
                    <li><img src={location_icon} alt="Lokasi" />Institut Teknologi Sepuluh Nopember (ITS), Surabaya</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nama Lengkap</label>
                    <input type="text" name='name' placeholder='Masukkan nama lengkap Anda' required />
                    <label>Nomor WhatsApp / Telepon</label>
                    <input type="tel" name='phone' placeholder='Contoh: 08123456789' required />
                    <label>Pesan atau Minat Kolaborasi</label>
                    <textarea name="message" rows="5" placeholder='Tuliskan pertanyaan atau rencana kolaborasi Anda...' required></textarea>
                    <button type='submit' className='btn dark-btn'>Kirim Pesan Sekarang <img src={white_arrow} alt="" /></button>
                </form>
                {result && <span>{result}</span>}
            </div>
        </div>
    )
}

export default Contact