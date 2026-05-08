import React, { useEffect, useState } from "react";
import NewsCard from "./Newscard";
import { fetchNewsData } from "../data/Newsdata";
import styles from "./NewsSection.module.css";

/**
 * Skeleton placeholder rendered while articles are loading.
 * Mirrors the NewsCard structure so there's no layout shift on load.
 */
const SkeletonCard = () => (
  <div className={styles.skeleton}>
    <div className={styles.skeletonImage} />
    <div className={styles.skeletonBody}>
      <div className={`${styles.skeletonLine} ${styles.skeletonShort}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonFull}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonFull}`} />
      <div className={`${styles.skeletonLine} ${styles.skeletonMed}`} />
    </div>
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────

/**
 * NewsSection
 *
 * To integrate a real API:
 * 1. Set REACT_APP_GNEWS_KEY in your .env and restart the dev server.
 * 2. The component will automatically use live GNews results when the key is present.
 * 3. Fallback articles are shown whenever the API is unavailable.
 */
const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [usingFallback, setUsingFallback] = useState(false);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await fetchNewsData();

        if (!mounted) return;

        setArticles(data);

        // fetchNewsData never throws — it returns fallback on failure.
        // Detect fallback by checking whether the API key is present.
        if (!process.env.REACT_APP_GNEWS_KEY) {
          setUsingFallback(true);
        }
      } catch (err) {
        // This branch is only hit if fetchNewsData itself throws unexpectedly.
        console.error("[NewsSection] Unexpected error:", err);
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>Stay Informed</span>
          <h2 className={styles.title}>Explore News</h2>
        </div>
        <p className={styles.desc}>
          The latest coverage on Newark's parks, green infrastructure, and
          community advocacy.
        </p>
      </div>

      {/* Fallback notice — visible only when no API key is configured */}
      {!loading && usingFallback && (
        <p className={styles.fallbackNotice}>
          ℹ️ Showing curated articles — set{" "}
          <code>REACT_APP_GNEWS_KEY</code> in your <code>.env</code> for live
          results.
        </p>
      )}

      <div className={styles.grid}>
        {/* Loading skeletons */}
        {loading &&
          Array.from({ length: 6 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

        {/* Unexpected error */}
        {!loading && error && (
          <p className={styles.errorMsg}>
            ⚠️ Unable to load news right now. Please try again later.
          </p>
        )}

        {/* Live or fallback articles */}
        {!loading &&
          !error &&
          articles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
      </div>

      <div className={styles.footer}>
        <a
          href="https://www.google.com/search?q=Newark+NJ+parks+news"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreBtn}
        >
          View More Stories ↗
        </a>
      </div>
    </section>
  );
};

export default NewsSection;