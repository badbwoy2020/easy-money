import React from "react";
import "./ArticlesItems.css";

function ArticlesItems({ img, author, subtext, text }) {
  return (
    <div className="articlesItems">
      <img src={img} alt="" />
      <div className="articlesItems__text">
        <small>by {author}</small>
        <h2>{subtext}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ArticlesItems;
