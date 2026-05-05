import { ArrowRight, Truck, MapPin, Phone } from 'lucide-react';
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            <div className="badge animate-fade-up" style={{ alignSelf: 'flex-start', marginBottom: '0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginRight: '1rem' }}>
                <MapPin size={16} />
                <a href="https://maps.apple.com/?address=1900+Empire+Blvd,+Webster,+NY+14580" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                  1900 EMPIRE BLVD, WEBSTER, NY 14580
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <span>(585) 872-7575</span>
              </div>
            </div>

            <div className="badge animate-fade-up delay-100" style={{ alignSelf: 'flex-start', marginBottom: '0' }}>
              <Truck size={16} />
              <span>ROCHESTER RESIDENTS: FREE IN PERSON DELIVERY</span>
            </div>
          </div>

          <h1 className="hero-title animate-fade-up delay-200">
            Your Friendly <br />
            <span className="text-green">Neighborhood</span> <br />
            <span className="text-blue">Pharmacy</span>
          </h1>

          <p className="hero-subtitle animate-fade-up delay-300">
            An immigrant minority women-owned business serving the Webster area for 15 years. Focusing on Mental Health, Elderly Patients, Specialty ED, and Niche Medical needs.
          </p>

          <div className="hero-cta animate-fade-up delay-300">
            <a href="#services" className="btn btn-primary">
              Our Services
              <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper animate-fade-up delay-300">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
