import React from 'react';
import './ServiceCTA.css';
import { 
  FiTarget, 
  FiBarChart2, 
  FiUsers, 
  FiTrendingUp, 
  FiMessageSquare,
  FiUser,
  FiBriefcase,
  FiPhone,
  FiMail,
  FiArrowRight,
  FiSmile,
  FiStar,
  FiAward,
  FiShield
} from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa';

const ServiceCTA = ({ 
  serviceName,
  badgeIcon,
  badgeText,
  title,
  titlePreposition,
  titleHighlight,
  description,
  features
}) => {
  const finalBadgeIcon = badgeIcon || "⚡";
  const finalBadgeText = badgeText || `RESULTS DRIVEN ${serviceName?.toUpperCase() || 'SERVICES'}`;
  
  const finalTitle = title || "Let's Grow Your Brand";
  const finalTitlePreposition = titlePreposition !== undefined ? titlePreposition : "on";
  const finalTitleHighlight = titleHighlight || serviceName || 'Digital Platforms';
  
  const finalDescription = description || "No fixed packages. Just custom strategies designed to deliver real results for your business.";
  
  const defaultFeatures = [
    { icon: <FiTarget />, text: "Custom Strategy" },
    { icon: <FiBarChart2 />, text: "Results Focused" },
    { icon: <FiUsers />, text: "Expert Support" },
    { icon: <FiTrendingUp />, text: "Measurable Growth" }
  ];
  
  const finalFeatures = features || defaultFeatures;

  return (
    <section className="scta-container">
      <div className="scta-bg-glow"></div>
      
      <div className="scta-wrapper">
        <div className="scta-main">
          
          {/* Left Side: Content */}
          <div className="scta-content">
            <div className="scta-badge">
              <span className="scta-badge-icon">{finalBadgeIcon}</span> {finalBadgeText}
            </div>
            
            <h2 className="scta-title">
              {finalTitle}<br/>{finalTitlePreposition} <span>{finalTitleHighlight}</span>
            </h2>
            
            <p className="scta-desc">
              {finalDescription}
            </p>
            
            <div className="scta-features">
              {finalFeatures.map((feat, index) => (
                <div className="scta-feature-item" key={index}>
                  <div className="scta-feature-icon">{feat.icon}</div>
                  <div className="scta-feature-text">{feat.text}</div>
                </div>
              ))}
            </div>
            
            <div className="scta-action-box">
              <div className="scta-action-left">
                <div className="scta-action-icon"><FaRocket /></div>
                <div className="scta-action-text">
                  <h4>Ready to Get Started?</h4>
                  <p>Get a custom strategy tailored to your goals.</p>
                </div>
              </div>
              <button className="scta-action-btn">
                Let's Talk <FiArrowRight />
              </button>
              
              {/* Dotted curved arrow pointing to the form */}
              <svg className="scta-arrow-svg" width="80" height="60" viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 0,45 C 30,45 40,15 75,15" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 4" fill="none" strokeLinecap="round"/>
                  <path d="M 68,9 L 76,15 L 68,21" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          
          {/* Right Side: Form */}
          <div className="scta-form-wrapper">
            <div className="scta-form-card">
              <div className="scta-form-header">
                <div className="scta-form-icon">
                  <FiMessageSquare />
                </div>
                <h3>Get a Custom Strategy</h3>
                <p>Tell us about your business and we'll take care of the rest.</p>
              </div>
              
              <form className="scta-form" onSubmit={(e) => e.preventDefault()}>
                <div className="scta-form-group">
                  <FiUser />
                  <input type="text" placeholder="Name" required />
                </div>
                <div className="scta-form-group">
                  <FiPhone />
                  <input type="tel" placeholder="Phone" required />
                </div>
                <div className="scta-form-row">
                  <div className="scta-form-group">
                    <select required>
                      <option value="">Select Service</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="Video Production">Video Production</option>
                      <option value="Experience Design">Experience Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Development">Development</option>
                      <option value="Page Recovery">Page Recovery</option>
                      <option value="PR Services">PR Services</option>
                      <option value="Influencer Marketing">Influencer Marketing</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                    </select>
                  </div>
                  <div className="scta-form-group">
                    <select required>
                      <option value="">Select Budget</option>
                      <option value="Below 50k">Below 50k</option>
                      <option value="50k - 1L">50k - 1L</option>
                      <option value="1L - 5L">1L - 5L</option>
                      <option value="Above 5L">Above 5L</option>
                    </select>
                  </div>
                </div>
                <div className="scta-form-group">
                  <textarea placeholder="Your Message" rows="3" required></textarea>
                </div>
                
                <button type="submit" className="scta-submit-btn">
                  BOOK YOUR FREE CONSULTATION <FiArrowRight className="btn-arrow" />
                </button>
                
                <div className="scta-form-footer">
                  <FiShield /> 100% Confidential. No Spam. Promise.
                </div>
              </form>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Stats */}
        <div className="scta-stats-container">
          <div className="scta-stats-title-wrapper">
            <span className="scta-line"></span>
            <span className="scta-title-text">TRUSTED BY BUSINESSES</span>
            <span className="scta-line"></span>
          </div>
          <div className="scta-stats-grid">
            <div className="scta-stat-item">
              <div className="scta-stat-icon"><FiSmile /></div>
              <div className="scta-stat-text">
                <h5>500+</h5>
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="scta-stat-item">
              <div className="scta-stat-icon"><FiStar /></div>
              <div className="scta-stat-text">
                <h5>5+ Years</h5>
                <p>Of Experience</p>
              </div>
            </div>
            <div className="scta-stat-item">
              <div className="scta-stat-icon"><FiAward /></div>
              <div className="scta-stat-text">
                <h5>Performance</h5>
                <p>That Speaks</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ServiceCTA;
