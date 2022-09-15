import React from "react";
import "./Footer.css";
import {
  FooterLogo,
  Iconfacebook,
  Iconinstagram,
  Iconpinterest,
  Icontwitter,
  Iconyoutube,
} from "../../assets/icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <FooterLogo />
        <div className="footer__left-icons">
          <Iconfacebook />
          <Iconyoutube />
          <Icontwitter />
          <Iconpinterest />
          <Iconinstagram />
        </div>
      </div>
      <div className="footer__middle">
        <div>
          <p>About Us</p>
          <p> Contact</p>
          <p>Blog</p>
        </div>
        <div>
          <p>Career</p>
          <p>Support</p>
          <p>Private Policy</p>
        </div>
      </div>
      <div className="footer__right">
        <button className="style--color-bg btn-small">Request Invites</button>
        <p>&copy;Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
