import { MapPin, Phone, Clock, Mail, Star } from 'lucide-react';
import { handleMapClick } from '../utils/mapUtils';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = encodeURIComponent(`Website Contact Form: Message from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    window.location.href = `mailto:sle@anjpharmacy.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We're here to help with all your medication and wellness needs.</p>
          <div className="title-underline"></div>
        </div>

        <div className="contact-grid">
          <div className="contact-info animate-fade-up delay-100">
            <div className="info-card">
              <div className="info-icon">
                <MapPin className="text-white" size={24} color="white" />
              </div>
              <div className="info-content">
                <h3>Visit Us</h3>
                <p>
                  <a href="#" onClick={handleMapClick} style={{ textDecoration: 'underline' }}>
                    1900 Empire Blvd<br />Webster, NY 14580
                  </a>
                </p>
                <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                  <a href="https://maps.apple.com/?address=1900+Empire+Blvd+Suite+160,+Webster,+NY+14580" target="_blank" rel="noreferrer" className="text-green" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Apple Maps</a>
                  <span>|</span>
                  <a href="https://www.google.com/maps/search/?api=1&query=A%26J+Pharmacy+1900+Empire+Blvd+Suite+160+Webster+NY" target="_blank" rel="noreferrer" className="text-blue" style={{ fontSize: '0.875rem', fontWeight: '600' }}>Google Maps</a>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Phone className="text-white" size={24} color="white" />
              </div>
              <div className="info-content">
                <h3>Call Us</h3>
                <p>
                  Phone: <a href="tel:+15858727575" style={{ textDecoration: 'underline' }}>(585) 872-7575</a><br />
                  Fax: (585) 872-7515
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <Clock className="text-white" size={24} color="white" />
              </div>
              <div className="info-content">
                <h3>Hours of Operation</h3>
                <p>
                  Monday: 9 AM – 6 PM<br />
                  Tuesday: 9 AM – 6 PM<br />
                  Wednesday: 9 AM – 6 PM<br />
                  Thursday: 9 AM – 6 PM<br />
                  Friday: 9 AM – 6 PM<br />
                  Saturday: 9 AM – 2 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon" style={{ backgroundColor: '#fbbf24' }}>
                <Star className="text-white" size={24} color="white" />
              </div>
              <div className="info-content">
                <h3>Leave a Review</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Love A&J Pharmacy? We would really appreciate it if you took a moment to share your experience!
                </p>
                <a
                  href="https://www.google.com/search?q=A%26J+Pharmacy+Webster+NY"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ display: 'inline-flex', padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}
                >
                  Rate Us on Google
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-fade-up delay-200">
            <div className="form-wrapper">
              <h3>Send us a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="John Doe" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email Address</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="4" placeholder="How can we help you?" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-btn">
                  Send Message
                  <Mail size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
