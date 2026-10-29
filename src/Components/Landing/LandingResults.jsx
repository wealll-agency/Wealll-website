import React from 'react';

const reelList = [
  {
    id: 'DU5q-znATwo',
    title: 'We Alll Client Result 1',
    embedUrl: 'https://www.instagram.com/reel/DYFAlMWjaDv/embed/',
    permalink: 'https://www.instagram.com/reel/DYFAlMWjaDv/'
  },
  {
    id: 'DUneybAkgrK',
    title: 'We Alll Client Result 2',
    embedUrl: 'https://www.instagram.com/reel/DNklesUuEeH/embed/',
    permalink: 'https://www.instagram.com/reel/DNklesUuEeH/'
  },
  {
    id: 'DUk9q5-EsWn',
    title: 'We Alll Client Result 3',
    embedUrl: 'https://www.instagram.com/reel/C8Fgy8iBzkC/embed/',
    permalink: 'https://www.instagram.com/reel/C8Fgy8iBzkC/'
  },
  {
    id: 'DUkETnFEqXS',
    title: 'We Alll Client Result 4',
    embedUrl: 'https://www.instagram.com/reel/C8v6KXMyszU/embed/',
    permalink: 'https://www.instagram.com/reel/C8v6KXMyszU/'
  }
];

const LandingResults = () => {
  return (
    <section className="wa-results-section wa-section-py" id="results" style={{ paddingBottom: '0px' }}>
      <div className="container">
        <div className="text-center">
          <h2 className="wa-section-title">
            DON’T BELIEVE US. <span className="wa-highlight">BELIEVE THE RESULTS.</span>
          </h2>
          <p className="wa-section-subtitle">
            Hear directly from business owners about their experience working with We Alll and how our strategies helped turn their digital presence into real business revenue.
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

