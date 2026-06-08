import React from 'react';
import { FiBarChart2, FiLayers, FiActivity, FiClock } from 'react-icons/fi';

const EmailFeatures = () => {
  const features = [
    {
      icon: <FiBarChart2 />,
      title: "Inside Campaign Insights",
      desc: "Inside campaign details are like juice that can help in boosting your campaign. To get to them, all you have to do is visit the overview section in your dashboard."
    },
    {
      icon: <FiLayers />,
      title: "Marketing Templates",
      desc: "Brand messages are delivered perfectly when you have a pre-made marketing template. Use our top-notch solutions to access thousands of pre-made designs."
    },
    {
      icon: <FiActivity />,
      title: "Tracking Actions",
      desc: "From finding out whether an email was opened to checking the delivery rate, you can track everything required to make your email campaign a huge success."
    },
    {
      icon: <FiClock />,
      title: "Email Scheduling",
      desc: "For certain things, there is always a suitable time. The same applies to email marketing strategies. Implement your strategy perfectly in advance."
    }
  ];

  return (
    <div className="email-features-container">
      <div className="email-section-header">
        <h3 className="email-section-title">Features To <span className="email-gradient-text">Watch Out For</span></h3>
      </div>
      
      <div className="container">
        <div className="row g-4 justify-content-center">
          {features.map((feature, index) => (
            <div className={`col-lg-5 col-md-6 ${index % 2 !== 0 ? 'mt-lg-5' : ''}`} key={index}>
              <div className="email-feature-card">
                <div className="email-feature-icon">
                  {feature.icon}
                </div>
                <div className="email-feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailFeatures;
