import React from 'react';
import { motion } from 'framer-motion';
import { FiX, FiCheck } from 'react-icons/fi';
import './marketing360-dark.css';

const Marketing360VsTraditional = () => {
  const comparisonData = [
    { feature: "Strategy Execution", trad: "Separate, siloed teams", mk360: "Unified, holistic ecosystem" },
    { feature: "Primary Focus", trad: "Channel-focused metrics", mk360: "Business & revenue growth" },
    { feature: "ROI Tracking", trad: "Low or ambiguous tracking", mk360: "Data-driven closed loop" },
    { feature: "Modifications", trad: "Reactive to failures", mk360: "Proactive adaptive scaling" },
    { feature: "Creative & Logic", trad: "Deep friction / mismatch", mk360: "Perfect synergy & alignment" }
  ];

  return (
    <section className="mk360-vs-section py-5 position-relative border-top" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="container position-relative z-2 py-5">
        <h2 className="mk360-section-title text-center mb-5 pb-4">
          <span className="fst-italic">Traditional</span> vs <span className="mk360-title-gradient">360° Marketing</span>
        </h2>

        <div className="table-responsive px-2 px-lg-5">
          <table className="mk360-premium-table w-100">
            <thead>
              <tr>
                <th className="feature-col">Fundamental Feature</th>
                <th className="trad-col">Traditional Agencies</th>
                <th className="mk360-col">We Alll 360° Approach</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <td className="feature-cell">{row.feature}</td>
                  <td className="trad-cell">
                    <div className="d-flex align-items-center justify-content-center">
                      <FiX className="text-danger opacity-75 me-2" />
                      <del>{row.trad}</del>
                    </div>
                  </td>
                  <td className="mk360-cell">
                    <div className="d-flex align-items-center justify-content-center">
                      <FiCheck className="text-info fs-5 me-2" />
                      <strong>{row.mk360}</strong>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Marketing360VsTraditional;
