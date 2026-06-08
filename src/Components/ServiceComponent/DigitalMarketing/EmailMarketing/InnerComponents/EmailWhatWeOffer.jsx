import React from 'react';
import { FiMail, FiTrendingUp, FiSend } from 'react-icons/fi';

const EmailWhatWeOffer = () => {
  const offerings = [
    {
      icon: <FiMail />,
      title: "Email Template Design",
      desc: "We Alll's dedicated team is always ready to design your attractive email template for bulk email marketing.",
      glowColor: "rgba(147, 51, 234, 0.3)" // Purple
    },
    {
      icon: <FiTrendingUp />,
      title: "Campaign Creation",
      desc: "Whether you need a Customer list upload or Market research, you can rely on us to craft the perfect campaign.",
      glowColor: "rgba(59, 130, 246, 0.3)" // Blue
    },
    {
      icon: <FiSend />,
      title: "Email Sending Strategy",
      desc: "Sending email to the right person at the right time is the key factor of a successful campaign.",
      glowColor: "rgba(236, 72, 153, 0.3)" // Pink
    }
  ];

  return (
    <div className="email-offer-container">
      <div className="email-section-header">
        <h3 className="email-section-title">What do we <span className="email-gradient-text">offer</span> with our Email Marketing Services?</h3>
        <p className="email-section-desc">
          <strong>We Alll</strong> is professional in providing email marketing platforms to companies and agencies who want to grow their business. We provide data as per requirements from school data to students, and lawyers to city house owners. We also provide IP warmup Email Marketing Services to boost your email deliverability ratio which is very important if you are starting any email campaign for the very first time.
        </p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {offerings.map((item, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="email-offer-card" style={{"--card-glow": item.glowColor}}>
                <div className="email-offer-icon">
                  {item.icon}
                </div>
                <h4 className="email-offer-title">{item.title}</h4>
                <p className="email-offer-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailWhatWeOffer;
