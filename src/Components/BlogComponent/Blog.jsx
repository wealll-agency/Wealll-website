import React, { useState } from 'react';
import Blogbanner from './InnerComponents/Blogbanner';
import BlogTabs from './InnerComponents/BlogTabs';
import BlogCard from './InnerComponents/BlogCard';

import { blogPosts } from './blogData';

const tabs = ["All", "Branding", "Digital Marketing", "E-Commerce", "Web Design", "Web Development"];

const Blog = () => {
    const [activeTab, setActiveTab] = useState("All");

    const filteredPosts = activeTab === "All"
        ? blogPosts
        : blogPosts.filter(post => post.category === activeTab || (activeTab === "Digital Marketing" && (post.category === "SEO" || post.category === "PPC")));

    return (
        <>
            <Blogbanner />

            <div className="blog-content-container">
                <BlogTabs
                    tabs={tabs}
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                />

                <div className="blog-card-grid">
                    {filteredPosts.map(post => (
                        <BlogCard key={post.id} data={post} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Blog