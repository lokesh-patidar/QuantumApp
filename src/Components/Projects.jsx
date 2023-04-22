import React, { useState } from "react";
import "../Styles/Project.css";
import { ProjectItem } from "./ProjectItem";

export const Projects = () => {

  const [data, setData] = useState([1,2]);

  return (
    <div id="Projects">
      <div className="projectsContainer">
        <div>
          <div className="projectheading">
            <h1>Projects</h1>
          </div>

          <div className="projectBox">
            {data.map((e,i) => {
              return <ProjectItem key={i}/>
            })}
          </div>
        </div>
      </div>
    </div>
  );
};