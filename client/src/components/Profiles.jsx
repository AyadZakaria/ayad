import React from "react";
import { Circle } from "../assets/svg/index";
import "../assets/scss/profiles.scss";
import { socials_links } from "../../constants";
import { useState } from "react";
import { socialsIcon } from "../assets/imgs";

const Profiles = () => {
  const [isShown, setIsShown] = useState(false);
  const [selected, seSelected] = useState(null);

  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };

  const handleHoverOne = (prop) => {
    setIsShown(true);
    seSelected(prop + 1);
  };
  const handleHoverOff = (prop) => {
    setIsShown(false);
    seSelected(null);
  };
  return (
    <div className="main_profiles">
      <div className="socials">
        {socials_links.map((elem, key) => {
          return (
            <div
              className="link"
              key={key}
              onClick={() => openLinkInNewTab(elem.url)}
              onMouseEnter={() => {
                handleHoverOne(key);
              }}
              onMouseLeave={() => {
                handleHoverOff(key);
              }}
            >
              <img src={elem.icon} alt={elem.title} />
              <div
                className="linkName"
                style={{
                  visibility:
                    isShown && key + 1 == selected ? "visible" : "hidden",
                }}
              >
                {elem.title}
              </div>
            </div>
          );
        })}
      </div>
      <div className="socials_text">
          <h4>Stay With Me</h4>
          <h5>Profiles</h5>
      </div>
    </div>
  );
};

export default Profiles;
