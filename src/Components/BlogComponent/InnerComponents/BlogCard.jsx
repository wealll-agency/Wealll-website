import React from 'react';
import { Link } from 'react-router-dom';
import './BlogContent.css';

const BlogCard = ({ data }) => {
    return (
        <div className="blog-card">
            <div className="blog-card-image-wrapper">
                <span className="date-badge">{data.date}</span>
                <img src={data.image} alt={data.title} className="blog-card-image" loading="lazy" />
            </div>

            <div className="blog-card-content">
                <div className="blog-meta">
                    <span className="meta-item hashtag"># <span className="meta-category">{data.category}</span></span>
                    <span className="meta-item author">admin</span>
                </div>

                <h3 className="blog-card-title">{data.title}</h3>
                <p className="blog-card-desc">{data.desc}</p>

                <Link to={data.link} state={data} className="read-more-btn">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;
