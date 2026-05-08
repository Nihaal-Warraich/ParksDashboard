import React, { useState } from "react";
import { parksByWard, wardColors } from "../data/Parksdata";
import styles from "./MapSection.module.css";

// ── Park Explorer (right card) ──────────────────────────────
const ParkExplorer = () => {
  const [openWard, setOpenWard] = useState(null);

  const toggle = (ward) => setOpenWard(openWard === ward ? null : ward);

  const handleParkClick = (park) => {
    const query = encodeURIComponent(`${park.name} Newark NJ park`);
    window.open(`https://www.google.com/search?q=${query}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.explorer}>
      <h3 className={styles.cardTitle}>Explore Parks by Ward</h3>
      <p className={styles.cardSub}>Click a park name to search it on Google</p>
      <div className={styles.wardList}>
        {Object.entries(parksByWard).map(([ward, parks]) => {
          const isOpen = openWard === ward;
          const color = wardColors[ward] || "var(--olive-leaf)";
          return (
            <div key={ward} className={styles.wardItem}>
              <button
                className={`${styles.wardToggle} ${isOpen ? styles.wardOpen : ""}`}
                onClick={() => toggle(ward)}
                aria-expanded={isOpen}
                style={{ "--ward-color": color }}
              >
                <span className={styles.wardDot} style={{ background: color }} />
                <span className={styles.wardName}>{ward}</span>
                <span className={styles.wardCount}>{parks.length} parks</span>
                <span className={styles.chevron}>{isOpen ? "▲" : "▼"}</span>
              </button>
              {isOpen && (
                <ul className={styles.parkList}>
                  {parks.map((park) => (
                    <li key={park.name}>
                      <button
                        className={styles.parkBtn}
                        onClick={() => handleParkClick(park)}
                        title={`Search: ${park.name}`}
                      >
                        <span className={styles.parkName}>{park.name}</span>
                        <span className={styles.parkAddr}>{park.address}</span>
                        {park.note && <span className={styles.parkNote}>{park.note}</span>}
                        <span className={styles.searchIcon}>↗</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Map placeholder (left card) ─────────────────────────────
const MapCard = () => (
  <div className={styles.mapCard}>
    <h3 className={styles.cardTitle}>Newark Ward Map</h3>
    <p className={styles.cardSub}>Parks &amp; Greenspaces by District</p>
    <div className={styles.mapImageWrapper}>
      <img
        src={`${process.env.PUBLIC_URL}/images/map-of-Newark-wards.webp`}
        alt="Map of Newark NJ showing ward boundaries and park locations"
        className={styles.mapImage}
        onError={(e) => {
          e.target.style.display = "none";
          e.target.nextSibling.style.display = "flex";
        }}
      />
      <div className={styles.mapPlaceholder}>
        <div className={styles.mapPlaceholderInner}>
          <span style={{ fontSize: "3rem" }}>🗺️</span>
          <p>Ward Map Image</p>
          <small>Add your map to<br /><code>public/images/map-of-Newark-wards.webp</code></small>
        </div>
      </div>
    </div>
  </div>
);

// ── Combined Section ────────────────────────────────────────
const MapSection = () => (
  <section className={styles.section}>
    <div className={styles.sectionHeader}>
      <h2 className={styles.sectionTitle}>The City &amp; Its Parks</h2>
      <p className={styles.sectionDesc}>Newark is divided into five wards, each with its own collection of green spaces.</p>
    </div>
    <div className={styles.grid}>
      <MapCard />
      <ParkExplorer />
    </div>
  </section>
);

export default MapSection;