import React from "react";
import styles from "./DonationSection.module.css";

const donationLinks = [
  {
    id: 1,
    icon: "🌳",
    title: "Trust for Public Land",
    desc: "Support national park equity research and advocacy.",
    btnText: "Donate to TPL",
    href: "https://www.tpl.org/who-we-are",
    accent: "#606c38",
  },
  {
    id: 2,
    icon: "🏙️",
    title: "Branch Brook Park Alliance",
    desc: "Help maintain, restore, and rejuvenate Branch Brook park to remain a nurturing space for everyone.",
    btnText: "Support BBPA",
    href: "https://branchbrookpark.org/donate.html",
    accent: "#283618",
  },
  {
    id: 3,
    icon: "🌿",
    title: "Newark City Parks",
    desc: "Volunteer for special events and assist with park clean up and small repairs.",
    btnText: "Voluteer",
    href: "https://www.newarkcityparks.org/",
    accent: "#bc6c25",
  },
  {
    id: 4,
    icon: "📢",
    title: "Advocate for Newark Parks",
    desc: "Contact your city council representative and demand increased park investment.",
    btnText: "Find Your Rep",
    href: "https://ziplook.house.gov/htbin/findrep_house?ZIP=07112",
    accent: "#dda15e",
  },
];

const DonationSection = () => (
  <section className={styles.section}>
    <div className={styles.inner}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>Take Action</span>
        <h2 className={styles.title}>Support Newark's Green Future</h2>
        <p className={styles.desc}>
          Newark's parks need investment. These organizations are doing the work —
          your time, voice, and resources can make a difference.
        </p>
      </div>

      <div className={styles.grid}>
        {donationLinks.map((item) => (
          <div key={item.id} className={styles.card} style={{ "--accent": item.accent }}>
            <div className={styles.cardIcon} style={{ background: item.accent }}>
              <span>{item.icon}</span>
            </div>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardDesc}>{item.desc}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btn}
              style={{ background: item.accent }}
            >
              {item.btnText} ↗
            </a>
          </div>
        ))}
      </div>

      <div className={styles.footerNote}>
        <p>
          Data sourced from the{" "}
          <a href="https://www.tpl.org/parkscore/newark-nj" target="_blank" rel="noopener noreferrer">
            2025 ParkScore® Index
          </a>{" "}
          by Trust for Public Land. Links open in a new tab.
        </p>
      </div>
    </div>
  </section>
);

export default DonationSection;