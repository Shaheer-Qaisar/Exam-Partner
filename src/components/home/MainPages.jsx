import React from 'react'
import Milestones from './Milestones'
import OurTeam from './OurTeam'
import StartingSteps from './StartingSteps'
import Booking from './Booking'
import FAQs from './FAQs'
import ContactForm from './ContactForm'
import Banner from './Banner'

function MainPages() {
  return (
    <>
      <Banner />
       <Milestones/>
      <OurTeam/>
      <StartingSteps/>
     <Booking/>
      <FAQs/>
     <ContactForm/>  
    </>
  )
}

export default MainPages
