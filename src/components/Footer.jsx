import { MapPin, Phone, Mail } from 'lucide-react';
import { handleMapClick } from '../utils/mapUtils';
import logo from '../assets/A&J Pharmacy pic logo square no blue background.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <div className="footer-logo">
              <img src={logo} alt="A&J Pharmacy Logo" className="logo-img" />
            </div>
            <p className="footer-desc">
              Your friendly neighborhood pharmacy offering reliable care, specialized packaging, and free delivery throughout Monroe County.
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-services">
            <h4 className="footer-heading">Services</h4>
            <ul>
              <li>Blister Pack: Medicine-On-Time (MOT)</li>
              <li>Compounding Medication</li>
              <li>Free Delivery</li>
              <li>All Insurances Accepted</li>
              <li>Specialty ED Meds</li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contact Info</h4>
            <ul>
              <li>
                <MapPin size={16} />
                <a href="#" onClick={handleMapClick} style={{ textDecoration: 'underline', color: 'inherit' }}>
                  <span>1900 Empire Blvd<br/>Webster, NY 14580</span>
                </a>
              </li>
              <li>
                <Phone size={16} />
                <a href="tel:+15858727575">(585) 872-7575</a>
              </li>
              <li>
                <Mail size={16} />
                <span>sle@anjpharmacy.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Connect With Us</h3>
            <p style={{ color: 'white', marginBottom: '1rem', lineHeight: '1.6' }}>
              Follow us on social media for health tips and pharmacy updates.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com/AJPharmacyRoch/" target="_blank" rel="noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', transition: 'all 0.3s ease' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/a-j-pharmacy/" target="_blank" rel="noreferrer" className="social-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', transition: 'all 0.3s ease' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} A&J Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
