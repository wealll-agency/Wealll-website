import React from 'react';
import { mediaUrl } from '../../config/media';

const tech1 = mediaUrl('assets/images/tech-logo1.png');
const tech2 = mediaUrl('assets/images/tech-logo2.png');
const tech3 = mediaUrl('assets/images/tech-logo3.png');
const tech4 = mediaUrl('assets/images/tech-logo4.png');
const tech5 = mediaUrl('assets/images/tech-logo5.png');
const tech6 = mediaUrl('assets/images/tech-logo6.png');

const techStack = [
  { name: 'Google Ads', icon: 'fa-brands fa-google', img: tech1 },
  { name: 'Meta Ads', icon: 'fa-brands fa-meta', img: tech2 },
  { name: 'WordPress', icon: 'fa-brands fa-wordpress', img: tech3 },
  { name: 'Shopify', icon: 'fa-brands fa-shopify', img: tech4 },
  { name: 'HubSpot', icon: 'fa-brands fa-hubspot', img: tech5 },
  { name: 'Analytics', icon: 'fa-solid fa-chart-simple', img: tech6 },
  { name: 'Semrush', icon: 'fa-solid fa-magnifying-glass-chart', img: tech1 },
  { name: 'Mailchimp', icon: 'fa-brands fa-mailchimp', img: tech2 },
  { name: 'WhatsApp API', icon: 'fa-brands fa-whatsapp', img: tech3 },
];

const LandingTechStack = () => {
  return (
    <section className="wa-tech-section">
      <div className="container text-center">
        <h2 className="wa-section-title mb-2">
          Awesome Technologies <br />
          We Used For Work In <span className="wa-highlight">We Alll</span>
        </h2>
        <p className="wa-section-subtitle mb-4">
          We leverage enterprise marketing stacks, AI analytics, and cutting-edge creative suites to power seamless campaign execution.
        </p>

        <div className="wa-tech-marquee-wrapper">
          <div className="wa-tech-marquee-track">
            {[...techStack, ...techStack].map((tech, idx) => (
              <div className="wa-tech-badge" key={idx}>
                {tech.img ? (
                  <img src={tech.img} alt={tech.name} loading="lazy" />
                ) : (
                  <i className={tech.icon}></i>
                )}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingTechStack;
