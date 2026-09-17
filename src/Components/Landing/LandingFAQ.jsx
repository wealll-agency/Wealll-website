import React, { useState } from 'react';

const faqs = [
  {
    q: 'What digital marketing services do you offer?',
    a: 'We provide comprehensive 360-degree digital growth solutions including Search Engine Optimization (SEO), Paid Ads (Google & Meta), Social Media Marketing (SMM), Performance Content Creation, Video & Reel Production, Web Design & Development, and Strategic Page Recovery.'
  },
  {
    q: 'How long does it take to see measurable results?',
    a: 'Timelines vary by marketing channel: Paid advertising campaigns (Google Ads & Meta Ads) typically begin driving qualified leads and conversions within the first 7 to 14 days of campaign launch. Comprehensive organic initiatives like SEO and content authority building generally show exponential compounding gains between 3 to 6 months.'
  },
  {
    q: 'How do you track and measure campaign success?',
    a: 'We focus strictly on commercial outcomes rather than vanity metrics. Our tracking framework monitors Customer Acquisition Cost (CAC), Return on Ad Spend (ROAS), Qualified Pipeline, Conversion Rates, and Lifetime Value (LTV), backed by real-time dashboards and detailed monthly reviews.'
  },
  {
    q: 'What makes We Alll different from generic marketing agencies?',
    a: 'Unlike agencies that deliver templated checklists, We Alll acts as your dedicated fractional growth team. We combine rigorous data attribution with high-aesthetic creative execution, backed by in-house video production, transparent reporting, and senior strategist oversight.'
  },
  {
    q: 'Do you work with startups, SMEs, and enterprise brands?',
    a: 'Yes, our partnership tiers are engineered to scale with businesses at various maturity stages — from high-growth local businesses looking to establish regional market dominance, to D2C innovators scaling Pan-India, to multinational corporations executing enterprise digital transformation.'
  }
];

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="wa-faq-section wa-section-py" id="faq">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            Frequently Asked <span className="wa-highlight">Questions</span>
          </h2>
          <p className="wa-section-subtitle">
            Want to take your business to peak performance? Rely on the strategic expertise of We Alll. Review answers to the most common questions below to make an informed, confident decision.
          </p>
        </div>

        <div className="wa-faq-accordion">
          {faqs.map((faq, idx) => (
            <div
              className={`wa-faq-item ${openIndex === idx ? 'active' : ''}`}
              key={idx}
            >
              <button
                type="button"
                className="wa-faq-question"
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.q}</span>
                <span className="wa-faq-icon">
                  <i className="fa-solid fa-plus"></i>
                </span>
              </button>
              <div className="wa-faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="#lead-form" className="wa-btn wa-btn-primary">
            <i className="fa-regular fa-calendar-check"></i> Book A Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
