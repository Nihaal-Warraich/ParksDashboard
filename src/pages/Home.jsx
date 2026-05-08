import React from "react";
import Hero from "../components/Hero";
import MapSection from "../components/MapSection";
import FactsCarousel from "../components/Factscarousel";
import NewsSection from "../components/NewsSection";
import PersonalStory from "../components/Personalstory";
import DonationSection from "../components/Donationsection";
import SectionDivider from "../components/Sectiondivider";
import "../styles/global.css";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.page}>
      {/* Row 1 — Hero */}
      <Hero />

      {/* Row 2 — Map + Park Explorer */}
      <MapSection />

      {/* Divider into dark facts section */}
      <SectionDivider fromColor="var(--cornsilk)" toColor="var(--black-forest)" />

      {/* Row 3 — Facts Carousel */}
      <FactsCarousel />

      {/* Divider out of dark section */}
      <SectionDivider fromColor="var(--black-forest)" toColor="var(--cornsilk)" flip />

      {/* Row 4 — News */}
      <NewsSection />

      {/* Row 5 — Personal Story */}
      <PersonalStory />

      {/* Row 6 — Donation */}
      <DonationSection />


      {/* Footer */}
      <footer className={styles.footer}>
        <p>
          Data Sources: Trust for Public Land, newarknj.gov, and tireless google searches for missing government data. 
        </p>
      </footer>
    </div>
  );
};

export default Home;