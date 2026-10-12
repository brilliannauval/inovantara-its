import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Mengirim....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0bf584f9-78bc-4e60-bdda-778b7ce4331f");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Pesan Anda Berhasil Terkirim");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("Pesan Gagal Terkirim");
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Kirim Pesan <img src={msg_icon} alt="" /></h3>
                <p>Jangan ragu untuk menghubungi kami jika
                    Anda memiliki pertanyaan, masukan, atau
                    ingin berkolaborasi dengan Inovantara.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />inovantara-its@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+62 812 3456 789</li>
                    <li><img src={location_icon} alt="" />Institut Teknologi Sepuluh Nopember <br /> Surabaya, Indonesia</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Nama Anda</label>
                    <input type="text" name='name' placeholder='Masukkan nama Anda' required />
                    <label>Nomor Telepon</label>
                    <input type="tel" name='phone' placeholder='Masukkan nomor telepon Anda' required />
                    <label>Tulis pesan Anda</label>
                    <textarea name="message" rows="6" placeholder='Masukkan pesan Anda' required></textarea>
                    <button type='submit' className='btn dark-btn'>Kirim sekarang <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact