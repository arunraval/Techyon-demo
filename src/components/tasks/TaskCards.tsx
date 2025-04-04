import React, { useState } from "react";
import tasksData from "../../data/tasksData.json";
import { calendar, clipFile, file } from "../common/commonImage";
import "./taskCard.scss";

const INITIAL_VISIBLE_COUNT = 3;

const imageUrl =
  "https://storage.googleapis.com/a1aa/image/lH_ei_CfFgDbuTS-_nLlDGXdf7cSayPFY6MBs6WgQwQ.jpg";

const TasksDashboard: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(
    Object.keys(tasksData).reduce((acc, status) => {
      acc[status] = INITIAL_VISIBLE_COUNT;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleViewMore = (status: string) => {
    setVisibleCount((prev) => ({
      ...prev,
      [status]: prev[status] + 3,
    }));
  };
  return (
    <div className="dashboardGrid">
      {Object.entries(tasksData).map(([status, projects]) => (
        <div
          key={status}
          className={`statusColumn ${status.toLowerCase().replace(/\s/g, "")}`}
        >
          <div className="statusHeader">
            <span>{status}</span>
            <span className="statusCount">{projects.length}</span>
          </div>

          <div className="projectGrid">
            {projects.slice(0, visibleCount[status]).map((project) => (
              <div
                className="tasksCard"
                key={project.id}
                data-label={project?.process || undefined}
              >
                <div className="container">
                  <div className="container-demo">
                    <div className="cardHeader">
                      <div className="projectTitle">
                        <img src={file} alt="" />
                        <h3 className="projectName">{project.name}</h3>
                      </div>
                      <span className="idText">ID: {project.id}</span>
                    </div>

                    <div className="progress-container">
                      <span className="progress-label">07</span>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                        <div className="progress-text">
                          <span>{project.progress}%</span>
                        </div>
                      </div>
                      <span className="progress-label">14</span>
                    </div>

                    <div className="dateRange">
                      <img src={calendar} alt="" />
                      {project.startDate} - {project.endDate}
                    </div>
                    <hr className="line" />
                    <div className="inline-section">
                      <div className="teamSection">
                        <div className="image-overlap-container">
                          <div className="image-wrapper">
                            <img src={imageUrl} alt="Team member" />
                          </div>
                          <div className="image-wrapper overlapped">
                            <img src={imageUrl} alt="Team member" />
                          </div>
                          <div className="image-wrapper overlapped">
                            <img src={imageUrl} alt="Team member" />
                          </div>
                        </div>
                        <span>{project.teamMembers}</span>
                      </div>

                      <div className="fileSection">
                        <img src={clipFile} alt="" />
                        <span>{project.files} Files</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {visibleCount[status] < projects.length && (
            <div className="more" onClick={() => handleViewMore(status)}>
              View More
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TasksDashboard;
