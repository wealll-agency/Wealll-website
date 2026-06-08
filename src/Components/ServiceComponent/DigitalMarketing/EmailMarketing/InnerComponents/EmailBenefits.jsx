import React from 'react';
import { FiShare2, FiGlobe, FiZap, FiTarget } from 'react-icons/fi';

const EmailBenefits = () => {
  const benefits = [
    {
      icon: <FiShare2 />,
      title: "Easy sharing",
      desc: "Subscribers can easily share fantastic offers with their friends. They become brand ambassadors dedicated to bringing your company to new markets."
    },
    {
      icon: <FiGlobe />,
      title: "Global Reach",
      desc: "Email marketing allows you to instantly convey a message to millions worldwide, targeting the right audience exactly when they are most receptive."
    },
    {
      icon: <FiZap />,
      title: "Instant Impact",
      desc: "Due to accessibility, companies notice benefits within minutes. A 24-hour deal encourages subscribers to act right away, driving instant conversions."
    },
    {
      icon: <FiTarget />,
      title: "Easy to measure",
      desc: "Discover where you are going wrong instantly. Software tracks conversion rates and click-throughs, helping you pinpoint areas of improvement."
    }
  ];

  return (
    <div className="email-benefits-container">
      <div className="email-section-header">
        <h3 className="email-section-title">Benefits of Email Marketing Agency <span className="email-gradient-text">in India</span></h3>
        <p className="email-section-desc">Email marketing services agency has a number of benefits. Some are listed below:</p>
      </div>

      <div className="container">
        <div className="email-benefits-grid">
          {benefits.map((item, index) => (
            <div className="email-benefit-card" key={index}>
              <div className="email-benefit-icon-wrapper">
                {item.icon}
              </div>
              <h4 className="email-benefit-title">{item.title}</h4>
              <p className="email-benefit-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailBenefits;
