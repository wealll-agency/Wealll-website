import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, canonicalPath }) => {
  const location = useLocation();
  const defaultTitle = "We Alll - Results Driven Digital Marketing Agency";
  const defaultDesc = "We Alll is a digital marketing agency specializing in SEO, content creation, video production, experience design, development, page recovery, PR services, and influencer marketing.";
  const siteUrl = "https://www.wealll.com";

  // Auto-generate canonical path if not explicitly provided
  const currentPath = canonicalPath !== undefined 
    ? canonicalPath 
    : (location.pathname === "/" ? "/" : location.pathname.replace(/\/+$/, ""));

  return (
    <Helmet>
      <title>{title ? title : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${currentPath}`} />
      <meta property="og:title" content={title ? title : defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${currentPath}`} />
      <meta property="twitter:title" content={title ? title : defaultTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />

      {/* Canonical URL */}
      <link rel="canonical" href={`${siteUrl}${currentPath}`} />
    </Helmet>
  );
};

export default SEO;
