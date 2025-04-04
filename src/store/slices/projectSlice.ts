import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Project, ProjectState, ProjectStatus } from "../../types/Projects";

const initialState: ProjectState = {
  projects: {
    "Not Started": [
      {
        id: "NS-001",
        name: "Wireframe Planning",
        progress: 50,
        startDate: "2025-04-01",
        endDate: "2025-04-05",
        teamMembers: 3,
        files: 2,
      },
    ],
    "In Progress": [
      {
        id: "IP-001",
        name: "Homepage Design",
        progress: 45,
        startDate: "2025-03-28",
        endDate: "2025-04-10",
        teamMembers: 4,
        files: 5,
      },
      {
        id: "IP-002",
        name: "Backend Integration",
        progress: 60,
        startDate: "2025-03-25",
        endDate: "2025-04-15",
        teamMembers: 2,
        files: 3,
      },
    ],

    Archived: [
      {
        id: "AR-001",
        name: "Old Dashboard",
        progress: 100,
        startDate: "2024-12-01",
        endDate: "2025-01-10",
        teamMembers: 2,
        files: 4,
      },
    ],
    Completed: [
      {
        id: "CP-001",
        name: "Logo Design",
        progress: 100,
        startDate: "2025-03-01",
        endDate: "2025-03-05",
        teamMembers: 1,
        files: 1,
      },
    ],
  },
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (
      state,
      action: PayloadAction<{ status: ProjectStatus; project: Project }>
    ) => {
      const { status, project } = action.payload;
      state.projects[status].push(project);
    },
  },
});

export const { addProject } = projectSlice.actions;
export default projectSlice.reducer;
