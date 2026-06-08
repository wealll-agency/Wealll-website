import React from 'react';
import '../../../ExperienceDesign/LogoDesign/InnerComponents/logo-pricing.css';
import './shopify-dark.css';

const ShopifyPricing = () => {
    // Content stays same, structure matches WebPricing
    const packages = [
        {
            title: "Essentials Plan",
            subtitle: "Perfect for starting your Shopify journey",
            price: "45,000",
            features: [
                "Custom Theme Setup",
                "Mobile Responsive UI",
                "Essential Apps Integration",
                "Payment Gateway Config",
                "Basic Inventory Setup",
                "1 Month Support",
                "Delivery: 2 Weeks"
            ],
            btnText: "Get Started",
            featured: false
        },
        {
            title: "Pro Merchant",
            subtitle: "Balanced growth for scaling stores",
            price: "85,000",
            features: [
                "Premium Custom Theme",
                "Advanced Filtering",
                "Abandonment Recovery",
                "Upsell/Cross-sell Tools",
                "Speed Optimization",
                "3 Months Support",
                "Delivery: 4 Weeks"
            ],
            btnText: "Go Pro",
            featured: true,
            badge: "Best Value"
        },
        {
            title: "Plus Enterprise",
            subtitle: "Unlimited capacity for high volume",
            price: "1,75,000+",
            features: [
                "Full Custom Development",
                "API & ERP Integration",
                "Multi-currency Support",
                "Custom Checkout Scripting",
                "Advanced Analytics Setup",
                "6 Months Support",
                "Dedicated Manager"
            ],
            btnText: "Contact Sales",
            featured: false
        }
    ];

    const addons = [
        { title: "Shopify Plus Upgrade", desc: "Expert migration to Shopify Plus with all scripts.", icon: "💎" },
        { title: "App Development", desc: "Custom Shopify Apps tailored for your store.", icon: "🔋" },
        { title: "Marketing Automation", desc: "Advanced Klaviyo or Mailchimp workflows.", icon: "📣" },
        { title: "Advanced SEO Pack", desc: "Product descriptions and schema optimization.", icon: "📈" },
        { title: "Annual Maintenance", desc: "Priority support and monthly performance audits.", icon: "🛠️" }
    ];

    return (
        <section className="logo-pricing-section" style={{ backgroundColor: '#0d0f1b' }}>
            <div className="container">
                <div className="pricing-header pt-5">
                    <h2 className="text-white">Shopify Development <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p className="text-secondary">Select a plan that fits your business scale. Custom quote available for special needs.</p>
                </div>

                {/* Packages Grid */}
                <div className="row justify-content-center align-items-center mb-5 py-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`logo-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag" style={{ backgroundColor: '#fdb914', color: '#000' }}>{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon" style={{ color: pkg.featured ? '#fff' : '#fdb914' }}>✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`} style={{ 
                                    backgroundColor: pkg.featured ? '#fdb914' : 'transparent',
                                    borderColor: '#fdb914',
                                    color: pkg.featured ? '#000' : '#fdb914'
                                }}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="logo-addons-area pb-5">
                    <div className="addons-header">
                        <h3 className="text-white">Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index} style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.05)' }}>
                                <div className="addon-icon-box" style={{ backgroundColor: 'rgba(253, 185, 20, 0.1)', color: '#fdb914' }}>
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4 className="text-white">{addon.title}</h4>
                                    <p className="text-secondary">{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopifyPricing;
