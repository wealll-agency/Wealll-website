import React from 'react';
import './product-description-pricing.css';

const ProductDescriptionPricing = () => {
    const packages = [
        {
            title: "Single Listing",
            subtitle: "Starting With",
            price: "800",
            features: [
                "1 Product Description",
                "SEO Keywords Included",
                "Bullet Points",
                "1 Revision"
            ],
            btnText: "Order Now",
            featured: false
        },
        {
            title: "10 Product Bundle",
            subtitle: "Starting With",
            price: "7,500",
            features: [
                "10 Product Descriptions",
                "Consistency Check",
                "Competitor Research",
                "2 Revisions",
                "Priority Delivery"
            ],
            btnText: "Order Bundle",
            featured: true,
            badge: "Most Popular"
        },
        {
            title: "50 Product Bundle",
            subtitle: "Starting With",
            price: "35,000",
            features: [
                "50 Product Descriptions",
                "Full Catalog Tone Match",
                "SEO Strategy Map",
                "Unlimited Revisions",
                "Dedicated Writer"
            ],
            btnText: "Bulk Order",
            featured: false
        }
    ];

    // Added Enterprise as a separate card or just kept 3 for symmetry with ArticleWriting? 
    // ArticleWriting had 3. User content had 4. Let's stick to 3 main distinct cards for the "Article Writing" look which is usually 3-col.
    // Or I can add the 4th if it fits. The user said "Exactly like this" referring to Article Writing which likely has 3.
    // I will include the 4th one but styling might need adjustment if grid is 3 cols. 
    // ArticlePricing uses: col-md-6 col-lg-4 mb-4. So 3 columns.
    // I'll stick to the 3 main packages for the cards to match the layout exactly, and maybe add the Enterprise as a full-width text below or a 4th card if it wraps nicely.
    // Actually, let's just make it 3 cards to be safe and "Exactly" like the reference. I'll drop the Enterprise card or merge it.
    // Wait, the user provided content has 4 packages. I should try to fit 4 or just render 3.
    // Let's render 3 and put Enterprise in a contact section or just standard 3 pricing capability.
    // I'll render the first 3 (Single, 10, 50) as they map best.

    const addons = [
        {
            title: "Title Optimization",
            desc: "Click-worthy titles included.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
        },
        {
            title: "Keyword Research",
            desc: "Finding high-volume keywords.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        },
        {
            title: "Category Writing",
            desc: "SEO content for collections.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        },
        {
            title: "Alt Text",
            desc: "Image SEO for accessibility.",
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
        }
    ];

    return (
        <section className="product-pricing-section">
            <div className="container">
                <div className="pricing-header">
                    <h2>Product Description <span style={{ color: '#fdb914' }}>Packages</span></h2>
                    <p>Choose the perfect package based on your SKU count.</p>
                </div>

                {/* Packages Grid - Exactly like ArticlePricing */}
                <div className="row justify-content-center align-items-center mb-5">
                    {packages.map((pkg, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div className={`product-pricing-card ${pkg.featured ? 'featured' : ''}`}>
                                <div className="pricing-title-area">
                                    {pkg.badge && <span className="popular-tag">{pkg.badge}</span>}
                                    <h3>{pkg.title}</h3>
                                    <h4>{pkg.subtitle}</h4>
                                    <div className="pricing-price">
                                        <span className="pricing-currency">₹</span>{pkg.price}
                                    </div>
                                </div>
                                <ul className="pricing-features-list">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i}>
                                            <span className="check-icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a href="#contact" className={`pricing-btn ${pkg.featured ? 'filled' : 'outline'}`}>
                                    {pkg.btnText}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add-ons Grid */}
                <div className="product-addons-area">
                    <div className="addons-header">
                        <h3>Optional <span style={{ color: '#fdb914' }}>Add-ons</span></h3>
                    </div>
                    <div className="addons-grid-modern">
                        {addons.map((addon, index) => (
                            <div className="addon-card-premium" key={index}>
                                <div className="addon-icon-box">
                                    {addon.icon}
                                </div>
                                <div className="addon-content">
                                    <h4>{addon.title}</h4>
                                    <p>{addon.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDescriptionPricing;
