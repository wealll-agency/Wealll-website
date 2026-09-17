import React from 'react';
import { mediaUrl } from '../../config/media';

const clientLogos = [
  { name: 'Lakme Salon', src: mediaUrl('assets/images/Lakme.png') },
  { name: 'Jawed Habib', src: mediaUrl('assets/images/Jawed Habib.png') },
  { name: 'Khukumoni', src: mediaUrl('assets/images/Khukumoni-logo.png') },
  { name: 'Karma International', src: mediaUrl('assets/images/Karma-International-01.png') },
  { name: 'Maxglow', src: mediaUrl('assets/images/Maxglow.png') },
  { name: 'Kesri', src: mediaUrl('assets/images/Kesri.png') },
  { name: 'Choice Foundation', src: mediaUrl('assets/images/Choice-Foundation.png') },
  { name: 'BWA Odisha', src: mediaUrl('assets/images/BWA-ODISHA.png') },
  { name: 'AAmi Bangali', src: mediaUrl('assets/images/AAmi-Bangali.png') },
  { name: 'Kiwi', src: mediaUrl('assets/images/Kiwi.png') },
  { name: 'Pro-100', src: mediaUrl('assets/images/Pro-100.png') },
  { name: 'Sutraa', src: mediaUrl('assets/images/Sutraa.png') },
  { name: 'SS Medicorp', src: mediaUrl('assets/images/SS-Medicorp.png') },
  { name: 'Beautech', src: mediaUrl('assets/images/Beautech2.png') },
  { name: 'Vyapaar Zone', src: mediaUrl('assets/images/Vyapaar-Zone.png') },
];

const LandingClients = () => {
  return (
    <section className="wa-clients-section wa-section-py">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            We Win <br />
            When Our <span className="wa-highlight">Clients Win</span>
          </h2>
          <p className="wa-section-subtitle">
            Over the years, we’ve partnered with visionary leaders, high-growth consumer brands, enterprise corporations, and industry pioneers to build scalable digital engines.
          </p>
        </div>

        {/* Marquee Ticker */}
        <div className="wa-marquee-wrapper mb-4">
          <div className="wa-marquee-track">
            {[...clientLogos, ...clientLogos].map((client, idx) => (
              <div className="wa-marquee-item" key={idx}>
                <img src={client.src} alt={client.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Responsive Grid for Desktop */}
        <div className="wa-clients-grid d-none d-md-grid mt-4">
          {clientLogos.map((client, idx) => (
            <div className="wa-client-logo-card" key={idx}>
              <img src={client.src} alt={client.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingClients;
