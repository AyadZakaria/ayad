import React from "react";
import { projects } from "../../constants";
import "../assets/scss/ComponentsStyling/projects.scss";
import { Circle } from "../assets/svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/work");
      }}
    >
      <div className="main_projects_container">
        <Splide
          style={{
            background: "transparent",
          }}
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            focus: "center",
            arrows: false,
            pagination: true,
          }}
        >
          {projects.map((elem, key) => {
            return (
              <SplideSlide key={key}>
                <img
                  src={elem.thumbnail}
                  className="project_preview"
                  alt="project preview"
                />
                {/* <div className="project_hover">
                  <h2>{elem.title}</h2>
                </div> */}
              </SplideSlide>
            );
          })}
        </Splide>
        <div className="project_info">
          <p>checkout </p>
          <h4>My Projects</h4>
          <img src={Circle} alt="Arrow Icon" className="ArrowIcon" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
