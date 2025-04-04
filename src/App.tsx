import { useState } from "react";
import ProjectsMain from "./components/projects/Projectsmain";
import TasksMain from "./components/tasks/TaskMain";
import AddProjectModal from "./components/addProjectModal/AddProjectModal";

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="app">
        <div className="main-contact">
          <div className="main-title">Projects</div>
          <div className="btn-main">
            <button
              type="button"
              className="btn-primary"
              onClick={() => setOpenModal(true)}
            >
              + Projects
            </button>
          </div>
        </div>
        <div className="breadcrumb">
          <p className="breadcrumb-text">
            Dashboard /{" "}
            <span className="breadcrumb-subtext">Project Overview</span>
          </p>
        </div>
      </div>
      {/*  AddProjectModal Modal*/}
      {openModal && <AddProjectModal onClose={() => setOpenModal(false)} />}

      {/* Project Details */}
      <ProjectsMain />

      {/* Tasks Details */}
      <TasksMain />
    </>
  );
}

export default App;
