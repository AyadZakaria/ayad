import React from "react";
import Navbar from "../components/Navbar";
import { MainPic } from "../assets/imgs";
import "../assets/scss/about.scss";
import { experiencesList, socials_links } from "../../constants";
import { Link } from "react-router-dom";

const About = () => {
  const openLinkInNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <Navbar />

      <section className="mainAbout">
        <div className="left">
          <img src={MainPic} className="mainPic" alt="Ayad" />
          <h1>Ayad |Web Developer</h1>
          <div className="profiles">
            {socials_links.map((elem, key) => {
              return (
                <div
                  className="profileElem"
                  key={key}
                  onClick={() => openLinkInNewTab(elem.url)}
                >
                  <img src={elem.icon} alt={elem.title} />
                </div>
              );
            })}
          </div>
          <button className="HireMeBtn">
            <Link to="/contact">Hire Me</Link>
          </button>
        </div>
        <div className="right">
          <h1>About Me</h1>
          <p className="aboutMain">
            Greetings, I am Zakaria, a seasoned Fullstack developer with
            expertise in creating web and desktop applications, including
            database and backend systems.
            <br />
            My skillset also includes brand identity, graphics, and illustration
            design. I am a dedicated professional and would be happy to assist
            with any inquiries. Please do not hesitate to contact me for further
            information. Thank you for your consideration.
          </p>
          <h1>Experiences</h1>
          <div className="experiencesContainer">
            {experiencesList.map((elem, key) => {
              return (
                <div className="ExperienceCard" key={key}>
                  {/* <img src={elem.icon} alt={elem.title} /> */}
                  <span className="material-symbols-outlined">{elem.icon}</span>
                  <div className="experienceInfo">
                    <h3>{elem.title}</h3>
                    <p>{elem.desc}</p>
                    <div className="cardFooter">
                      <h4>{elem.entreprice}</h4>
                      <p>{elem.year}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
