import React from "react";
import { FullPage, Slide } from "react-full-page";
import "./App.css";
import Hero from "./components/hero-section/Hero";
import EventLocation from "./components/event-location/EventLocation";
import EventAgenda from "./components/event-agenda/EventAgenda";
import EventDate from "./components/event-date/EventDate";
import Sponsors from "./components/sponsors/Sponsors";
import MentorsJuries from "./components/mentors & juries/MentorsJuries";
import AboutBytecraft from "./components/aboutBytecraft/AboutBytecraft";

const fullPageOptions = {
  scrollSensitivity: 0.00000001, // Set to a low value to scroll one section at a time
  touchSensitivity: 0,
  scrollSpeed: 700, // Adjust the scroll speed as needed
  resetSlides: true,
  anchors: [
    "hero",
    "location",
    "date",
    "sponsors-section",
    "agenda",
    "mentors-juries",
    "about-bytecraft",
  ],
  css3: true,
  navigation: true,
  navigationPosition: "left",
  navigationTooltips: [
    "hero",
    "location",
    "date",
    "sponsors-section",
    "agenda",
    "mentors-juries",
    "about-bytecraft",
  ],
  scrollOverflow: true,
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
        <EventAgenda />
      </Slide>
      <Slide>
        <MentorsJuries />
      </Slide>
      <Slide>
        <AboutBytecraft />
      </Slide>
    </FullPage>
  );
}

export default App;
