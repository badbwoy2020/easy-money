import React from "react";
import { Iconclose } from "../../assets/icons";
import { useAuth } from "../../context/LoginContext";
import "./Modal.css";

function Modal() {
  const { setModal } = useAuth();
  return (
    <div className="modal">
      <div className="modal__left" onClick={() => setModal(false)}>
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
