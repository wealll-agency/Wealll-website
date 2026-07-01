import React from 'react'
import AboutBanner from './AboutComponent/AboutBanner'
import OurValues from './AboutComponent/OurValues'
import BrandGrow from './AboutComponent/BrandGrow'
import MeetOurTeam from './AboutComponent/MeetOurTeam'
import OurJourney from './AboutComponent/OurJourney'
import OurTrips from './AboutComponent/OurTrips'
import Awards from './AboutComponent/Awards'
import OurStrategy from './AboutComponent/OurStrategy'

const About = () => {
  return (
    <>
      <AboutBanner></AboutBanner>
      {/* <OurStrategy></OurStrategy> */}
      <BrandGrow></BrandGrow>
      <OurValues></OurValues>
      <MeetOurTeam></MeetOurTeam>
      {/* <OurJourney></OurJourney> */}
      <OurTrips></OurTrips>
      <Awards></Awards>
    </>
  )
}

export default About