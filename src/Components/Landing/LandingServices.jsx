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
    desc: 'Be there when they search. Your competitors shouldn’t get the customer because they rank higher. We improve your website’s visibility so potential customers can find you when they’re actively looking for what you offer.'
  },
  {
    title: 'SMO (Social media optimization)',
    icon: smoIcon,
    isSvgOrImg: true,
    desc: 'Make your socials worth following. Posting every day but hearing crickets? We turn your social media into a place where people not only engage with it but also remember it.'
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
    desc: 'We make more people to click “Buy”.Traffic is nothing if your products stay in the cart. We help e-commerce brands attract shoppers, reduce drop-offs and confirm more purchases.'
  },
  {
    title: 'Google Ads',
    icon: gadsIcon,
    isSvgOrImg: true,
    desc: 'Be the first choice on google. Stop letting competitors capture customers who are searching for your services. We build targeted Google Ads campaigns that put your business in front of high-intent prospects and push them toward action.'
  },
  {
    title: 'Facebook & Instagram Ads',
    icon: metaIcon,
    isSvgOrImg: true,
    desc: 'Your ideal customer could be scrolling reels right now. We use Meta Ads, audience targeting, retargeting and conversion focused creatives to bring your brand into their feed and give them a reason to act.'
  }
];

const LandingServices = () => {
  return (
    <section className="wa-services-section wa-section-py" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            Get a Full-Funnel Digital Marketing Ecosystem with {' '}
            <span className="wa-highlight">We Alll</span>
          </h2>
          <p className="wa-section-subtitle">
            Your customers are searching, scrolling, comparing and buying online 24×7. But can they find you? We help you show up at the right moment, with the right message, in the right place.
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
