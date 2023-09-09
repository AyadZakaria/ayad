import React, { useEffect, useState } from "react";
import { DribbbleIcon, GithubIcon } from "../assets/svg";

const ProjectPopOut = (props) => {
  const [isShownGit, setIsShownGit] = useState(false);
  const [isShownDr, setIsShownDr] = useState(false);
  const { isClicked, selectedId, setIsClicked, selectedProject, technologies } =
    props;

  const handleHoverOnGit = () => {
    setIsShownGit(true);
  };
  const handleHoverOutGit = () => {
    setIsShownGit(false);
  };
  const handleHoverOnDr = () => {
    setIsShownDr(true);
  };
  const handleHoverOutDr = () => {
    setIsShownDr(false);
  };
  if (selectedProject.length !== 0 && isClicked) {
    return (
      <>
        <section id="ProjectsPopOut" className="ProjectsPopOut">
          <span
            className="material-symbols-outlined  closeX"
            onClick={() => {
              setIsClicked(false);
            }}
          >
            close
          </span>
          <div className="projectThumbnail">
            <img src={selectedProject.thumbnail} alt={selectedProject.title} />
            <div className="projectLinks">
              <div
                className="projectLinkIcon"
                onMouseEnter={() => {
                  handleHoverOnGit();
                }}
                onMouseLeave={() => {
                  handleHoverOutGit();
                }}
              >
                <img
                  src={GithubIcon}
                  alt="Github"
                  onClick={() => {
                    window.open(selectedProject.url, "_blank");
                  }}
                />

                <p
                  style={{
                    visibility: isShownGit ? "visible" : "hidden",
                  }}
                >
                  See it In Github
                </p>
              </div>

              <div
                className="projectLinkIcon"
                onMouseEnter={() => {
                  handleHoverOnDr();
                }}
                onMouseLeave={() => {
                  handleHoverOutDr();
                }}
              >
                <img
                  src={DribbbleIcon}
                  alt="Dribbble"
                  onClick={() => {
                    window.open(selectedProject.dribbbleLink, "_blank");
                  }}
                />
                <p
                  style={{
                    visibility: isShownDr ? "visible" : "hidden",
                  }}
                >
                  See it In Dribbble
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <h3>{selectedProject.title}</h3>
            <div className="descriptionContainer">
              <h4>Description</h4>
              <p className="projectDescription">{selectedProject.desc}</p>
            </div>
            <h4>Technologies</h4>
            <div className="technologiesContainer">
              {technologies &&
                technologies.map((elem, key) => {
                  return (
                    <div className="tech" key={key}>
                      <p>{elem.title}</p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default ProjectPopOut;
