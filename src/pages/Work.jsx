import React, { useState, useEffect, useMemo, useCallback } from "react";
import Navbar from "../components/Navbar";
import { projects } from "../../constants";
import "../assets/scss/pagesStyling/work.scss";
import ProjectPopOut from "../utils/ProjectPopOut";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClickOutside = (e) => {
    const specificDiv = document.getElementById("ProjectsPopOut");

    // Check if the click target is not within the specific div
    if (specificDiv && !specificDiv.contains(e.target)) {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    // Add click event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const foundProject = projects.find((elem) => elem.id === selectedId);
    if (foundProject) {
      setSelectedProject(foundProject);
      console.log(selectedProject);
    }
  }, [selectedId]);

  useEffect(() => {
    handleClick();
  }, [selectedId]);

  const handleClick = (prop) => {
    setSelectedId(prop);
    setIsClicked(true);
    console.log(selectedId);
  };
  return (
    <>
      <Navbar />
      <section className="mainWorkContainer">
        <h1>All Projets</h1>
        <section className="workContainer">
          {projects.map((elem, key) => {
            return (
              <div
                className="workCard"
                key={key}
                onClick={() => {
                  handleClick(elem.id);
                }}
              >
                <img src={elem.thumbnail} alt="project Thumbnail" />
                <p>Web Development</p>
                <h3>{elem.title}</h3>
                <button
                  className="discoverBtn"
                  onClick={() => {
                    handleClick(elem.id);
                  }}
                >
                  Discover
                </button>
              </div>
            );
          })}
        </section>
      </section>
      <ProjectPopOut
        isClicked={isClicked}
        setIsClicked={setIsClicked}
        selectedId={selectedId}
        selectedProject={selectedProject}
        technologies={selectedProject.technologies}
      />
    </>
  );
};

export default Work;
