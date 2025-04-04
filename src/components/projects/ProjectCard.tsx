import React, { useState } from "react";
import "./projectCard.scss";
import { calendar, clipFile, file } from "../common/commonImage";
import projectsData from "../../data/projectData.json";

const INITIAL_VISIBLE_COUNT = 3;

const imageUrl =
  "https://storage.googleapis.com/a1aa/image/lH_ei_CfFgDbuTS-_nLlDGXdf7cSayPFY6MBs6WgQwQ.jpg";

const ProjectDashboard: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(
    Object.keys(projectsData).reduce((acc, status) => {
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
      {Object.entries(projectsData).map(([status, projects]) => (
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
              <div className="projectCard" key={project.id}>
                <div className="cardHeader">
                  <div className="projectTitle">
                    <img src={file} alt="" />
                    <h3 className="projectName">{project.name}</h3>
                  </div>
                  <span className="idText">ID: {project.id}</span>
                </div>

                <div className="progressBar">
                  <span className="progressBarNumber">07</span>
                  <div className="progressTrack">
                    <div
                      className="progressFill"
                      style={{ width: `${project.progress}%` }}
                    >
                      {project.progress}%
                    </div>
                  </div>
                  <span className="progressBarNumber">14</span>
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

export default ProjectDashboard;
