import React, { useEffect } from "react";
import "../assets/scss/ComponentsStyling/navbar.scss";
import { navbar_items } from "../../constants";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState(0);
  const [xClicked, setXclicked] = useState(false);
  const handleActiveNav = (prop) => {
    setActiveLink(prop);
  };
  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchingLink = navbar_items.find((item) => item.url === currentPath);
    if (matchingLink) {
      setActiveLink(matchingLink.id);
    }
  }, [activeLink]);
  return (
    <header className="nav_header">
      <h2
        className="Logo"
        onClick={() => {
          navigate("/");
        }}
      >
        AYAD
      </h2>
      <nav className="nav_list">
        {navbar_items.map((elem, key) => {
          return (
            <li className="nav_elem" key={key}>
              <Link
                onClick={() => {
                  handleActiveNav(elem.id);
                }}
                className={activeLink === elem.id ? "activeLink" : ""}
                to={elem.url}
              >
                {elem.title}
              </Link>
            </li>
          );
        })}
      </nav>

      <Link to="/contact">
        <button className="main_btn">Let's Talk</button>
      </Link>

      <span
        className="material-symbols-outlined navX"
        onClick={() => {
          setXclicked(!xClicked);
        }}
      >
        {xClicked ? "close" : "menu"}
      </span>

      <div className="subNav" style={{ top: xClicked ? "100%" : "-900%" }}>
        {navbar_items.map((elem, key) => {
          return (
            <li className="nav_elem" key={key}>
              <Link to={elem.url}>{elem.title}</Link>
            </li>
          );
        })}

        <Link to="/contact">
          <button className="SubTalkBtn">Let's Talk</button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
