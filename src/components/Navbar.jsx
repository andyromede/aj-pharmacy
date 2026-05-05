import { useState, useEffect } from 'react';
import { Menu, X, MapPin, Phone, Clock } from 'lucide-react';
import logoMark from '../assets/A&J Pharmacy pic logo square no blue background no pharmacy.png';
import logoText from '../assets/pharmacy blue name.png';
import { handleMapClick } from '../utils/mapUtils';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayDate = new Date();
  const today = todayDate.getDay();
  const todayName = daysOfWeek[today];
  let todayHours = `Open ${todayName}: 9 AM – 6 PM`;
  let isOpen = true;
  
  if (today === 0) {
    todayHours = `Closed ${todayName}`;
    isOpen = false;
  } else if (today === 6) {
    todayHours = `Open ${todayName}: 9 AM – 2 PM`;
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      {/* Top Bar for contact info */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-item">
            <MapPin size={14} />
            <a href="#" onClick={handleMapClick} style={{ textDecoration: 'underline' }}>
              1900 Empire Blvd, Webster, NY 14580
            </a>
          </div>
          <div className="top-bar-item">
            <Phone size={14} />
            <a href="tel:+15858727575" style={{ textDecoration: 'underline' }}>(585) 872-7575</a>
          </div>
          <div className="top-bar-item">
            <div className={`status-dot ${isOpen ? 'open' : 'closed'}`}></div>
            <span style={{ fontWeight: 600 }}>{todayHours}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container navbar-inner">
          <div className="logo">
            <a href="#home" className="logo-container">
              <img src={logoMark} alt="A&J Logo Mark" className="logo-img-mark" />
              <img src={logoText} alt="Pharmacy Logo Text" className="logo-img-text" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="desktop-nav">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-primary">Visit Us</a>
          </div>

          {/* Mobile Nav Toggle */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="#contact" 
                  className="btn btn-primary mobile-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
