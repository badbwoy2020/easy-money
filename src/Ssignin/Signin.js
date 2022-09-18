import React from "react";
import { useAuth } from "../context/LoginContext";
import { Link } from "react-router-dom";
import "./Signin.css";

function Signin() {
  const { setUser } = useAuth();

  return (
    <div className="sign">
      <div className="sign__box">
        <h1>EasyBank</h1>
        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <p className="style--color-bg " onClick={() => setUser(true)}>
            SIGN IN
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Signin;
