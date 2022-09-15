import React from "react";
import "./Banner.css";
import { mockups } from "../../assets/images";

function Banner() {
  return (
    <div className="banner">
      <div className="banner__left">
        <h2>Next generation digital banking</h2>
        <p>
          Take your financial life online.Your Easybank account will be
          one-stop-shop for spending,saving ,budgeting, investing and much more
        </p>
        <p className="style--color banner-button">Request Invites</p>
      </div>
      <div className="banner__right">
        <img src={mockups} alt="" />
      </div>
    </div>
  );
}

export default Banner;
