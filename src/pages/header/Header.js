import React from "react";
import "./Header.css";
import { Logo } from "../../assets/icons";
import { useAuth } from "../../context/LoginContext";
import { Link } from "react-router-dom";
function Header() {
  const { setModal, setUser } = useAuth();

  return (
    <div className="header">
      <div className="header__item-flex ">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo className="header-logo" onClick={() => setUser(false)} />
        </Link>
        <div className="header__middle">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <button className="style--color header__button">Request Invite</button>

        <div className="header__right" onClick={() => setModal(true)}>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
