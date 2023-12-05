import React, { useState, useEffect } from "react";
import { FullPage, Slide } from "react-full-page";
import "./App.css";
import ScrollRevealComponent from "./ScrollRevealComponent";

import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventAgenda from "./components/event-agenda/EventAgenda";
import EventDate from "./components/event-date/EventDate";
import Sponsors from "./components/sponsors/Sponsors";
import MentorsJuries from "./components/mentors & juries/MentorsJuries";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";

const fullPageOptions = {
  scrollSensitivity: 3,
  touchSensitivity: 1,
  scrollSpeed: 400, // Adjust the scroll speed as needed
  resetSlides: true,
};

function App() {
  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShowBox(true);
    }, 1500);

    return () => clearTimeout(delayTimeout);
  }, []);

  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setIsBlurred(true);
    }, 2000);

    return () => clearTimeout(delayTimeout);
  }, []);

  return (
    <FullPage {...fullPageOptions}>
      <Slide>
        <Hero />
      </Slide>

      <Slide>
        <ScrollRevealComponent>
          <EventLocation />
        </ScrollRevealComponent>
      </Slide>

      <Slide>
        <EventDate />
      </Slide>

      <Slide>
        <Sponsors />
      </Slide>

      <Slide>
        <MentorsJuries />
      </Slide>

      <Slide>
        <EventAgenda />
      </Slide>

      <Slide>
        <ScrollRevealComponent>
          <AboutBytecraft />
        </ScrollRevealComponent>
      </Slide>
    </FullPage>
  );
}

export default App;
