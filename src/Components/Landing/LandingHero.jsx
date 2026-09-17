import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { mediaUrl } from '../../config/media';
import { submitLeadToSheet } from '../../services/leadService';
import Swal from 'sweetalert2';

const partner1 = mediaUrl('assets/images/tech-logo1.png');
const partner2 = mediaUrl('assets/images/tech-logo2.png');
const partner3 = mediaUrl('assets/images/tech-logo3.png');
const partner4 = mediaUrl('assets/images/tech-logo4.png');
const partner5 = mediaUrl('assets/images/tech-logo5.png');
const partner6 = mediaUrl('assets/images/tech-logo6.png');

const techPartners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
];

const LandingHero = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMsg('Please fill in all required fields (Name, Email, and Phone).');
      return;
    }

    setErrorMsg('');
    setLoading(true);

    try {
      const res = await submitLeadToSheet(formData);
      if (res && res.success) {
        setLoading(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          budget: '',
          message: ''
        });

        Swal.fire({
          icon: 'success',
          title: 'Thank You!',
          text: 'Your consultation request has been submitted successfully. Our growth strategist will connect with you within 2 business hours.',
          confirmButtonColor: '#05a85c',
          confirmButtonText: 'OK',
        });
      } else {
        throw new Error(res ? res.error : 'Submission failed');
      }
    } catch (err) {
      console.error('Lead submission error:', err);
      setLoading(false);
      setErrorMsg('Something went wrong. Please try again or contact us directly.');
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: 'Something went wrong while submitting. Please try again or contact us directly at +91 82408 58613.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'OK',
      });
    }
  };

  return (
    <section className="wa-hero" id="hero">
      <div className="wa-hero-glow-1"></div>
      <div className="wa-hero-glow-2"></div>
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT COLUMN: HEADLINE & PITCH */}
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <div className="wa-hero-content">
              <span className="wa-hero-tagline">
                The Power Of An Integrated Digital Outreach Strategy
              </span>
              <h1 className="wa-hero-title">
                Scale Your Revenue With Results-Driven Growth
              </h1>
              <h2 className="wa-hero-subtitle">
                <span className="wa-hero-company">We Alll </span>
                <br />
                Digital Marketing Agency in Kolkata
              </h2>
              <p className="wa-hero-desc">
                In today's fast-paced world, having a commanding online presence is non-negotiable. Whether you're an ambitious startup scaling from scratch or an established brand dominating your niche, our specialized growth strategists deliver multi-channel campaigns engineered to acquire, convert, and retain high-value customers.
              </p>
              <div>
                <a href="#lead-form" className="wa-btn wa-btn-primary">
                  <i className="fa-solid fa-bolt"></i> Contact Us
                </a>
              </div>

              {/* Technology Partners Auto Slider in Hero Banner */}
              <div className="wa-hero-slider-wrap mt-4 pt-1">
                <div className="wa-hero-slider-card">
                  <Swiper
                    modules={[Autoplay]}
                    spaceBetween={24}
                    slidesPerView={3}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                      320: { slidesPerView: 1.8, spaceBetween: 16 },
                      576: { slidesPerView: 2.2, spaceBetween: 20 },
                      768: { slidesPerView: 2.6, spaceBetween: 20 },
                      992: { slidesPerView: 3, spaceBetween: 24 },
                    }}
                    className="wa-hero-swiper py-1"
                  >
                    {techPartners.map((partner, index) => (
                      <SwiperSlide key={index}>
                        <div
                          className="wa-hero-partner-slide w-100 d-flex align-items-center justify-content-center"
                          style={{ minHeight: '95px' }}
                        >
                          <img
                            src={partner}
                            alt={`Technology Partner ${index + 1}`}
                            className="img-fluid"
                            style={{ maxHeight: '80px', objectFit: 'contain' }}
                            loading="lazy"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: LEAD CAPTURE FORM */}
          <div className="col-lg-5 col-md-12">
            <div className="wa-hero-form-card" id="lead-form">
              <h2 className="wa-hero-form-title">
                Growing Business Is Harder,
                <br />
                <span className="wa-highlight">We Make It A Whole Lot Easier</span>
              </h2>
              <p className="wa-hero-form-desc">
                Your Strategic Growth Partner to Accelerate Sales & Conversions Through Measurable Digital Handshakes.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                {errorMsg && (
                  <div className="wa-form-error">
                    <i className="fa-solid fa-triangle-exclamation" style={{ marginRight: '6px' }}></i>
                    {errorMsg}
                  </div>
                )}
                <div className="wa-form-group">
                  <input
                    type="text"
                    name="fullName"
                    className="wa-input"
                    placeholder="Full Name *"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className="wa-form-group">
                  <input
                    type="email"
                    name="email"
                    className="wa-input"
                    placeholder="Email Address *"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="wa-form-group">
                  <input
                    type="tel"
                    name="phone"
                    className="wa-input"
                    placeholder="Contact Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="wa-form-group">
                  <select
                    name="budget"
                    className="wa-select"
                    value={formData.budget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">What is Your Marketing Budget?</option>
                    <option value="₹15,000 - ₹50,000">₹15,000 - ₹50,000 / month</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 / month</option>
                    <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000 / month</option>
                    <option value="Above ₹3,00,000">Above ₹3,00,000 / month</option>
                  </select>
                </div>
                <div className="wa-form-group">
                  <textarea
                    name="message"
                    className="wa-textarea"
                    placeholder="Brief us about your business goals or target milestones..."
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="wa-form-submit-btn" disabled={loading}>
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
