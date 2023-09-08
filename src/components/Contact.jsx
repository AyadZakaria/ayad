import React from "react";
import "../assets/scss/ComponentsStyling/contact.scss";
import { Circle } from "../assets/svg";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div
      className="mainContactContainer"
      onClick={() => {
        navigate("/contact");
      }}
    >
      <div className="left">
        <h1>Let's</h1>
        <h3>Work Together...</h3>
        <button className="GetInTouchBtn">Get In Touch</button>
      </div>

      <img src={Circle} alt="Arrow Icon" className="ArrowIcon" />
    </div>
  );
};

export default Contact;
