import React from "react";
import "./FormStyles.css";

const Modal = ({ message, onClose }) => (
  <div className="modal-overlay">
    <div className="modal-box">
      <p>{message}</p>
      <button onClick={onClose}>OK</button>
    </div>
  </div>
);

export default Modal;
