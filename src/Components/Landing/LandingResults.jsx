import React from 'react';

const reelList = [
  {
    id: 'DU5q-znATwo',
    title: 'We Alll Client Result 1',
    embedUrl: 'https://www.instagram.com/reel/DU5q-znATwo/embed/',
    permalink: 'https://www.instagram.com/reel/DU5q-znATwo/'
  },
  {
    id: 'DUneybAkgrK',
    title: 'We Alll Client Result 2',
    embedUrl: 'https://www.instagram.com/reel/DUneybAkgrK/embed/',
    permalink: 'https://www.instagram.com/reel/DUneybAkgrK/'
  },
  {
    id: 'DUk9q5-EsWn',
    title: 'We Alll Client Result 3',
    embedUrl: 'https://www.instagram.com/reel/DUk9q5-EsWn/embed/',
    permalink: 'https://www.instagram.com/reel/DUk9q5-EsWn/'
  },
  {
    id: 'DUkETnFEqXS',
    title: 'We Alll Client Result 4',
    embedUrl: 'https://www.instagram.com/reel/DUkETnFEqXS/embed/',
    permalink: 'https://www.instagram.com/reel/DUkETnFEqXS/'
  }
];

const LandingResults = () => {
  return (
    <section className="wa-results-section wa-section-py" id="results" style={{ paddingBottom: '0px' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            We Created <span className="wa-highlight">Our Results</span>
          </h2>
          <p className="wa-section-subtitle">
            Our portfolio showcases proven expertise across organic acquisition, high-converting paid funnels, and ROI-centric digital campaigns. Explore direct testimonials from founders who scaled their market footprint with us.
          </p>
        </div>

        {/* 4 Direct Instagram Reel Embeds (Overlay images removed) */}
        <div className="wa-reels-grid">
          {reelList.map((reel, idx) => (
            <div className="wa-reel-card" key={idx}>
              <iframe
                src={reel.embedUrl}
                title={reel.title}
                className="wa-reel-iframe"
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingResults;

