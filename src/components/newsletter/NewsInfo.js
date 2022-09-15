import React from "react";
import "./NewsInfo.css";

function NewsInfo({ Icon, subtext, text, styles }) {
  return (
    <div className="subinfo">
      {Icon}
      <h2>{subtext}</h2>
      <p>{text}</p>
    </div>
  );
}

export default NewsInfo;
