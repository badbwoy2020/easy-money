import React from "react";
import { Iconclose } from "../../assets/icons";
import { useStateValue } from "../../context/DataLayer";
import "./Modal.css";

function Modal() {
  const [dispatch] = useStateValue();
  return (
    <div className="modal">
      <div
        className="modal__left"
        onClick={() =>
          dispatch({
            type: "CLOSE_MODAL",
          })
        }
      >
        <Iconclose />
      </div>
      <p>Home</p>
      <p>About</p>
      <p>Contact</p>
      <p>Blog</p>
      <p>Careers</p>
    </div>
  );
}

export default Modal;
