import { Pill, ShieldCheck, Truck, HeartPulse, FlaskConical, Network } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Truck size={32} />,
      title: 'Free In-Person Delivery',
      description: 'Rochester residents: We offer free in-person delivery at no charge for all your medications.',
      color: 'green'
    },
    {
      icon: <Pill size={32} />,
      title: 'Blister Pack: Medicine-On-Time (MOT)',
      description: 'Specialized blister-pack packaging to help you manage medications safely.',
      color: 'light-blue'
    },
    {
      icon: <ShieldCheck size={32} />,
      title: 'All Insurances Accepted',
      description: 'We accept all major insurances to ensure you get the coverage you need.',
      color: 'blue'
    },
    {
      icon: <Pill size={32} />,
      title: "Sildenafil/Tadalafil",
      description: "As low as 90 tablets for $60. We can mail these anywhere in the US! Get discreet, affordable, and fast access to your ED medications.",
      color: 'blue'
    },
    {
      icon: <FlaskConical size={32} />,
      title: 'Compounding Medication',
      description: 'Custom compounding such as Nifedipine 0.3% ointment.',
      color: 'light-blue'
    },

  ];

  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center animate-fade-up">
          <h2 className="section-title">Specialty Services</h2>
          <p className="section-subtitle">Comprehensive care tailored to your unique health needs</p>
          <div className="title-underline"></div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card animate-fade-up delay-${(index % 4) * 100}`}
            >
              <div className={`service-icon-wrapper color-${service.color}`}>
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
