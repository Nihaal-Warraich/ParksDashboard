import React from "react";

const SectionDivider = ({ flip = false, fromColor = "var(--cornsilk)", toColor = "var(--cornsilk)" }) => (
  <div
    style={{
      height: "60px",
      background: fromColor,
      position: "relative",
      overflow: "hidden",
      transform: flip ? "scaleY(-1)" : "none",
    }}
  >
    <svg
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}
    >
      <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill={toColor} />
    </svg>
  </div>
);

export default SectionDivider;