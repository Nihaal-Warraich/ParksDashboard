import React, { useEffect, useState } from "react";
import NewsCard from "./Newscard";
import { fetchNewsData } from "../data/Newsdata";
import styles from "./NewsSection.module.css";

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

const NewsSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const load = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchNewsData();
        if (mounted) setArticles(data);
      } catch (err) {
        console.error("[NewsSection] Unexpected error:", err);
        if (mounted) setError(err);
      } finally {
        if (mounted) setLoading(false);
      }
    };

    load();
    return () => { mounted = false; };
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

      <div className={styles.grid}>
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}

        {!loading && error && (
          <p className={styles.errorMsg}>
            ⚠️ Unable to load news right now. Please try again later.
          </p>
        )}

        {!loading && !error && articles.map((article) => (
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