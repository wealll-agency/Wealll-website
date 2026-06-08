import React from 'react';
import './mern-dark.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const MernWhyChoose = () => {
  return (
    <section className="py-5 choose_mern_stack" style={{ backgroundColor: '#070913' }} >
      <BannerComponent />
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 className="display-4 fw-bold text-white mb-4">
              Choose <span className="mern-gradient-text">MERN Stack</span> for building applications
            </h2>
            <p className="text-secondary fs-5 lh-lg mx-auto">
              Why settle for ordinary when you can choose extraordinary? The MERN stack isn't just a technology choice; it's a leap into a world where innovation meets seamless functionality. MERN covers the entire web development spectrum, seamlessly weaving together front-end (client-side) and back-end (server-side) using the power of JavaScript. Your web project is not just built; it's crafted for excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MernWhyChoose;
