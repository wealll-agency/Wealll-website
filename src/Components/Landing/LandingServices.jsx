import React from 'react';
import { mediaUrl } from '../../config/media';

const seoIcon = mediaUrl('assets/images/boost_icon.png');
const smoIcon = mediaUrl('assets/images/icon-2.svg');
const gmbIcon = mediaUrl('assets/images/map.svg');
const ecomIcon = mediaUrl('assets/images/icon-4.svg');
const gadsIcon = mediaUrl('assets/images/ads.png');
const metaIcon = mediaUrl('assets/images/monitor.png');

const services = [
  {
    title: 'SEO (Search Engine Optimization)',
    icon: seoIcon,
    isSvgOrImg: true,
    desc: 'Technical SEO involves optimizing your website’s core infrastructure to make it easier for search engines to crawl and index your pages. This includes improving site speed, solving architectural issues, implementing rich schema markup, and executing high-intent keyword strategies to dominate page-1 Google rankings.'
  },
  {
    title: 'SMO (Social Media Optimization)',
    icon: smoIcon,
    isSvgOrImg: true,
    desc: 'Social media optimization involves structuring your social media touchpoints and organic content distribution to maximize engagement, virality, and brand authority. Effective SMO enhances paid ad performance on Meta, amplifies referral traffic, and fosters an active community around your brand.'
  },
  {
    title: 'Google Local Listing (GMB)',
    icon: gmbIcon,
    isSvgOrImg: true,
    desc: 'Strengthen your Google Business Profile to capture high-converting local footfall, map queries, and "near me" searches. Our hyper-local SEO insights help you establish top 3 map-pack dominance and generate direct phone calls, store visits, and local inquiries consistently.'
  },
  {
    title: 'Ecommerce Marketing',
    icon: ecomIcon,
    isSvgOrImg: true,
    desc: 'Our dedicated ecommerce marketing framework helps online stores convert high-intent shoppers through performance-driven campaigns across search, social, and marketplaces. We fine-tune ROAS, optimize product feeds, reduce cart abandonment, and maximize customer lifetime value.'
  },
  {
    title: 'Google Ads (PPC & Performance Max)',
    icon: gadsIcon,
    isSvgOrImg: true,
    desc: 'Run precision programmatic search, display, and Performance Max campaigns targeting buyers at the exact moment of commercial intent. We minimize cost-per-click while driving high-quality inbound inquiries and transparent returns on your media spend.'
  },
  {
    title: 'Facebook & Instagram (Meta Ads)',
    icon: metaIcon,
    isSvgOrImg: true,
    desc: 'Promote your brand across Facebook, Instagram, and Messenger with high-converting video and carousel creatives. Through deep behavioral targeting, custom lookalike audiences, and full-funnel retargeting, we scale qualified lead generation and DTC revenue predictably.'
  }
];

const LandingServices = () => {
  return (
    <section className="wa-services-section wa-section-py" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            Grow Your Business Four Times with the Right Marketing Strategy from{' '}
            <span className="wa-highlight">We Alll</span>
          </h2>
          <p className="wa-section-subtitle">
            At We Alll, we believe the right strategy makes all the difference between stagnation and explosive growth. With data-backed execution across all key digital channels, we help businesses multiply their sales velocity and dominate market share.
          </p>
        </div>

        <div className="wa-services-grid">
          {services.map((service, index) => (
            <div className="wa-service-card" key={index}>
              <div className="wa-service-icon-wrapper">
                <img src={service.icon} alt={service.title} loading="lazy" />
              </div>
              <h3 className="wa-service-title">{service.title}</h3>
              <p className="wa-service-desc">{service.desc}</p>
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

export default LandingServices;
