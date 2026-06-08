import React from 'react';
import './BlogContent.css';

const BlogTabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div className="blog-tabs-container">
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    className={`blog-tab ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => onTabChange(tab)}
                >
                    {tab}
                </button>
            ))}
        </div>
    );
};

export default BlogTabs;
