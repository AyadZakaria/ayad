import React from "react";
import "../assets/scss/ComponentsStyling/biocard.scss";
import { MainPic } from "../assets/imgs";
import { useNavigate } from "react-router-dom";
import { Cv } from "../assets/docs/index";

const BioCard = () => {
  const navigate = useNavigate();
  return (
    <div className="main_bio">
      <img
        src={MainPic}
        alt="Me"
        className="me"
        onClick={() => {
          navigate("/about");
        }}
      />
      <div className="info">
        <h4>Hi There ,</h4>
        <h4>I'm Ayad Zakaria</h4>
        <h1
          onClick={() => {
            navigate("/about");
          }}
        >
          <span>A</span>Full Stack web developer
        </h1>
        <a href={Cv} download={Cv} className="DownloadCvBtn">
          {" "}
          Download Cv
        </a>
      </div>
    </div>
  );
};

export default BioCard;
