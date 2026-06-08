import React from 'react';
import './assets-we-design.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const AssetsWeDesign = () => {
    const assetsList = [
        "Social Media Ad Creatives (Facebook, Instagram, LinkedIn)",
        "Google Display Banner Ads (All Standard Sizes)",
        "YouTube Ad Thumbnails & Visual Assets",
        "Promotional Posters & Digital Flyers",
        "E-commerce Offer Banners",
        "Product Launch Campaign Graphics",
        "Email Marketing Visual Assets",
        "Outdoor Advertising Designs (Hoardings, Billboards)",
        "Website Campaign Banners",
        "Retargeting Ad Creatives"
    ];

    return (
        <section className="assets-we-design-premium">
            <BannerComponent />
            <div className="assets-bg-elements">
                <div className="neon-orb orb-1"></div>
                <div className="neon-orb orb-2"></div>
                <div className="visual-grid-lines"></div>
            </div>

            <div className="container">
                <div className="assets-content-wrapper">
                    <div className="assets-left-content">
                        <div className="premium-badge">Visual Impact</div>
                        <h2 className="glitch-title" data-text="Campaign Assets We Design">
                            Campaign Assets <br /><span className="text-yellow">We Design</span>
                        </h2>
                        <p className="assets-desc">
                            We design high-impact advertising creatives that capture attention, communicate clearly, and drive action. Whether you are running a product launch, brand awareness campaign, or lead generation campaign — we create assets that perform. <br /><br />
                            Each asset is designed to match your brand, campaign objective, and target audience.
                        </p>
                    </div>

                    <div className="assets-right-list">
                        <div className="holographic-list">
                            {assetsList.map((asset, index) => (
                                <div className="holo-item" key={index} style={{ '--delay': `${index * 0.1}s` }}>
                                    <div className="holo-number">0{index + 1}</div>
                                    <div className="holo-text">{asset}</div>
                                    <div className="holo-glow-line"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AssetsWeDesign;
