import React from "react";
import "./Header.css";
import { Logo } from "../../assets/icons";
import { useStateValue } from "../../context/DataLayer";
function Header() {
  const [{}, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__item-flex ">
        <Logo className="header-logo" />
        <div className="header__middle">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
          <p>Careers</p>
        </div>
        <button className="style--color header__button">Request Invite</button>
        <div
          className="header__right"
          onClick={() =>
            dispatch({
              type: "OPEN_MODAL",
            })
          }
        >
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default Header;
