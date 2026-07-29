import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, canonicalPath }) => {
  const defaultTitle = "We Alll - Results Driven Digital Marketing Agency";
  const defaultDesc = "We Alll is a digital marketing agency specializing in SEO, content creation, video production, experience design, development, page recovery, PR services, and influencer marketing.";
  const siteUrl = "https://www.wealll.com";

  return (
    <Helmet>
      <title>{title ? `${title} | We Alll` : defaultTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${canonicalPath || ''}`} />
      <meta property="og:title" content={title ? `${title} | We Alll` : defaultTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${siteUrl}${canonicalPath || ''}`} />
      <meta property="twitter:title" content={title ? `${title} | We Alll` : defaultTitle} />
      <meta property="twitter:description" content={description || defaultDesc} />

      {/* Canonical URL */}
      {canonicalPath && <link rel="canonical" href={`${siteUrl}${canonicalPath}`} />}
    </Helmet>
  );
};

export default SEO;
