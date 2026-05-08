import React, { useState, useEffect } from "react";
import styles from "./ImageGallery.module.css";

/**
 * ImageGallery
 * Loads images dynamically from public/images/parkpictures/
 * Add images there as: park1.jpg, park2.jpg, etc.
 *
 * To use real dynamic imports, images should be referenced
 * in the imageList array below (update with actual filenames).
 */
const imageList = [
  { src: "/images/parkpictures/park1.jpeg" },
  { src: "/images/parkpictures/park2.jpeg"},
  { src: "/images/parkpictures/park3.jpeg" },
  { src: "/images/parkpictures/park4.jpeg" },
  { src: "/images/parkpictures/park5.jpeg" },
  { src: "/images/parkpictures/park6.jpeg" },
  { src: "/images/parkpictures/park7.jpeg" }

];

const PLACEHOLDER_COLORS = ["#606c38", "#283618", "#dda15e", "#bc6c25", "#8a9a5b"];
const PLACEHOLDER_EMOJIS = ["🌳", "🌸", "⛲", "🏞️", "🌿"];

const ImageGallery = () => {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});

  const total = imageList.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // Auto-advance
  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [current]);

  const handleLoad = (i) => setLoaded((l) => ({ ...l, [i]: true }));
  const handleError = (i) => setFailed((f) => ({ ...f, [i]: true }));

  const img = imageList[current];

  return (
    <div className={styles.gallery}>
      <h3 className={styles.galleryTitle}>Pictures from Cherry Blossom Season at Branch Brook</h3>
      <p className={styles.galleryCredit}>Photo Credits: My dear friend Nabiya Chaudhry because taking photos is not my strong suit. </p>
      <div className={styles.imageFrame}>
        {!failed[current] ? (
          <img
            key={img.src}
            src={img.src}
            alt={img.caption}
            className={`${styles.image} ${loaded[current] ? styles.imageLoaded : ""}`}
            onLoad={() => handleLoad(current)}
            onError={() => handleError(current)}
          />
        ) : null}

        {/* Placeholder shown when image not yet loaded or failed */}
        {(failed[current] || !loaded[current]) && (
          <div
            className={styles.placeholder}
            style={{ background: PLACEHOLDER_COLORS[current % PLACEHOLDER_COLORS.length] }}
          >
            <span>{PLACEHOLDER_EMOJIS[current % PLACEHOLDER_EMOJIS.length]}</span>
            <p>Add photo to</p>
            <small><code>public/images/parkpictures/park{current + 1}.jpg</code></small>
          </div>
        )}

        {/* Prev/Next overlays */}
        <button className={`${styles.arrowBtn} ${styles.arrowLeft}`} onClick={prev} aria-label="Previous image">‹</button>
        <button className={`${styles.arrowBtn} ${styles.arrowRight}`} onClick={next} aria-label="Next image">›</button>

        {/* Counter badge */}
        <div className={styles.counter}>{current + 1} / {total}</div>
      </div>

      {/* Caption */}
      <p className={styles.caption}>{img.caption}</p>

      {/* Dot indicators */}
      <div className={styles.dots}>
        {imageList.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`View image ${i + 1}`}
          />
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className={styles.thumbStrip}>
        {imageList.map((img, i) => (
          <button
            key={i}
            className={`${styles.thumb} ${i === current ? styles.thumbActive : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Thumbnail ${i + 1}`}
          >
            {!failed[i] ? (
              <img src={img.src} alt="" onError={() => handleError(i)} />
            ) : (
              <div
                className={styles.thumbPlaceholder}
                style={{ background: PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length] }}
              >
                {PLACEHOLDER_EMOJIS[i % PLACEHOLDER_EMOJIS.length]}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;