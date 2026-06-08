import React from 'react';

import { useLocation, Link } from 'react-router-dom';
import { blogPosts } from './blogData';

const BlogDetails = () => {
    const location = useLocation();
    const blogData = location.state || {}; // Access passed state

    // Get Recent Posts (first 4)
    const recentPosts = blogPosts.slice(0, 4);

    // Get Related Posts (same category, exclude current)
    const relatedPosts = blogPosts
        .filter(post => post.category === blogData.category && post.id !== blogData.id)
        .slice(0, 2);

    return (
        <div className="blog-details-page">
            {/* Hero Section */}
            <div className="blog-hero-section">
                <div className="blog-hero-overlay"></div>
                <div className="container position-relative h-100">
                    <div className="blog-hero-content text-center">
                        <div className="blog-hero-icons mb-4">
                            {/* Icons representing the graphic in the reference */}
                            <div className="d-flex justify-content-center gap-3">
                                <div className="hero-icon-circle bg-success text-white">
                                    <i className="fas fa-dollar-sign"></i>
                                </div>
                                <div className="hero-icon-circle bg-danger text-white">
                                    <i className="far fa-smile"></i>
                                </div>
                                <div className="hero-icon-circle bg-warning text-dark">
                                    <i className="far fa-laugh"></i>
                                </div>
                            </div>
                        </div>
                        <h1 className="blog-hero-title">{blogData.title || "10 Essential SEO Tips to Boost Your Website's Ranking"}</h1>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="blog-content-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            {/* Author Meta (Simple Line) */}
                            <div className="blog-meta mb-5 d-flex align-items-center">
                                <div className="author-img-small me-3">
                                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="Author" className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                                </div>
                                <div>
                                    <p className="mb-0 fw-bold">by Abhishek Shaw</p>
                                    <small className="text-muted">January 30, 2026</small>
                                </div>
                            </div>

                            <div className="blog-article-content">
                                <p className="mb-4">
                                    Hey there! Have you ever watched a commercial that made you smile, feel inspired, or even brought you to tears? That’s the magic of emotional marketing at work. It’s more than just selling a product—it’s about connecting with people on a deeper level.
                                </p>

                                <p>
                                    In a world where we see thousands of ads every day, the ones that stick are the ones that make us feel something. Whether it’s joy, nostalgia, or even a little sadness, emotions drive decisions. In fact, studies show that people rely on emotions rather than information to make brand decisions.
                                </p>

                                <p>
                                    So, what makes an emotional marketing campaign successful? And which brands are doing it right? Let’s dive into the top 10 emotional marketing examples and see what we can learn from them.
                                </p>

                                <h3 className="mt-5 mb-3">1. Dove – Real Beauty Sketches</h3>
                                <p>
                                    You’ve probably seen this one. Dove asked a forensic artist to draw women based on their own descriptions and then based on a stranger’s description. The difference was eye-opening. The sketches based on strangers’ descriptions were more beautiful and accurate, proving that we are often our own harshest critics.
                                </p>
                                <p><strong>Key Takeaway:</strong> Empower your audience. When you make people feel good about themselves, they associate that positive feeling with your brand.</p>

                                <h3 className="mt-5 mb-3">2. Apple – Misunderstood</h3>
                                <p>
                                    Apple’s holiday ad featured a teenage boy who seemed glued to his iPhone while his family enjoyed Christmas. But at the end, he reveals he was actually filming a heartwarming family video. It was a tear-jerker that highlighted how technology can bring people together rather than pull them apart.
                                </p>
                                <p><strong>Key Takeaway:</strong> Show the human side of your product. It’s not about the features; it’s about the experience.</p>

                                <h3 className="mt-5 mb-3">3. Airbnb – We Accept</h3>
                                <p>
                                    In response to political shifts, Airbnb launched a campaign promoting acceptance and belonging for everyone, regardless of who they are or where they come from. It was a bold stance that resonated with millions.
                                </p>
                                <p><strong>Key Takeaway:</strong> Don’t be afraid to stand for something. Shared values build strong communities.</p>

                                {/* Add more dummy content or placeholders as needed */}
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col-lg-4">
                            <div className="blog-sidebar ps-lg-4 mt-5 mt-lg-0">
                                <div className="sidebar-widget mb-5">
                                    <h4 className="widget-title mb-4">Recent Posts</h4>
                                    <div className="recent-posts">
                                        {recentPosts.map(post => (
                                            <div key={post.id} className="recent-post-item mb-3 d-flex align-items-center">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="me-3 rounded"
                                                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                                                />
                                                <div>
                                                    <h6 className="mb-1">
                                                        <Link to="/blog-details" state={post} className="text-decoration-none text-dark">
                                                            {post.title}
                                                        </Link>
                                                    </h6>
                                                    <small className="text-muted">{post.date}</small>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts Section (Full Width below) */}
                    <div className="row mt-5">
                        <div className="col-lg-12">
                            <h3 className="mb-4">You may also like</h3>
                            <div className="row">
                                {relatedPosts.length > 0 ? (
                                    relatedPosts.map(post => (
                                        <div key={post.id} className="col-lg-3 col-md-4 mb-4">
                                            <div className="card h-100 border-0 shadow-sm">
                                                <img src={post.image} className="card-img-top" alt={post.title} style={{ height: '250px', objectFit: 'cover' }} />
                                                <div className="card-body">
                                                    <div className="mb-2">
                                                        <span className="badge bg-light text-dark me-2">{post.category}</span>
                                                        <small className="text-muted">{post.date}</small>
                                                    </div>
                                                    <h5 className="card-title">
                                                        <Link to="/blog-details" state={post} className="text-decoration-none text-dark">
                                                            {post.title}
                                                        </Link>
                                                    </h5>
                                                    <p className="card-text text-muted">{post.desc}</p>
                                                    <Link to="/blog-details" state={post} className="btn read-more-btn">Read More</Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p className="text-muted">No related posts found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;
