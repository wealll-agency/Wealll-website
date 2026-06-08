import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '../../../PRServices/PressReleases/InnerComponents/CountUp';

const EcommerceImpact = () => {
  return (
    <section className="py-5 ecommerce_dev_impact" style={{ backgroundColor: '#070913', position: 'relative', overflow: 'hidden' }}>
      <div className="container ecommerce_dev_impact_container py-5 mt-4 mb-5">

        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5 pb-4">
          <div className="col-lg-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="display-3 fw-bold text-white mb-4" style={{ letterSpacing: '-0.5px' }}>
                Our Ecommerce <br /> Development Impact
              </h2>
              <p className="fs-5 text-secondary mx-auto lh-lg" style={{ maxWidth: '850px', fontWeight: '400' }}>
                Redefine ecommerce development with our innovative technologies, ecommerce expertise, and advanced tools. As a custom ecommerce store development company, we persistently scale our domain expertise and enable ecommerce businesses to expand their digital presence.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Counters Section */}
        <div className="row counter_row text-center mt-5 mb-5 pb-4">
          <div className="col-md-4 mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="display-4 fw-light text-white mb-2">
                <CountUp end={70} suffix="+" duration={2000} />
              </h3>
              <p className="text-secondary fs-6 px-4">Stores Launched Globally</p>
            </motion.div>
          </div>

          <div className="col-md-4 mb-4 mb-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="display-4 fw-light text-white mb-2">
                <span className="me-1">$</span>
                <CountUp end={500} suffix="M+" duration={2000} />
              </h3>
              <p className="text-secondary fs-6 px-4">Yearly revenue generated through our stores</p>
            </motion.div>
          </div>

          <div className="col-md-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="display-4 fw-light text-white mb-2">
                <CountUp end={13} suffix="+" duration={2000} />
              </h3>
              <p className="text-secondary fs-6 px-4">Years Of Industry Experience</p>
            </motion.div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="row text-center pt-2">
          <div className="col-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <a href="#contact" className="btn btn-primary px-5 py-3 fw-medium text-white shadow-none" style={{ backgroundColor: '#0052ff', borderColor: '#0052ff', borderRadius: '4px', fontSize: '1.1rem' }}>
                Let's Talk <span className="ms-2">→</span>
              </a>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EcommerceImpact;
