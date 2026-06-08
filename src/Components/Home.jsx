import React, { useEffect } from "react";
// import VideoBanner from "./HomeComponent/VideoBanner";
// import myVideo from "../assets/Video/px-showreel.mp4";
// import thumb from "../assets/images/video-thumb-2.webp";
import OurClients from "./HomeComponent/OurClients";
import Aboutus from "./HomeComponent/Aboutus";
import Cta from "./HomeComponent/Cta";
import Buildbrand from "./HomeComponent/Buildbrand";
import Casestudy from "./HomeComponent/Casestudy";
import Testimonial from "./HomeComponent/Testimonial";
import Portfolio from "./HomeComponent/Portfolio";
import Hero from "./HomeComponent/Hero";

// import heroBg1 from "../assets/images/Hero_Banner_01.webp";
// import heroBg2 from "../assets/images/Hero_Banner_02.webp";
// import heroBg3 from "../assets/images/Hero_Banner_ 03.webp";

// import heroBg3 from "../assets/images/banner-granth-2-new-1-scaled.webp";

// import bannerVideo from "../assets/Video/Wealll_hero.mp4";

const Home = () => {


  return (
    <>
      <Hero />
      {/* <VideoBanner src={myVideo} overlay={thumb} width="100%"></VideoBanner> */}
      <OurClients></OurClients>
      <Aboutus></Aboutus>
      <Cta></Cta>
      <Buildbrand></Buildbrand>
      <Casestudy></Casestudy>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
    </>
  );
};

export default Home;
