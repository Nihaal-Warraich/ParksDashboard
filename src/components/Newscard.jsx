import React from "react";
import styles from "./NewsCard.module.css";

/**
 * NewsCard — Reusable component for displaying a news article.
 *
 * Props:
 *   article: {
 *     title: string,
 *     source: string,
 *     date: string,
 *     summary: string,
 *     imageUrl: string | null,
 *     imagePlaceholderColor: string,
 *     link: string,
 *     tag: string,
 *   }
 */
const NewsCard = ({ article }) => {
  const { title, source, date, summary, imageUrl, imagePlaceholderColor, link, tag } = article;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        {imageUrl ? (
          <img src={imageUrl} alt={title} className={styles.image} />
        ) : (
          <div
            className={styles.imagePlaceholder}
            style={{ background: `linear-gradient(135deg, ${imagePlaceholderColor}cc 0%, ${imagePlaceholderColor}88 100%)` }}
          >
            <span>🌳</span>
          </div>
        )}
        <span className={styles.tag}>{tag}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className={styles.source}>{source}</span>
          <span className={styles.dot}>·</span>
          <span className={styles.date}>{date}</span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.summary}>{summary}</p>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.readMore}
        aria-label={`Read more: ${title}`}
      >
        Read Article ↗
      </a>
    </article>
  );
};

export default NewsCard;