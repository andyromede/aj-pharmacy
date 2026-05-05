import { ArrowRight, Truck, MapPin, Phone, Star, StarHalf } from 'lucide-react';
import { handleMapClick } from '../utils/mapUtils';
import heroMapImage from '../assets/Screenshot 2026-05-05 at 2.10.41 AM.png';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-blob blob-1"></div>
        <div className="hero-blob blob-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-text-wrapper">
          <div className="review-badge animate-fade-up" style={{ marginBottom: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'white', padding: '0.5rem 1rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.125rem', color: '#fbbf24' }}>
              <span style={{ color: '#1f2937', fontWeight: '700', fontSize: '0.875rem', marginRight: '0.25rem' }}>4.3</span>
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <StarHalf size={14} fill="currentColor" />
            </div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
              <a href="https://www.google.com/search?q=A%26J+Pharmacy+Webster+NY" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                <span style={{ color: '#4285F4', fontWeight: '600' }}>19</span> Google reviews
              </a>
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <div className="badge animate-fade-up delay-100" style={{ alignSelf: 'flex-start', marginBottom: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '1rem' }}>
                <MapPin size={16} />
                <a href="#" onClick={handleMapClick} style={{ textDecoration: 'underline' }}>
                  1900 EMPIRE BLVD, WEBSTER, NY 14580
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <a href="tel:+15858727575" style={{ textDecoration: 'underline', color: 'inherit' }}>(585) 872-7575</a>
              </div>
            </div>

            <div className="badge animate-fade-up delay-200" style={{ alignSelf: 'flex-start', marginBottom: '0' }}>
              <Truck size={16} />
              <span>ROCHESTER RESIDENTS: FREE IN PERSON DELIVERY</span>
            </div>
          </div>

          <h1 className="hero-title animate-fade-up delay-300">
            Your Friendly <br />
            <span className="text-green">Webster</span> Neighborhood <br />
            <span className="text-blue">Pharmacy</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-400">
            An immigrant minority women-owned business serving the Webster area for 15 years. Focusing on Mental Health, Elderly Patients, Specialty ED, and Niche Medical needs.
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
            <div className="card-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
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
          <a href="#" onClick={handleMapClick} className="glass-card" style={{ display: 'block', padding: '0.5rem', borderRadius: '1.5rem', overflow: 'hidden' }}>
            <img src={heroMapImage} alt="Map to A&J Pharmacy" style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '1rem' }} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
