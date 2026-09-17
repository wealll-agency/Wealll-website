import React from 'react';

const uspList = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'Know Your Website and Business Opportunities',
    desc: "We believe in thoroughly identifying your website and market opportunities to help you unlock latent revenue. Everything we deliver adheres to the industry's highest performance and conversion standards."
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Robust Service Structure',
    desc: 'Our structured agile marketing framework delivers end-to-end solutions tailored to your objectives, ensuring high campaign velocity and keeping your business miles ahead of competition.'
  },
  {
    icon: 'fa-solid fa-earth-asia',
    title: 'Nationwide & Global Clients',
    desc: 'Our data-backed digital marketing solutions from our specialized team in Kolkata have empowered Pan-India and international clients to accelerate their market expansion.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'Create Remarkable Sales & Leads',
    desc: 'We construct high-intent acquisition funnels engineered to convert passive browsers into repeat paying customers, driving measurable pipeline and positive ROAS.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Custom Growth Strategies',
    desc: 'No cookie-cutter playbooks. Our senior growth strategists conduct exhaustive competitor and audience research to craft tailor-made strategies that maximize CAC-to-LTV ratios.'
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Intelligent & Insightful Analysis',
    desc: 'With transparent monthly reporting and attribution modeling, we turn raw metrics into actionable growth levers, giving you 100% clarity on where every marketing rupee goes.'
  }
];

const LandingUSP = () => {
  return (
    <section className="wa-usp-section wa-section-py">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            USP of Our <span className="wa-highlight">Digital Marketing</span> Services
          </h2>
          <p className="wa-section-subtitle">
            We pride ourselves on our core differentiators that set us apart from generic agencies. Our digital marketing services in Kolkata are engineered to maximize your market reach and business valuation through customized growth frameworks, robust delivery workflows, and continuous optimization.
          </p>
        </div>

        <div className="wa-usp-grid">
          {uspList.map((usp, index) => (
            <div className="wa-usp-card" key={index}>
              <div className="wa-usp-icon">
                <i className={usp.icon}></i>
              </div>
              <h3 className="wa-usp-title">{usp.title}</h3>
              <p className="wa-usp-desc">{usp.desc}</p>
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

export default LandingUSP;
