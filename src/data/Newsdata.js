// Newsdata.js
// Static article data — no API key, no network requests, no CORS issues.
// To update articles, edit the ARTICLES array below.

const ARTICLES = [
  {
    id: 1,
    title: "Newark Breaks Ground on Major Renovation of North Ward's Sal Bontempo Park",
    source: "Jersey Digs",
    date: "May 1, 2026",
    summary:
      "Newark has officially broken ground on a major renovation of the North Ward's Sal Bontempo Park, with stormwater management and city beautification at the center of the project.",
    imageUrl: "https://jerseydigs.com/wp-content/uploads/2026/05/Bontempo-Park-Newark-Rendering.jpg",
    imagePlaceholderColor: "#3a5a40",
    link: "https://jerseydigs.com/sal-bontempo-park-newark/",
    tag: "Development",
  },
  {
    id: 2,
    title: "Newark Explodes in Pink as 50th Cherry Blossom Festival Draws 100K+ Visitors",
    source: "New Jersey 101.5",
    date: "Mar 24, 2026",
    summary:
      "Branch Brook Park in Newark will be a sea of pink as 5,300 cherry blossoms bloom for the 50th annual Cherry Blossom Festival, with a full slate of activities planned leading up to Bloomfest on April 19.",
    imageUrl: "https://townsquare.media/site/385/files/2026/03/attachment-cherry-blossom-11.jpg?w=1200&q=75&format=natural",
    imagePlaceholderColor: "#588157",
    link: "https://nj1015.com/essex-county-cherry-blossom-festival/",
    tag: "Community",
  },
  {
    id: 3,
    title: "Cherry Blossom 10K Returns to Branch Brook Park in Newark",
    source: "News 12 New Jersey",
    date: "Apr 10, 2026",
    summary:
      "Hundreds of participants and spectators gathered at Branch Brook Park to celebrate 50 years of racing among the park's iconic cherry blossom landscape.",
    imageUrl: "https://images-cf.news12static.com/3kqcuzntcg31/Nx7FPGr4PTrvJlMPkfL1l/3bac99e68835f43fb6ecc69aea3f2211/3ce39e8c-38c3-4be1-bfac-891afb77a97c.jpg",
    imagePlaceholderColor: "#606c38",
    link: "https://newjersey.news12.com/2026/04/10/cherry-blossom-10k-returns-to-branch-brook-park-in-newark/794YMkarmHBeBY6LE5CZmn",
    tag: "Community",
  },
];

export const fetchNewsData = async () => ARTICLES;