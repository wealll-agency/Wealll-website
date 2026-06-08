import React from 'react';
import './brand-visibility.css';

const BrandVisibility = ({ title, customTitle, children }) => {
    return (
        <section className="brand-visibility-section">

            <div className="brand-vis-bg-glow"></div>
            <div className="container position-relative">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-10 col-xl-9">
                        <h2 className="brand-vis-title animate-fade-up">
                            {title}
                        </h2>
                        <div className="brand-vis-separator animate-width"></div>
                        <div className="brand-vis-content animate-fade-up delay-200">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandVisibility;
