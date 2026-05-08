import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {/* Decorative leaf motifs */}
      <div className={styles.leafLeft} aria-hidden="true">🌿</div>
      <div className={styles.leafRight} aria-hidden="true">🍃</div>

      <div className={styles.inner}>
        <div className={styles.badge}>Newark, New Jersey</div>
        <h1 className={styles.title}>
          Public Parks &amp;<br />
          <em>Green Spaces</em>
        </h1>
        <p className={styles.subtitle}>
          Exploring the parks, people, and data behind Newark's urban green future —
          one neighborhood at a time.
        </p>
        <div className={styles.scoreRow}>
          <div className={styles.scoreCard}>
            <span className={styles.scoreNum}>48.8</span>
            <span className={styles.scoreLabel}>ParkScore® 2025</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.scoreCard}>
            <span className={styles.scoreNum}>#62</span>
            <span className={styles.scoreLabel}>National Rank</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.scoreCard}>
            <span className={styles.scoreNum}>92%</span>
            <span className={styles.scoreLabel}>Park Access</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.scoreCard}>
            <span className={styles.scoreNum}>835</span>
            <span className={styles.scoreLabel}>Acres of Parkland</span>
          </div>
        </div>
        <a
          href = "https://www.tpl.org/city/newark-new-jersey"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaBtn}
        >
          Explore the Full Report ↗
        </a>
      </div>

      {/* Decorative wave bottom */}
      <div className={styles.wave} aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="var(--cornsilk)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;