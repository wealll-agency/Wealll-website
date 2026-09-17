import React, { useEffect } from 'react';
import LandingHeader from './LandingHeader';
import LandingHero from './LandingHero';
import LandingClients from './LandingClients';
import LandingUSP from './LandingUSP';
import LandingBannerCTA from './LandingBannerCTA';
import LandingResults from './LandingResults';
import LandingServices from './LandingServices';
import LandingAboutAgency from './LandingAboutAgency';
import LandingLeadership from './LandingLeadership';
import LandingTechStack from './LandingTechStack';
import LandingFAQ from './LandingFAQ';
import LandingTeam from './LandingTeam';
import LandingOtherServices from './LandingOtherServices';
import LandingStatsBadges from './LandingStatsBadges';
import LandingMobileStickyCTA from './LandingMobileStickyCTA';
import './Landing.css';

const Landing = () => {
  useEffect(() => {
    document.title = 'Digital Marketing Agency in Kolkata | We Alll';
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="wa-landing-page">
      {/* 1. Header with Logo and Phone */}
      <LandingHeader />

      {/* 2. Hero Section with Value Proposition and Lead Capture Form */}
      <LandingHero />


      {/* 6. Results & Video Testimonials */}
      <LandingResults />

      {/* 3. Client Logos (We Win When Our Clients Win) */}
      <LandingClients />

      {/* 4. USP of Our Digital Marketing Services */}
      <LandingUSP />

      {/* 5. Full-width Callout Banner */}
      <LandingBannerCTA />


      {/* 7. Core Services (Grow Your Business 4X) */}
      <LandingServices />

      {/* 8. #1 Digital Marketing Company in Kolkata */}
      {/* <LandingAboutAgency /> */}

      {/* 9. Leadership & CEO Profile */}
      {/* <LandingLeadership /> */}

      {/* 10. Technology Partners & Stack */}
      {/* <LandingTechStack /> */}

      {/* 11. Frequently Asked Questions */}
      <LandingFAQ />

      {/* 12. Team Members (The Faces Behind We Alll) */}
      {/* <LandingTeam /> */}

      {/* 13. Specialized Other Services (Wikipedia & Web Dev) */}
      {/* <LandingOtherServices /> */}

      {/* 14. Trust Badges & Project Counters */}
      <LandingStatsBadges />

      {/* 15. Landing Page Footer */}
      {/* <LandingFooter /> */}

      {/* 17. Sticky Mobile 'Book A Free Consultation' Bar (Mobile only) */}
      <LandingMobileStickyCTA />
    </main>
  );
};

export default Landing;
