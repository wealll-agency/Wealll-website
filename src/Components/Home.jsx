import React, { useEffect } from "react";
// import VideoBanner from "./HomeComponent/VideoBanner";
// const myVideo = mediaUrl("assets/Video/px-showreel.mp4");
// const thumb = mediaUrl("assets/images/video-thumb-2.webp");
import OurClients from "./HomeComponent/OurClients";
import Aboutus from "./HomeComponent/Aboutus";
import Cta from "./HomeComponent/Cta";
import Buildbrand from "./HomeComponent/Buildbrand";
import Casestudy from "./HomeComponent/Casestudy";
import Testimonial from "./HomeComponent/Testimonial";
import Portfolio from "./HomeComponent/Portfolio";
import Hero from "./HomeComponent/Hero";

// const heroBg1 = mediaUrl("assets/images/Hero_Banner_01.webp");
// const heroBg2 = mediaUrl("assets/images/Hero_Banner_02.webp");
// const heroBg3 = mediaUrl("assets/images/Hero_Banner_ 03.webp");

// const heroBg3 = mediaUrl("assets/images/banner-granth-2-new-1-scaled.webp");

// const bannerVideo = mediaUrl("assets/Video/Wealll_hero.mp4");
import { mediaUrl } from "../config/media";

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
