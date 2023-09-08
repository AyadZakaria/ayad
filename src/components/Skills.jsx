import React from "react";
import { skills_list } from "../../constants";
import "../assets/scss/skills.scss";

const Skills = () => {

  return (
    <div className="main_skills_contaicer">
      <div className="skills_info">
        <div className="left">
          <h2>I'm Specialized</h2>
          <p>In...</p>
        </div>
      </div>
      <div className="skills_cards">
        {skills_list.map((elem, key) => {
          return (
            <div className="skill_card" key={key}>
              <div className="mainCard">
                <span className="material-symbols-outlined">{elem.thumbnail}</span>
                <h3>{elem.title}</h3>
              </div>
              <div className="subCard">
                {elem.features.map((ele, key) => {
                  return (
                    <div key={key} className="subCardElem">
                      {ele.title}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
