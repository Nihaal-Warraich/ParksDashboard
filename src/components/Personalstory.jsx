import React from "react";
import ImageGallery from "./Imagegallery";
import styles from "./PersonalStory.module.css";

const storyText = `
Growing up, one of the things I appreciated most about my hometown was how close I lived to public recreational spaces. Whenever schoolwork became overwhelming or I needed a break from staring at a computer screen, I could simply walk five minutes from my house and find myself surrounded by nature. There was a pond with a walking path wrapped around it, tennis courts filled with activity, playgrounds crowded with families, and trails where people walked their dogs or simply enjoyed the outdoors. Even though it may have seemed like a small part of the town, that space had a major impact on my daily life. It gave me a place to relax, clear my mind, and reconnect with people and nature outside of academics and technology. Over time, I began to realize that access to green spaces is not just a luxury but something deeply connected to mental health, community well-being, and quality of life.

When I came to NJIT and started spending more time in Newark, I began noticing the important role parks played within the city as well. Between classes, I often walked through Military Park or Veterans Memorial Park to decompress before returning to campus. On days where I had longer breaks, I would take the light rail to Branch Brook Park, one of Newark’s most iconic public spaces. What stood out to me was how these parks served so many different purposes at once. They were places for exercise, relaxation, cultural events, and social interaction. People from completely different backgrounds shared the same public spaces, whether they were jogging, attending community events, or simply sitting outside enjoying fresh air.

As I researched Newark’s history of park development and restoration, I became increasingly interested in the question of accessibility. I wanted to know whether the benefits I personally experienced from parks were equally available to everyone living in Newark. Throughout this course, we studied how Newark’s social and economic history disproportionately affected communities of color and lower-income neighborhoods. Because of this, I began thinking critically about whether public green spaces followed similar patterns of inequality. While statistics from the Trust for Public Land showed that a large percentage of Newark residents live within walking distance of a park, I became curious about the actual quality and maintenance of those spaces. A park may technically exist in a neighborhood, but that does not necessarily mean it receives the same investment, upkeep, or programming as larger and more famous parks like Branch Brook.

This curiosity ultimately inspired me to create a data dashboard focused on Newark’s parks and green spaces. As someone studying computer science and data analysis, I realized that technology could help make information about parks more accessible and transparent to the public. During my research, I found myself searching through multiple reports, articles, and government sources just to piece together basic information about park access, restoration projects, and funding initiatives. Much of the information existed, but it was scattered across different websites and difficult to visualize in a meaningful way. I wanted to create something that could bring this information together into one place where people could easily explore it themselves, hence what brings us here. 

I hope you enjoy exploring this dashboard!
`;

const PersonalStory = () => (
  <section className={styles.section}>
    <div className={styles.header}>
      <span className={styles.eyebrow}>Personal Perspective</span>
      <h2 className={styles.title}>A Story About These Parks</h2>
    </div>

    <div className={styles.grid}>
      {/* Left: Image gallery */}
      <div className={styles.galleryCard}>
        <ImageGallery />
      </div>

      {/* Right: Story */}
      <div className={styles.storyCard}>
        <div className={styles.storyScroll}>
          <div className={styles.storyQuoteMark}>"</div>
          {storyText.trim().split("\n\n").map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {paragraph.trim()}
            </p>
          ))}
          <div className={styles.storyAttribution}>
            <div className={styles.attributionLine} />
            <span>— Nihaal Warraich</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PersonalStory;