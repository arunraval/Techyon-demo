import ProjectsMain from "./components/projects/Projectsmain";
import TasksMain from "./components/tasks/TaskMain";

function App() {
  return (
    <>
      <div className="app">
        <div className="main-contact">
          <div className="main-title">Projects</div>
          <div className="btn-main">
            <button type="button" className="btn-primary">
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
      <ProjectsMain />
      <TasksMain />
    </>
  );
}

export default App;
