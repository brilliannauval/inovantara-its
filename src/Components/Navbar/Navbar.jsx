import React, { useEffect, useState } from 'react'
import './Navbar.css'
import menu_icon from '../../assets/menu-icon.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <Link to='hero' smooth={true} offset={0} duration={500} className='logo-container'>
        <span className='logo-text'>Inovantara</span>
      </Link>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Beranda</Link></li>
        <li><Link to='program' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Program</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} onClick={() => setMobileMenu(false)}>Tentang</Link></li>
        <li><Link to='campus' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Galeri</Link></li>
        <li><Link to='testimonials' smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimoni</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn' onClick={() => setMobileMenu(false)}>Hubungi Kami</Link></li>
      </ul>
      <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}
export default Navbar