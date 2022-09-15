import React from "react";
import "./Newsletter.css";
import { NewsInfo } from "../../components/index";
import {
  Icononline,
  IconBudget,
  Icononboarding,
  IconApi,
} from "../../assets/icons";

function Newsletter() {
  return (
    <div className="newsletter">
      <div className="max__container">
        <div className="newsletter__text">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank into financial
            hub.Control your financies likke never before
          </p>
        </div>
        <div className="newsletter__item-flex">
          <NewsInfo
            Icon={<Icononline />}
            subtext="Online Banking"
            text="Our modern web and mobile applications allow you to keep track of your
            finances wherever you are in the world because we own the world."
          />
          <NewsInfo
            Icon={<IconBudget />}
            subtext="Simple Budgeting"
            text="See exactly where your money goes each month.Recieve notifications when you're close to hitting your limits and it worth th sample engineering"
          />
          <NewsInfo
            Icon={<Icononboarding />}
            subtext="Fast Onboarding"
            text="We don't do branches open your account in minutes online and start taking control of your financies right away and forever."
          />
          <NewsInfo
            className="news-last"
            Icon={<IconApi />}
            subtext="Open Api"
            text="Manage your investments ,savings ,pension and much more from one account.Tracking your money has never been easier."
          />
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
