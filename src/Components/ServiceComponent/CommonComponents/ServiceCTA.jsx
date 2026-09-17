import React, { useState } from 'react';
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
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        budget: '',
        message: ''
      });
    }, 800);
  };

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
      <div className="scta-content-wrapper">

        <div className="scta-grid">

          {/* Left Column: Information */}
          <div className="scta-info-col">
            <div className="scta-badge">
              <span className="scta-badge-icon">{finalBadgeIcon}</span>
              <span className="scta-badge-text">{finalBadgeText}</span>
            </div>

            <h2 className="scta-title">
              {finalTitle} {finalTitlePreposition} <span className="scta-gradient-text">{finalTitleHighlight}</span>
            </h2>

            <p className="scta-description">
              {finalDescription}
            </p>

            {/* Features Row */}
            <div className="scta-features-grid">
              {finalFeatures.map((feature, idx) => (
                <div key={idx} className="scta-feature-item">
                  <div className="scta-feature-icon">
                    {feature.icon}
                  </div>
                  <span className="scta-feature-text">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Quick Action Box */}
            <div className="scta-action-box">
              <div className="scta-action-left">
                <div className="scta-action-icon">
                  <FaRocket />
                </div>
                <div className="scta-action-text">
                  <h4>Ready for Explosive Growth?</h4>
                  <p>Book a free 30-min strategy call with our specialists.</p>
                </div>
              </div>
              <a href="tel:+918240858613" className="scta-action-btn">
                Call Us <FiArrowRight />
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="scta-form-wrapper">
            <div className="scta-form-card">
              <div className="scta-form-header">
                <div className="scta-form-icon">
                  <FiMessageSquare />
                </div>
                <h3>Get a Custom Strategy</h3>
                <p>Tell us about your business and we'll take care of the rest.</p>
              </div>

              {submitted ? (
                <div className="alert alert-success text-center py-4 my-3" style={{ background: "rgba(5, 168, 92, 0.15)", border: "1px solid #05a85c", color: "#fff", borderRadius: "10px" }} role="alert">
                  <h4 style={{ color: "#05a85c", marginBottom: "8px" }}>Thank You!</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "#e2e8f0" }}>
                    Your strategy request has been received. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form className="scta-form" onSubmit={handleSubmit} noValidate>
                  <div className="scta-form-group">
                    <FiUser />
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="scta-form-row">
                    <div className="scta-form-group">
                      <FiMail />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address *"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="scta-form-group">
                      <FiPhone />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Contact Number *"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="scta-form-group">
                    <select
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleChange}
                    >
                      <option value="">What is Your Marketing Budget?</option>
                      <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000 / month</option>
                      <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                      <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                      <option value="Above ₹3,00,000">Above ₹3,00,000 / month</option>
                    </select>
                  </div>

                  <div className="scta-form-group">
                    <textarea
                      name="message"
                      placeholder="Brief us about your business goals or target milestones..."
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="scta-submit-btn" disabled={loading}>
                    {loading ? "SUBMITTING..." : (
                      <>
                        BOOK YOUR FREE CONSULTATION <FiArrowRight className="btn-arrow" />
                      </>
                    )}
                  </button>

                  <div className="scta-form-footer">
                    <FiShield /> 100% Confidential. No Spam. Promise.
                  </div>
                </form>
              )}
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
