export interface Project {
  id: string;
  name: string;
  progress: number;
  startDate: string;
  endDate: string;
  files: number;
  teamMembers: number;
}

export type ProjectStatus =
  | "Not Started"
  | "In Progress"
  | "Completed"
  | "Archived";

export interface ProjectState {
  projects: Record<ProjectStatus, Project[]>;
}
