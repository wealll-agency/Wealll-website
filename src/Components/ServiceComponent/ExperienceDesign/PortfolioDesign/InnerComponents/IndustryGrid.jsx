import React from 'react';
import './portfolio-industry-grid.css';
import BannerComponent from '../../../CommonComponents/BannerComponent';

const IndustryGrid = () => {
    const industries = [
        {
            title: "E-commerce & Online Business",
            desc: "Portfolio design focused on products, trust, and conversions.",
            icon: "🛍️",
            color: "#FF3366"
        },
        {
            title: "Beauty & Personal Care",
            desc: "Elegant and premium portfolio layouts with strong visual branding.",
            icon: "💄",
            color: "#FF99C8"
        },
        {
            title: "Sports & Fitness",
            desc: "Bold and energetic designs that highlight services, trainers, and programs.",
            icon: "🏋️",
            color: "#00FFCC"
        },
        {
            title: "Automotive Industry",
            desc: "Strong and professional design layouts showcasing services and vehicle listings.",
            icon: "🚗",
            color: "#FFCC00"
        },
        {
            title: "Fashion & Lifestyle",
            desc: "Stylish and modern portfolio design with creative branding and galleries.",
            icon: "👗",
            color: "#9D4EDD"
        },
        {
            title: "Construction & Real Estate",
            desc: "Portfolio designs with project showcase, property listings, and inquiry forms.",
            icon: "🏗️",
            color: "#4CC9F0"
        },
        {
            title: "Food & Beverage",
            desc: "Attractive portfolio layouts with menus, gallery, and brand storytelling.",
            icon: "🍔",
            color: "#FF6B6B"
        },
        {
            title: "Manufacturing Industry",
            desc: "Corporate and structured designs for product catalogs and business credibility.",
            icon: "🏭",
            color: "#A0A0A0"
        },
        {
            title: "Retail Industry",
            desc: "Clean and product-focused portfolio layouts with brand trust elements.",
            icon: "🏪",
            color: "#4361EE"
        },
        {
            title: "Education Industry",
            desc: "Professional designs for schools, institutes, courses, and student engagement.",
            icon: "🎓",
            color: "#403AFF"
        },
        {
            title: "Finance Industry",
            desc: "Highly trusted and clean design style with credibility-focused structure.",
            icon: "💼",
            color: "#189B48" // Trust Green
        },
        {
            title: "Healthcare Industry",
            desc: "Professional portfolio designs with trust-building layouts and service clarity.",
            icon: "⚕️",
            color: "#00C9FF"
        }
    ];

    return (
        <section className="industry-grid-section">
            <BannerComponent />
            <div className="container">
                <div className="industry-header text-center">
                    <h2>Portfolio Designing for <span className="highlight-text">All Industries</span></h2>
                    <p>Every industry has a different audience and style requirement. That’s why we create customized portfolio designs that match your niche and business identity.</p>
                </div>

                <div className="industry-grid-container">
                    {industries.map((ind, index) => (
                        <div className="industry-card" key={index} style={{ '--hover-color': ind.color }}>
                            <div className="card-bg-glow"></div>
                            <div className="card-icon-wrapper">
                                <span className="card-icon">{ind.icon}</span>
                            </div>
                            <h3>{ind.title}</h3>
                            <p>{ind.desc}</p>
                            <div className="card-border-line"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustryGrid;
