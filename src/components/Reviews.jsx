import { Star, StarHalf } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  return (
    <section id="reviews" className="section reviews-section">
      <div className="container">
        <div className="reviews-header animate-fade-up">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="title-underline-center"></div>
        </div>

        <div className="reviews-grid">
          {/* We will move the Google badge here */}
          <div className="review-badge-container animate-fade-up delay-100">
            <div className="review-badge" style={{ display: 'inline-flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '1rem', background: 'white', padding: '1rem 2rem', borderRadius: '12px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <h3 style={{ margin: 0, color: 'var(--primary-blue)' }}>Google Rating</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: '#fbbf24', borderLeft: '1px solid var(--border-color)', borderRight: '1px solid var(--border-color)', padding: '0 1rem' }}>
                <span style={{ color: '#1f2937', fontWeight: '700', fontSize: '1.25rem', marginRight: '0.5rem' }}>4.3</span>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
                <StarHalf size={20} fill="currentColor" />
              </div>
              <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
                <a href="https://www.google.com/search?q=A%26J+Pharmacy+Webster+NY" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>
                  Based on <span style={{ color: '#4285F4', fontWeight: '600' }}>19</span> reviews
                </a>
              </p>
            </div>
          </div>

          <div className="review-card animate-slide-in-left delay-200">
            <div className="review-header">
              <img src="https://ui-avatars.com/api/?name=Matthew+Bellittera&background=0D8ABC&color=fff&size=64" alt="Matthew Bellittera" className="review-avatar" />
              <div className="review-meta">
                <h4>Matthew Bellittera</h4>
                <p className="review-subtitle">Local Guide · 11 reviews</p>
                <div className="review-stars" style={{ color: '#fbbf24', display: 'flex', gap: '0.125rem', marginTop: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="review-date" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginLeft: '0.5rem' }}>a year ago</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "This pharmacy is the greatest place in the world !!! From helping my elderly parents to helping me. No lines. Lower costs than Wegmans and CVS. Help out the small businesses and stop going to these large places that have long lines and deep pockets. Get advice fast from people who care."
            </p>
          </div>

          <div className="review-card animate-slide-in-left delay-300">
            <div className="review-header">
              <img src="https://ui-avatars.com/api/?name=Christy+Verplank&background=f472b6&color=fff&size=64" alt="Christy Verplank" className="review-avatar" />
              <div className="review-meta">
                <h4>Christy Verplank</h4>
                <p className="review-subtitle">10 reviews</p>
                <div className="review-stars" style={{ color: '#fbbf24', display: 'flex', gap: '0.125rem', marginTop: '0.25rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  <span className="review-date" style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', marginLeft: '0.5rem' }}>4 years ago</span>
                </div>
              </div>
            </div>
            <p className="review-text">
              "We've been using A&J for several years. The staff is friendly and they know our names. They care about our medication concerns and questions. Most everything we need is in stock and can be filled within a few hours (sometimes within 20 minutes when we ask)."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
