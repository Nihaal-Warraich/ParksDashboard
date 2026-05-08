import React, { useState, useEffect, useCallback } from "react";
import { parkFacts } from "../data/Factsdata";
import styles from "./FactsCarousel.module.css";

const FactsCarousel = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const goTo = useCallback(
    (idx, dir = "next") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(idx);
        setAnimating(false);
      }, 300);
    },
    [animating]
  );

  const next = () => goTo((active + 1) % parkFacts.length, "next");
  const prev = () => goTo((active - 1 + parkFacts.length) % parkFacts.length, "prev");

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 7000);
    return () => clearInterval(timer);
  }, [active, next]);

  const fact = parkFacts[active];

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Facts About Newark Parks</h2>
        <p className={styles.desc}>
          Data from the 2025 ParkScore® Index by Trust for Public Land
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        {/* Main card */}
        <div
          className={`${styles.card} ${animating ? styles[`slide-${direction}`] : ""}`}
          style={{ "--accent": fact.color }}
        >
          <div className={styles.cardLeft}>
            <div className={styles.iconBadge} style={{ background: fact.color }}>
              <span>{fact.icon}</span>
            </div>
            <div className={styles.category}>{fact.category}</div>
            <h3 className={styles.headline}>{fact.headline}</h3>
            <p className={styles.subheadline}>{fact.subheadline}</p>
            <p className={styles.description}>{fact.description}</p>
          </div>

          <div className={styles.cardRight}>
            <div className={styles.statsGrid}>
              {fact.stats.map((s) => (
                <div key={s.label} className={styles.statBox}>
                  <div className={styles.statValue} style={{ color: fact.color }}>
                    {s.value}
                  </div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className={styles.controls}>
          <button className={styles.navBtn} onClick={prev} aria-label="Previous fact">
            ←
          </button>
          <div className={styles.dots}>
            {parkFacts.map((f, i) => (
              <button
                key={f.id}
                className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
                onClick={() => goTo(i, i > active ? "next" : "prev")}
                aria-label={`Go to fact ${i + 1}`}
                style={i === active ? { background: f.color } : {}}
              />
            ))}
          </div>
          <button className={styles.navBtn} onClick={next} aria-label="Next fact">
            →
          </button>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbStrip}>
        {parkFacts.map((f, i) => (
          <button
            key={f.id}
            className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
            onClick={() => goTo(i, i > active ? "next" : "prev")}
            style={{ "--thumb-color": f.color }}
          >
            <span>{f.icon}</span>
            <span className={styles.thumbLabel}>{f.category}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default FactsCarousel;