import React from "react";
import { FullPage, Slide } from "react-full-page";
import { createRoot } from "react-dom/client";
import "./index.css";
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
  return (
    <FullPage {...fullPageOptions}>
      <Slide>
        <Hero />
      </Slide>

      <Slide>
        <EventLocation />
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
        <AboutBytecraft />
      </Slide>
    </FullPage>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
