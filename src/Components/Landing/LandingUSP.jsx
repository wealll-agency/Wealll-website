import React from 'react';

const uspList = [
  {
    icon: 'fa-solid fa-briefcase',
    title: 'We find the exact problem',
    desc: "Not getting enough leads? Low website traffic? People visiting but not buying? We identify the gaps in your website, content, SEO and marketing funnel so you know exactly what needs to change."
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: '360° marketing in one place',
    desc: "You don't need of hire different agencies for different services. We bring strategy, content, paid ads, SEO and performance marketing together so your campaigns work as one connected growth system."
  },
  {
    icon: 'fa-solid fa-earth-asia',
    title: 'Your market isn’t limited to Kolkata',
    desc: 'Struggling to reach customers beyond your local area? We help brands target the right audiences across India and global markets, using digital strategies built for wherever your next customer is.'
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: 'We chase leads instead of likes',
    desc: 'Getting views and followers but not enough sales? We build lead-generation funnels and conversion-focused campaigns designed to turn attention into enquiries and revenue.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'No copy-paste marketing strategies',
    desc: 'What works for another business may not work for yours. That’s why we study your audience, your competitors, market and your personal business goals before creating a customized growth strategy.'
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Know exactly where your money is going',
    desc: 'Spending on marketing without knowing what’s actually working? We track your campaign performance, leads, conversions and key metrics so you can see what’s bringing results and what needs to improve.'
  }
];

const LandingUSP = () => {
  return (
    <section className="wa-usp-section wa-section-py">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            What Makes <span className="wa-highlight">We Alll </span> Different
          </h2>
          <p className="wa-section-subtitle">
            We don’t believe in one size fits all marketing. We understand your business, find what’s holding your growth back।and build strategies customised to your requirements.
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
