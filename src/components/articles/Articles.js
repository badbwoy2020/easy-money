import React from "react";
import "./Articles.css";
import ArticlesItems from "./ArticlesItems";
import { currency, restaurant, plane, confetti } from "../../assets/images";

function Articles() {
  return (
    <div className="articles">
      <div className="max__container">
        <h1 className="articles__header">Latest Articles</h1>
      </div>
      <div className="max__container">
        <div className="articles__flex-item">
          <ArticlesItems
            img={currency}
            author="Claire Robinson"
            subtext="Recieve money in any currency with no fees"
            text="The world is getting smaller and we're becoming more mobile.So why should you be force to recieve money in a single..."
          />
          <ArticlesItems
            img={restaurant}
            author="Wilson Hutton"
            subtext="Treat yourself without worrying about money"
            text="Our simple budgeting features allows you to seperate out your spending and set realistic limits each month.This mans you..."
          />
          <ArticlesItems
            img={plane}
            author="Claire Robinson"
            subtext="Take your Easycard everywhere you you go"
            text="The world is getting smaller and we're becoming more mobile.So why should you be force to recieve money in a single..."
          />
          <ArticlesItems
            img={confetti}
            author="Claire Robinson"
            subtext="Recieve money in any currency with no fees"
            text="The world is getting smaller and we're becoming more mobile.So why should you be force to recieve money in a single..."
          />
        </div>
      </div>
    </div>
  );
}

export default Articles;
