import React from 'react';
import { FiUsers, FiLayout, FiEdit3, FiImage, FiCalendar, FiPieChart } from 'react-icons/fi';
import '../../../ContentCreation/Mailers/InnerComponents/email-strategy.css';

const EmailHowItWorks = () => {
  const steps = [
    {
      icon: <FiUsers />,
      title: "List creation",
      desc: "Before sending an email begins, you need to find the audience. The simplest way is to add a banner or form to your site and ask visitors to subscribe, or use existing top mailing data."
    },
    {
      icon: <FiLayout />,
      title: "Design Template",
      desc: "If you wish to get a lot more outcomes, it's better to use analytics and segmentation. More outstanding outcomes are a result of improved responsive broadcasts."
    },
    {
      icon: <FiEdit3 />,
      title: "Content Planning",
      desc: "The success of your campaign ultimately depends on how powerful your CTA and follow-up content is. You must have a compelling introduction mail and ensure regular sending."
    },
    {
      icon: <FiImage />,
      title: "Design Body",
      desc: "If your mail has a good combo of content and graphics, it will likely have a higher open rate. To capture the interest of your reader, you must include compelling images."
    },
    {
      icon: <FiCalendar />,
      title: "Campaign Scheduling",
      desc: "Once the template is completed and the audience is segmented, the scheduling of your email campaign can be done for maximum impact and open rates."
    },
    {
      icon: <FiPieChart />,
      title: "Results Tracking",
      desc: "Once the emails are sent, multiple metrics can be tracked from the dashboard like delivery rate, clicks, bounce rate, and more. This helps evolve your business strategy."
    }
  ];

  return (
    <section className="email-strategy-section">
      <div className="strategy-bg-field"></div>

      <div className="container">
        <div className="strategy-header">
          <h2>How do Email Marketing <br /><span style={{ fontSize: '0.6em', color: '#fff' }}>Agencies Work?</span></h2>
          <p>System Activated</p>
        </div>

        <div className="cyber-spine-container">
          <div className="cyber-spine-line"></div>

          {steps.map((step, index) => (
            <div className="strategy-row" key={index}>
              {/* The Spacer for the opposite side */}
              <div style={{ width: '45%' }} className="desktop-spacer"></div>

              {/* Central Vertebrae Node */}
              <div className="spine-node"></div>

              {/* The Card */}
              <div className="cyber-card">
                  <div className="cyber-card-inner">
                      <div className="cyber-title">
                          <span className="cyber-icon">{step.icon}</span>
                          {step.title}
                      </div>
                      <p className="cyber-desc">{step.desc}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmailHowItWorks;
