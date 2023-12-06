import React from "react";
import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventAgenda from "./components/event-agenda/EventAgenda";
import EventDate from "./components/event-date/EventDate";
import Sponsors from "./components/sponsors/Sponsors";
import MentorsJuries from "./components/mentors & juries/MentorsJuries";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";

// const fullPageOptions = {
//   scrollSensitivity: 3,
//   touchSensitivity: 1,
//   scrollSpeed: 400, // Adjust the scroll speed as needed
//   resetSlides: true,
// };

function App() {
  return (
    <>
      <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
        <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p class="text-white text-lg mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
      {/* <Slide> */}
      <Hero />
      {/* </Slide> */}

      {/* <Slide> */}
      <EventLocation />
      {/* </Slide> */}

      {/* <Slide> */}
      <EventDate />
      {/* </Slide> */}

      {/* <Slide> */}
      <Sponsors />
      {/* </Slide> */}

      {/* <Slide> */}
      <MentorsJuries />
      {/* </Slide> */}

      {/* <Slide> */}
      <EventAgenda />
      {/* </Slide> */}

      {/* <Slide> */}
      <AboutBytecraft />
      {/* </Slide> */}
    </>
  );
}

export default App;
