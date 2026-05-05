import { MapPin, Phone, Mail } from 'lucide-react';
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
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
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
                <span>1900 Empire Blvd<br/>Webster, NY 14580</span>
              </li>
              <li>
                <Phone size={16} />
                <span>(585) 872-7575</span>
              </li>
              <li>
                <Mail size={16} />
                <span>info@ajpharmacy.co</span>
              </li>
            </ul>
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
