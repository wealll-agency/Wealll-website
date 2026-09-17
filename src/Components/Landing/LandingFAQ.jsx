import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to use all your digital marketing services?',
    a: 'Not at all. More services don’t automatically mean better results. We identify which channels make sense for your business and recommend a combination based on your requirements and budget.'
  },
  {
    q: 'How much should I spend on digital marketing?',
    a: 'There’s no one-size-fits-all budget. Your ideal investment depends on your industry and your goals. During a consultation, we can help identify a practical starting point based on what you want to achieve.'
  },
  {
    q: 'Can you help if my current marketing isn’t generating leads?',
    a: 'Yes. We can assess your existing website, ad campaigns, social media and conversion funnel to identify where potential customers are dropping off and what can be improved.'
  },
  {
    q: 'Will I get regular updates about my campaigns?',
    a: 'Yes. We believe you should know where your investment is going and what it is achieving. Our team will share campaign performance and relevant information with you regularly so you have a clear picture of progress.'
  },
  {
    q: 'How do I get started with We Alll?',
    a: 'Simply book a free consultation and tell us about your business, goals and current marketing challenges. We’ll understand where you are today and discuss the opportunities we see for your digital growth.'
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
            Want to know if We Alll is the right growth partner for your business? Here are answers to the questions we hear most often.
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
