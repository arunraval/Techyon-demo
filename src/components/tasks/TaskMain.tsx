import { useState } from "react";
import { down, eight, more, splash } from "../common/commonImage";
import TasksDashboard from "./TaskCards";

const TasksMain = () => {
  const [showProjects, setShowProjects] = useState(true);
  return (
    <div>
      <div className="project-section">
        <div
          className="all-projects"
          onClick={() => setShowProjects((prev) => !prev)}
          style={{ cursor: "pointer" }}
        >
          <span className="text">All Tasks</span>
          <img src={down} alt="" className="dropdown-icon" />
        </div>
        <div className="container">
          <div className="box box1">
            <img src={splash} alt="" />
          </div>
          <div className="box box2">
            <img src={eight} alt="" />
          </div>
          <div className="line"></div>
          <div className="more">
            <img src={more} alt="" />
          </div>
        </div>
      </div>

      {showProjects && <TasksDashboard />}
    </div>
  );
};

export default TasksMain;
