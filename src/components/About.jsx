import { CheckCircle } from 'lucide-react';
import aboutImage from '../assets/IMG_0902.jpg';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper animate-fade-up">
            <div className="about-image-inner">
              <div className="image-placeholder" style={{ background: `url(${aboutImage}) center 15% / cover no-repeat` }}>
                <div className="badge-overlay">
                  <span className="years">15</span>
                  <span className="text">Years in<br />Webster</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-content animate-fade-up delay-200">
            <h2 className="section-title">About A&J Pharmacy</h2>
            <div className="title-underline-left"></div>

            <h3 className="about-subtitle">
              Serving the Webster Area for 15 Years.
            </h3>

            <p className="about-text">
              Led by Owner and Pharmacist <strong>Sandra Le</strong> SP-Rph, A&J Pharmacy was started in 2011 after recognizing the failures of big chain pharmacies. With a focus on old-fashioned values and over 20 years of prior experience at Wegmans Pharmacy, Sandra and her team bring a combined 35 years of experience to provide you with the best care possible.
            </p>

            <ul className="about-list">
              <li>
                <CheckCircle className="text-green" size={20} />
                <span>Minority Woman-Owned Business</span>
              </li>
              <li>
                <CheckCircle className="text-green" size={20} />
                <span>Focus in Mental Health and Elderly Patients</span>
              </li>
              <li>
                <CheckCircle className="text-green" size={20} />
                <span>Specialized in ED and Niche Medical Care</span>
              </li>
              <li>
                <CheckCircle className="text-green" size={20} />
                <span>Combined 35 Years of Pharmacy Experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
