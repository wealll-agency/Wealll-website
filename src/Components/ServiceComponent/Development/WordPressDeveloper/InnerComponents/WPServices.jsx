import React from 'react';
import { motion } from 'framer-motion';
import './wordpress-dev-dark.css';

const services = [
  { id: 1, title: 'WP Theme Development', desc: 'We design and develop WordPress themes from scratch so that your theme stays as unique as your business goals are.', icon: '🎨', color: '#ec4899', styleClass: 'wp-bento-span-4' },
  { id: 2, title: 'Theme Customization', desc: 'Our developers can customize any WordPress theme as per your requirement to offer you uniqueness and revenue-driving layouts.', icon: '⚙️', color: '#8b5cf6', styleClass: 'wp-bento-span-4' },
  { id: 3, title: 'Responsive WP Sites', desc: 'Intlum pays attention to uphold user experience. We turn any regular WordPress site into a blazing fast responsive website.', icon: '📱', color: '#f59e0b', styleClass: 'wp-bento-span-4' },
  { id: 4, title: 'Blog Development', desc: 'We design and develop WordPress blog sections with modern architecture and functionality to ease readers and boost SEO rankings.', icon: '📝', color: '#10b981', styleClass: 'wp-bento-span-6' },
  { id: 5, title: 'Migration & Security', desc: 'We securely migrate your WordPress site to a new hosting preventing downtime. We also secure your site against hackers and spammers.', icon: '🛡️', color: '#3b82f6', styleClass: 'wp-bento-span-6' },
  { id: 6, title: 'Plugin Development', desc: 'We not only install available plugins to create a WordPress site, but our experienced developers build top-notch custom plugins as per your exact logic and business needs.', icon: '🔌', color: '#38bdf8', styleClass: 'wp-bento-span-12' },
];

const WPServices = () => {
  return (
    <section className="wp-dark-bg py-5 position-relative border-bottom wp_service" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-1 py-5">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-5 pb-3"
        >
          <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style={{ background: 'rgba(139, 92, 246, 0.1)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
            <span className="text-uppercase fw-bold" style={{ color: '#c4b5fd', fontSize: '12px', letterSpacing: '2px' }}>Under One Roof</span>
          </div>
          <h2 className="display-5 fw-bold mb-3 text-white">
            Every WordPress Development <span className="wp-gradient-text" style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)', WebkitBackgroundClip: 'text' }}>Service</span>
          </h2>
          <p className="text-secondary mx-auto fs-5" style={{ maxWidth: '750px' }}>
            Each of the possible developmental works is done with ease. We leave no stones unturned to give the end-to-end WordPress service to our clients at the optimum level.
          </p>
        </motion.div>

        {/* Brand New Premium 3D Hover Architecture */}
        <div className="row g-5 justify-content-center premium-service-wrapper">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={service.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1, type: 'spring' }}
                className="h-100"
              >
                <div
                  className="premium-service-card-new d-flex flex-column h-100"
                  style={{ '--glow-color': service.color }}
                >
                  <div className="service-icon-new text-white">
                    {service.icon}
                  </div>

                  <h3 className="fw-bolder mb-3 text-white fs-4 position-relative z-2">{service.title}</h3>
                  <p className="text-secondary mb-3 fs-6 lh-lg position-relative z-2">
                    {service.desc}
                  </p>

                </div>
              </motion.div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WPServices;
