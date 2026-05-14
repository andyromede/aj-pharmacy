import { ArrowRight, Truck, MapPin, Phone, Star, StarHalf } from 'lucide-react';
import { useState, useEffect } from 'react';
import { handleMapClick } from '../utils/mapUtils';
import heroMapImage from '../assets/Screenshot 2026-05-05 at 2.10.41 AM.png';
import './Hero.css';

const heroImages = [
  'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=2079&auto=format&fit=crop'
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slideshow">
        {heroImages.map((img, index) => (
          <div 
            key={index} 
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-slideshow-overlay"></div>
      </div>

      <div className="container hero-content" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-text-wrapper">
          <div className="animate-fade-up delay-100" style={{ marginBottom: '2rem' }}>
            <a href="tel:+15858727575" className="text-blue" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', fontSize: '2.25rem', fontWeight: 'bold', textDecoration: 'none' }}>
              <Phone size={32} />
              Call Us Now: <span style={{ textDecoration: 'underline' }}>(585) 872-7575</span>
            </a>
          </div>

          <h1 className="hero-title animate-fade-up delay-300">
            <span className="text-green">Care</span> That Doesn't <br />
            Keep You <span className="text-green">Waiting</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-400">
            A minority women-owned business serving the Webster area for 15 years. Focusing on Mental Health, Elderly Patients, Specialty ED, and Niche Medical needs.
          </p>

          <div className="hero-cta animate-fade-up delay-400">
            <a href="#services" className="btn btn-primary">
              Our Services
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-up delay-500" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card">
            <div className="card-body">
              <div className="feature-item">
                <div className="feature-icon bg-green">
                  <Truck size={24} color="white" />
                </div>
                <div className="feature-text">
                  <h4>Free Delivery</h4>
                  <p>Right to your door</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon bg-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" /><path d="m8.5 8.5 7 7" /></svg>
                </div>
                <div className="feature-text">
                  <h4>Medicine-On-Time</h4>
                  <p>Specialized blister-packing</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon bg-light-blue">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <div className="feature-text">
                  <h4>Best Prices</h4>
                  <p>Affordable care for all</p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass-card" style={{ padding: '0.5rem', borderRadius: '1.5rem', overflow: 'hidden', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: '700', color: 'var(--primary-blue)', margin: '0.5rem 0 1rem 0', fontSize: '1.75rem', letterSpacing: '0.02em' }}>
              in Baytowne Plaza!
            </h3>
            <a href="#" onClick={handleMapClick} style={{ display: 'block' }}>
              <img src={heroMapImage} alt="Map to A&J Pharmacy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1rem' }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
